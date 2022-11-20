package com.spartanstay.spartanstay.service;

import com.spartanstay.spartanstay.model.Reservation;

import java.util.List;

public interface ReservationService {
    Reservation saveReservation(Reservation reservation);
    Reservation updateReservation(Reservation reservation);
    List<Reservation> getAllReservations();
    List<Reservation> getMyReservations(int id);
    void cancelReservation(Reservation reservation);
}
