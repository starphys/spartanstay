package com.spartanstay.spartanstay.controller;

import com.spartanstay.spartanstay.model.Reservation;
import com.spartanstay.spartanstay.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservation")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @PostMapping("/add")
    public String add(@RequestBody Reservation reservation){
        reservationService.saveReservation(reservation);
        return "Reservation saved";
    }

    @GetMapping("/getAll")
    public List<Reservation> getAllReservations() {
        return reservationService.getAllReservations();
    }
}
