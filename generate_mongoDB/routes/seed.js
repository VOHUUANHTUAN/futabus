const express = require("express");
const router = express.Router();
const faker = require("faker");
const Ticket = require("../models/Ticket");

// Function to generate unique 8-digit seat code
function generateUniqueSeatCode() {
    return Math.floor(10000000 + Math.random() * 90000000);
}
function generatePhoneNumber() {
    return faker.phone.phoneNumber('##########');
}
// Function to generate unique 10-digit invoice number
async function generateUniqueInvoiceNumber() {
    let maTraCuuHoaDon;
    do {
        maTraCuuHoaDon = Math.floor(1000000000 + Math.random() * 9000000000);
    } while (!(await isUniqueInvoiceNumber(maTraCuuHoaDon))); // Wait for the promise to resolve
    return maTraCuuHoaDon;
}

// Function to check if invoice number is unique
async function isUniqueInvoiceNumber(maTraCuuHoaDon) {
    try {
        const existingInvoice = await Ticket.findOne({ maTraCuuHoaDon });
        return !existingInvoice;
    } catch (error) {
        console.error("Error checking unique invoice number:", error);
        return false; // Handle error case appropriately
    }
}

// Function to generate unique booking code HS1JD1, etc.
function generateBookingCode() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letter1 = alphabet[Math.floor(Math.random() * alphabet.length)];
    const letter2 = alphabet[Math.floor(Math.random() * alphabet.length)];
    const number1 = Math.floor(Math.random() * 10);
    return `HS${letter1}${number1}${letter2}${number1}`;
}

// Route to seed sample data
router.get("/seed", async (req, res) => {
    const seed_count = 100000;
    let ticketData = [];

    for (let i = 0; i < seed_count; i++) {
        const maDatVe = generateBookingCode();
        const tuyenXe = "Tuyến xe Tp.HCM đi Đà Nẵng";
        const benXe = "Bến Xe Miền Đông";
        const thoiGianXuatBen = faker.date.future();
        const maGhe = generateUniqueSeatCode(); // Generate unique 8-digit seat code
        const diemLenXe = "Ben A";
        const thoiGianLenXe = faker.date.between(thoiGianXuatBen, faker.date.future());
        const giaVe = 100000;
        const bienSoXe = `${faker.datatype.number({ min: 10, max: 99 })}${faker.random.alpha().toUpperCase()}-${faker.datatype.number({ min: 10000, max: 99999 })}`;
        const maTraCuuHoaDon = await generateUniqueInvoiceNumber(); // Await here since it's async
        const soDienThoai = generatePhoneNumber();
        const hoVaTen = faker.name.findName();
        const email = faker.internet.email();
        const tongGiaVe = 1000000;
        const trangThai = "Thành công";
        const pTTT = "Momo";
        const rePurchase = "https://futabus.vn/dat-ve?from=TPHCM&fromTime=0s7-09-2024&isReturn=false&ticketCount=1&to=DANANG";
        const soGhe = `A${faker.datatype.number({ min: 1, max: 40 })}`; // Example population of soGhe

        ticketData.push({
            maDatVe,
            tuyenXe,
            benXe,
            thoiGianXuatBen,
            maGhe,
            diemLenXe,
            thoiGianLenXe,
            giaVe,
            bienSoXe,
            maTraCuuHoaDon,
            soDienThoai,
            hoVaTen,
            email,
            tongGiaVe,
            trangThai,
            pTTT,
            rePurchase,
            soGhe // Ensure soGhe is included
        });
    }

    const batchSize = 500; // Number of documents per batch
    const totalDocs = ticketData.length;

    for (let i = 0; i < totalDocs; i += batchSize) {
        const batch = ticketData.slice(i, i + batchSize);
        try {
            await Ticket.insertMany(batch);
            console.log(`Batch ${i / batchSize + 1} seeded successfully!`);
        } catch (error) {
            console.error(`Error seeding batch ${i / batchSize + 1}:`, error.message);
        }
    }

    res.status(200).send("Data seeded successfully!");
});

module.exports = router;
