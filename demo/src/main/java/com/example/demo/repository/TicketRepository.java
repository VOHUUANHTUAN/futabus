package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.TicketModel;

import java.util.List;

@Repository
public interface TicketRepository extends MongoRepository<TicketModel, Integer> {
    // Định nghĩa phương thức tìm kiếm theo số điện thoại
    List<TicketModel> findBySoDienThoai(String soDienThoai);
    List<TicketModel> findBySoDienThoaiAndMaDatVe(String soDienThoai, String maDatVe);

}
