// src/components/InvoiceDetails.js
import React, { forwardRef } from 'react';

const InvoiceDetails = forwardRef(({ data }, ref) => {
    const formatDateTime = (dateTime) => {
        const date = new Date(dateTime);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return {
            day,
            month,
            year,
            hours,
            minutes,
        };
    };

    const thoiGianXuatBen = formatDateTime(data.thoiGianXuatBen);
    const ngayKhoiHanh = formatDateTime(data.ngayKhoiHanh);
    return (
        <div ref={ref}>
            <div className="invoice-details p-5 border border-gray-300 bg-gray-50 rounded-md">
                <div className="invoice-header flex items-center pb-3 mb-1">
                    {/* Logo */}
                    <div className="logo w-1/3 pr-5">
                        <img src={process.env.PUBLIC_URL + '/logo_futabus.png'} alt="Company Logo" className="w-full h-auto" />
                    </div>
                    {/* Company Info */}
                    <div className="company-info w-2/3 pl-5">
                        <h3 className="text-lg font-bold">CHI NHÁNH THÀNH PHỐ HỒ CHÍ MINH - CÔNG TY CỔ</h3>
                        <h3 className="text-lg font-bold">PHẦN XE KHÁCH PHƯƠNG TRANG FUTABUSLINES</h3>
                    </div>
                </div>
                <div className="invoice-header-2 flex items-center pb-3 mb-2">
                    <div className="logo w-1/3 pr-5">
                        <div className="detail mb-2">
                            Ký hiệu: {data.kyHieu}
                        </div>
                        <div className="detail mb-2">
                            Số: <span className='font-bold text-3xl'>{data.soHoaDon}</span>
                        </div>
                    </div>
                    {/* Company Info */}
                    <div className="company-info w-2/3 pl-5">
                        <div>Địa chỉ: 486-486A Lê Văn Lương, Phường Tân Phong, Quận 7, Tp Hồ Chí Minh</div>
                        <div className="detail flex mb-2">
                            <div className="w-1/2 pr-2">
                                <div>Điện thoại: 19006067</div>
                            </div>
                            <div className="w-1/2 pl-2">
                                <div>Mã số thuế: 0312241579-033</div>
                            </div>
                        </div>

                    </div>
                </div>
                <h3 className="section-title text-center text-4xl font-semibold text-red-500">VÉ XE KHÁCH</h3>
                <div className="text-center italic mb-2">(Bản thể hiện của hóa đơn điện tử)</div>

                <div className="detail mb-2">
                    <strong>Lộ trình:</strong> {data.loTrinh}
                </div>
                <div className="detail flex mb-2">
                    <div className="w-1/3 pr-2">
                        <div>
                            <strong>Giá vé:</strong> {data.giaVe.toLocaleString()} VND

                        </div>
                    </div>
                    <div className="w-2/3 pl-2">
                        <span className="text-gray-500"> (Giá trên đã bao gồm thuế GTGT: 8% và bảo hiểm hành khách)</span>
                    </div>
                </div>

                <div className="detail flex mb-2">
                    <div className="w-1/2 pr-2">
                        <strong>Số ghế:</strong> {data.soGhe}
                    </div>
                    <div className="w-1/2 pl-2">
                        <strong>Số xe:</strong> {data.soXe}
                    </div>
                </div>
                <div className="detail mb-2">
                    <strong>Xuất bến:</strong> .....{thoiGianXuatBen.hours}..... Giờ .....{thoiGianXuatBen.minutes}..... Ngày khởi hành:
                    .....{thoiGianXuatBen.day}..... / .....{thoiGianXuatBen.month}..... / .....{thoiGianXuatBen.year}.....
                </div>
                <div className="flex items-center text-center justify-end ">
                    <div className="w-1/2 pr-2">
                        <div className="mb-2">
                            <span>Ngày ...{ngayKhoiHanh.day}... tháng ...{ngayKhoiHanh.month}... năm ...{ngayKhoiHanh.year}...</span>
                        </div>
                        <div className="italic">Người bán hàng</div>
                        <div className="text-red-600 border border-gray-300 p-2 flex items-center mb-4">
                            <div className="w-1/4 mr-4">
                                <img src={process.env.PUBLIC_URL + '/logo_tick.png'} alt="check logo" className="w-full h-auto" />
                            </div>
                            <div className="w-3/4">
                                <p className="font-bold text-left">Được ký bởi: CHI NHÁNH THÀNH PHỐ HỒ CHÍ MINH - CÔNG TY CỔ PHẦN XE KHÁCH PHƯƠNG TRANG FUTABUSLINES</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail mb-2 text-center">
                    <span>Cung cấp bởi CYBERLOTUS, MST: 0105232093</span>
                </div>
                <div className="detail mb-2 text-center">
                    <span>Tra cứu hóa đơn điện tử tại trang web: <a href="https://hoadon.futabus.vn" target="_blank" rel="noopener noreferrer">https://hoadon.futabus.vn</a>  Mã số tra cứu: {data.maHoaDon}</span>
                </div>
            </div>
        </div>
    );
});

export default InvoiceDetails;
{
    index === 0 && (
        <>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>
                FUTA Bus Lines đã gửi thông tin vé đã đặt về địa chỉ email {ticket.email}. Vui lòng kiểm tra lại.
            </h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ flex: '1', paddingRight: '1rem' }}>
                    <p style={{ display: 'flex', alignItems: 'baseline' }}>
                        <span style={{ fontWeight: 'bold', marginRight: '50px' }}>Họ và Tên:</span> {ticket.hoVaTen}
                    </p>
                    <p style={{ display: 'flex', alignItems: 'baseline' }}>
                        <span style={{ fontWeight: 'bold', marginRight: '84px' }}>Email:</span> {ticket.email}
                    </p>
                    <p style={{ display: 'flex', alignItems: 'baseline' }}>
                        <span style={{ fontWeight: 'bold', marginRight: '20px' }}>Số Điện Thoại:</span> {ticket.soDienThoai}
                    </p>
                </div>
                <div style={{ flex: '1', paddingLeft: '1rem' }}>
                    <p>
                        <span style={{ fontWeight: 'bold', marginRight: '50px' }}>Tổng Giá Vé:</span> {ticket.tongGiaVe} VND
                    </p>
                    <p>
                        <span style={{ fontWeight: 'bold', marginRight: '104px' }}>PTTT:</span> {ticket.phuongThucThanhToan || 'N/A'}
                    </p>
                    <p>
                        <span style={{ fontWeight: 'bold', marginRight: '62px' }}>Trạng Thái:</span> {ticket.trangThai}
                    </p>
                </div>
            </div>
        </>
    )
}