const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ticketSchema = new mongoose.Schema({
    maDatVe: { type: String, required: true }, // Ví dụ: HS1JD1
    maGhe: { type: Number, required: true, unique: true, min: 10000000, max: 99999999 }, // Số ngẫu nhiên 8 chữ số
    tuyenXe: { type: String, required: true },
    benXe: { type: String, required: true },
    thoiGianXuatBen: { type: Date, required: true },
    soGhe: { type: String, required: true }, // Dạng "A1"
    diemLenXe: { type: String, required: true },
    thoiGianLenXe: { type: Date, required: true },
    giaVe: { type: Number, required: true },
    bienSoXe: { type: String, required: true }, // Dạng "54A-38932"
    maTraCuuHoaDon: { type: Number, required: true, unique: true, min: 1000000000, max: 9999999999 }, // 10 chữ số duy nhất
    soDienThoai: { type: String, required: true },
    hoVaTen: { type: String, required: true },
    email: { type: String, required: true },
    tongGiaVe: { type: Number, required: true },
    trangThai: { type: String, required: true },
    pTTT: { type: String, required: true },
    rePurchase: { type: String, required: true },
}, { timestamps: true });

ticketSchema.plugin(uniqueValidator);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
