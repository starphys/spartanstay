package com.spartanstay.spartanstay.service;

import com.spartanstay.spartanstay.model.Reservation;

import java.util.List;

public interface ReservationService {
    public Reservation saveReservation(Reservation reservation);
    public List<Reservation> getAllReservations();

    List<Reservation> getMyReservations(int id);
}
