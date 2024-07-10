package com.example.demo.controller;

import com.example.demo.model.TicketModel;
import com.example.demo.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;

    // API để lấy danh sách tất cả các Ticket
    @GetMapping
    public List<TicketModel> getAllTickets() {
        return ticketRepository.findAll();
    }

    // API để lấy một Ticket bằng ID
    @GetMapping("/{id}")
    public ResponseEntity<TicketModel> getTicketById(@PathVariable("id") Integer id) {
        Optional<TicketModel> ticket = ticketRepository.findById(id);
        if (ticket.isPresent()) {
            return new ResponseEntity<>(ticket.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // API để tạo một Ticket mới

    @PostMapping
    public ResponseEntity<TicketModel> createTicket(@RequestBody TicketModel ticket) {
        try {
            // Kiểm tra và xử lý validation nếu cần
            // Ví dụ: kiểm tra tính hợp lệ của ticket trước khi lưu

            TicketModel newTicket = ticketRepository.save(ticket);
            return new ResponseEntity<>(newTicket, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/busline/futa/booking/history-ticket")
    public ResponseEntity<List<TicketModel>> findTicketsByPhoneAndBookingCode(
            @RequestParam("soDienThoai") String soDienThoai,
            @RequestParam("maDatVe") String maDatVe) {

        try {
            List<TicketModel> tickets = ticketRepository.findBySoDienThoaiAndMaDatVe(soDienThoai, maDatVe);

            if (!tickets.isEmpty()) {
                return new ResponseEntity<>(tickets, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
