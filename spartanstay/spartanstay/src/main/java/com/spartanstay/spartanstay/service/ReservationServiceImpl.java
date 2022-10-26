package com.spartanstay.spartanstay.service;

import com.spartanstay.spartanstay.model.Reservation;
import com.spartanstay.spartanstay.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService{

    @Autowired
    private ReservationRepository reservationRepository;

    @Override
    public Reservation saveReservation(Reservation reservation) {
        List<Reservation> response = reservationRepository.findByUserIdAndCheckInAndCheckOutAndHotelId(reservation.getUserId(),
                reservation.getCheckInDate(), reservation.getCheckOutDate(), reservation.getHotelId());
        if(response.isEmpty()) {
            System.out.println("SQL response was null");
            System.out.println(reservation);
            return reservationRepository.save(reservation);
        }
        else {
            System.out.println(reservation);
            System.out.println("Response was not null");
            return null;
        }
    }

    @Override
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }
}
