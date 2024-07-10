import React, { useState, useRef } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import domtoimage from 'dom-to-image';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const TicketForm = () => {
    const ticketRefs = useRef([]);

    const [soDienThoai, setSoDienThoai] = useState('');
    const [maDatVe, setMaDatVe] = useState('');
    const [tickets, setTickets] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:8085/api/tickets/busline/futa/booking/history-ticket', {
                params: {
                    maDatVe,
                    soDienThoai
                }
            });
            setTickets(response.data);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Không tìm thấy vé với thông tin đã nhập.');
            setTickets([]);
        }
    };

    const formatDateTime = (dateTimeStr) => {
        const date = new Date(dateTimeStr);
        return `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)} ${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;
    };

    const handleDownload = (index) => {
        if (ticketRefs.current[index] === null) {
            return;
        }

        const element = ticketRefs.current[index];
        const buttons = element.querySelectorAll('button');

        // Hide all buttons
        buttons.forEach(button => {
            button.style.display = 'none';
        });

        domtoimage.toPng(element, { bgcolor: 'white' })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = `ticket_${index + 1}.png`;
                link.href = dataUrl;
                link.click();

                // Show all buttons again
                buttons.forEach(button => {
                    button.style.display = 'inline-block';
                });
            })
            .catch((err) => {
                console.error('Oops, something went wrong!', err);

                // Show all buttons again in case of error
                buttons.forEach(button => {
                    button.style.display = 'inline-block';
                });
            });
    };

    const handleCopy = (maTraCuuHoaDon) => {
        navigator.clipboard.writeText(maTraCuuHoaDon)
            .then(() => {
                console.log('Mã tra cứu hóa đơn đã được sao chép.');
            })
            .catch(err => {
                console.error('Không thể sao chép mã tra cứu hóa đơn: ', err);
            });
    };

    return (
        <Container maxWidth="lg">
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                <TextField
                    label="Số Điện Thoại"
                    variant="outlined"
                    fullWidth
                    value={soDienThoai}
                    onChange={(e) => setSoDienThoai(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Mã Đặt Vé"
                    variant="outlined"
                    fullWidth
                    value={maDatVe}
                    onChange={(e) => setMaDatVe(e.target.value)}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Tra cứu
                </Button>
            </Box>

            {errorMessage && (
                <Typography color="error" variant="body1" sx={{ mt: 2 }}>
                    {errorMessage}
                </Typography>
            )}

            <Box sx={{ mt: 3 }}>
                {tickets.map((ticket, index) => (
                    <div key={index}>
                        {index === 0 && (
                            <div>
                                <h3 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.5rem' }}>
                                    Mua vé thành công
                                </h3>
                                <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                    FUTA Bus Lines đã gửi thông tin vé đã đặt về địa chỉ email {ticket.email}. Vui lòng kiểm tra lại.
                                </h1>
                                <div style={{ display: 'flex', marginBottom: '1rem', justifyContent: 'center', paddingLeft: '100px' }}>
                                    <div style={{ flex: '1' }}>
                                        <p style={{ display: 'flex', alignItems: 'baseline' }}>
                                            <span style={{ fontWeight: 'bold', paddingRight: '50px' }}>Họ và Tên:</span> {ticket.hoVaTen}
                                        </p>
                                        <p style={{ display: 'flex', alignItems: 'baseline' }}>
                                            <span style={{ fontWeight: 'bold', paddingRight: '84px' }}>Email:</span> {ticket.email}
                                        </p>
                                        <p style={{ display: 'flex', alignItems: 'baseline' }}>
                                            <span style={{ fontWeight: 'bold', paddingRight: '20px' }}>Số Điện Thoại:</span> {ticket.soDienThoai}
                                        </p>
                                    </div>
                                    <div style={{ flex: '1' }}>
                                        <p>
                                            <span style={{ fontWeight: 'bold', paddingRight: '20px' }}>Tổng Giá Vé:</span> {ticket.tongGiaVe} VND
                                        </p>
                                        <p>
                                            <span style={{ fontWeight: 'bold', paddingRight: '75px' }}>PTTT:</span> {ticket.pTTT || 'N/A'}
                                        </p>
                                        <p>
                                            <span style={{ fontWeight: 'bold', paddingRight: '35px' }}>Trạng Thái:</span> {ticket.trangThai}
                                        </p>
                                    </div>
                                    <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Button variant="contained" href="https://futabus.vn/dat-ve?from=TPHCM&fromTime=07-09-2024&isReturn=false&ticketCount=1&to=DANANG">
                                            Mua lại vé xe
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {tickets.map((ticket, index) => (
                        <div key={index} ref={(el) => (ticketRefs.current[index] = el)} style={{ backgroundColor: 'white', marginRight: '20px', marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '350px' }}>
                            <p style={{ textAlign: 'center' }}><strong>Mã ghế:</strong> {ticket.maGhe}</p>
                            <p><strong>Mã đặt vé:</strong> {ticket.maDatVe}</p>
                            <p><strong>Tuyến xe:</strong> {ticket.tuyenXe}</p>
                            <p><strong>Thời gian xuất bến:</strong> {formatDateTime(ticket.thoiGianXuatBen)}</p>
                            <p><strong>Số ghế:</strong> {ticket.soGhe}</p>
                            <p><strong>Điểm lên xe:</strong> {ticket.diemLenXe}</p>
                            <p><strong>Thời gian tới điểm lên xe:</strong> <span style={{ color: 'red' }}>Trước {formatDateTime(ticket.thoiGianXuatBen)}</span></p>
                            <p><strong>Quý khách vui lòng có mặt tại Bến xe/Văn Phòng</strong> </p>
                            <p><strong>{ticket.benXe}</strong> </p>

                            <p><span style={{ color: 'red' }}>Trước {formatDateTime(ticket.thoiGianXuatBen)}</span></p>
                            <p><strong>để được trung chuyển hoặc kiểm tra thông tin trước khi lên xe.</strong> </p>

                            <p><strong>Giá vé:</strong> {ticket.giaVe}</p>
                            <p><strong>Biển số xe:</strong> {ticket.bienSoXe}</p>
                            <p>
                                <strong>Mã tra cứu hóa đơn:</strong>
                                {ticket.maTraCuuHoaDon}
                                <Button variant="text" onClick={() => handleCopy(ticket.maTraCuuHoaDon)}><ContentCopyIcon /></Button>
                            </p>
                            <p><strong>Tra cứu hóa đơn :</strong> <a href='https://hoadon.futabus.vn/#/tracuuhoadon/tracuu' >tại đây</a></p>

                            <p style={{ color: 'green', textAlign: 'center' }}><strong>Mang mã vé đến văn phòng để đổi vé lên xe trước giờ xuất bến ít nhất 60 phút.</strong></p>
                            <Button variant="contained" onClick={() => handleDownload(index)}>Tải xuống</Button>
                        </div>
                    ))}
                </div>
            </Box>
        </Container>
    );
};

export default TicketForm;
