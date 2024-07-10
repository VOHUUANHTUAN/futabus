package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Document(collection = "tickets")
public class TicketModel {

    @Id
    private String id;

    private int maGhe;

    private String maDatVe;

    private String tuyenXe;

    private String benXe;

    private Date thoiGianXuatBen;

    private String soGhe;

    private String diemLenXe;

    private Date thoiGianLenXe;

    private int giaVe;

    private String bienSoXe;

    private double maTraCuuHoaDon;

    private String soDienThoai;

    private String hoVaTen;


    private String email;

    private int tongGiaVe;

    private String trangThai;

    private String pTTT;

    private String rePurchase;

    public String getRePurchase() {
        return rePurchase;
    }

    public void setRePurchase(String rePurchase) {
        this.rePurchase = rePurchase;
    }

    // Constructor không tham số
    public TicketModel() {
    }

    // Constructor với tất cả các tham số
    public TicketModel(String id, int maGhe, String maDatVe, String tuyenXe, String benXe, Date thoiGianXuatBen, String soGhe, String diemLenXe, Date thoiGianLenXe, int giaVe, String bienSoXe, double maTraCuuHoaDon, String soDienThoai, String hoVaTen, String email, int tongGiaVe, String trangThai, String pTTT, String rePurchase) {
        super();
        this.id = id;
        this.maGhe = maGhe;
        this.maDatVe = maDatVe;
        this.tuyenXe = tuyenXe;
        this.benXe = benXe;
        this.thoiGianXuatBen = thoiGianXuatBen;
        this.soGhe = soGhe;
        this.diemLenXe = diemLenXe;
        this.thoiGianLenXe = thoiGianLenXe;
        this.giaVe = giaVe;
        this.bienSoXe = bienSoXe;
        this.maTraCuuHoaDon = maTraCuuHoaDon;
        this.soDienThoai = soDienThoai;
        this.hoVaTen = hoVaTen;
        this.email = email;
        this.tongGiaVe = tongGiaVe;
        this.trangThai = trangThai;
        this.pTTT = pTTT;
        this.rePurchase = rePurchase;
    }


    // Getter và Setter
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    public int getMaGhe() {
        return maGhe;
    }

    public void setMaGhe(int maGhe) {
        this.maGhe = maGhe;
    }

    public String getBenXe() {
        return benXe;
    }

    public void setBenXe(String benXe) {
        this.benXe = benXe;
    }
    public String getMaDatVe() {
        return maDatVe;
    }

    public void setMaDatVe(String maDatVe) {
        this.maDatVe = maDatVe;
    }

    public String getTuyenXe() {
        return tuyenXe;
    }

    public void setTuyenXe(String tuyenXe) {
        this.tuyenXe = tuyenXe;
    }

    public Date getThoiGianXuatBen() {
        return thoiGianXuatBen;
    }

    public void setThoiGianXuatBen(Date thoiGianXuatBen) {
        this.thoiGianXuatBen = thoiGianXuatBen;
    }

    public String getSoGhe() {
        return soGhe;
    }

    public void setSoGhe(String soGhe) {
        this.soGhe = soGhe;
    }

    public String getDiemLenXe() {
        return diemLenXe;
    }

    public void setDiemLenXe(String diemLenXe) {
        this.diemLenXe = diemLenXe;
    }

    public Date getThoiGianLenXe() {
        return thoiGianLenXe;
    }

    public void setThoiGianLenXe(Date thoiGianLenXe) {
        this.thoiGianLenXe = thoiGianLenXe;
    }

    public int getGiaVe() {
        return giaVe;
    }

    public void setGiaVe(int giaVe) {
        this.giaVe = giaVe;
    }

    public String getBienSoXe() {
        return bienSoXe;
    }

    public void setBienSoXe(String bienSoXe) {
        this.bienSoXe = bienSoXe;
    }

    public double getMaTraCuuHoaDon() {
        return maTraCuuHoaDon;
    }

    public void setMaTraCuuHoaDon(double maTraCuuHoaDon) {
        this.maTraCuuHoaDon = maTraCuuHoaDon;
    }

    public String getSoDienThoai() {
        return soDienThoai;
    }

    public void setSoDienThoai(String soDienThoai) {
        this.soDienThoai = soDienThoai;
    }

    public String getHoVaTen() {
        return hoVaTen;
    }

    public void setHoVaTen(String hoVaTen) {
        this.hoVaTen = hoVaTen;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getTongGiaVe() {
        return tongGiaVe;
    }

    public void setTongGiaVe(int tongGiaVe) {
        this.tongGiaVe = tongGiaVe;
    }

    public String getTrangThai() {
        return trangThai;
    }

    public void setTrangThai(String trangThai) {
        this.trangThai = trangThai;
    }
    public String getpTTT() {
        return pTTT;
    }

    public void setpTTT(String pTTT) {
        this.pTTT = pTTT;
    }
}
