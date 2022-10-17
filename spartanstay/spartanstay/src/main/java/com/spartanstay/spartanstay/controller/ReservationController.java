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
        if (checkReservation(reservation) == true) {
            return "Reservation already exists";
        }
        else {
            System.out.println(reservation.getSpecialReq());
            reservationService.saveReservation(reservation);
            return "Reservation saved";
        }
    }

    @GetMapping("/getAll")
    public List<Reservation> getAllReservations() {
        return reservationService.getAllReservations();
    }

    public boolean checkReservation(Reservation reservation) {
        List <Reservation> list = getAllReservations();
        Map<Integer, Reservation> map =
                list.stream().collect(Collectors.toMap(Reservation::getId, Function.identity()));
        return map.containsKey(reservation.getId());
    }

}
