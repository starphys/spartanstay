package com.spartanstay.spartanstay.repository;

import com.spartanstay.spartanstay.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer > {
}
