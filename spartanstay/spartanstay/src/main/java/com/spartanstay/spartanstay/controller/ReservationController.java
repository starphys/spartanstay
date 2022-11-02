package com.spartanstay.spartanstay.controller;

import com.spartanstay.spartanstay.model.Reservation;
import com.spartanstay.spartanstay.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/reservation")
@CrossOrigin
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @PostMapping("/add")
    public String add(@RequestBody Reservation reservation){
        System.out.println(reservation.getSpecialReq());
        if( reservationService.saveReservation(reservation) != null ){
            return "{\"status\":\"success\"}";
        }
        return "{\"status\":\"failed\"}";
    }

    @GetMapping("/getAll")
    public List<Reservation> getAllReservations() {
        return reservationService.getAllReservations();
    }

}
