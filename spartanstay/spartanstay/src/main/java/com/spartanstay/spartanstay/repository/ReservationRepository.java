package com.spartanstay.spartanstay.repository;

import com.spartanstay.spartanstay.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer > {
    //BINARY makes it so its case-sensitive
    @Query(value = "SELECT * FROM spartanstay.reservation WHERE user_id = ?1 AND hotel_id != ?4 AND ( check_in_date BETWEEN ?2 and ?3 OR check_out_date BETWEEN ?2 and ?3 OR (check_in_date <= ?2 AND check_out_date >= ?3))", nativeQuery = true)
    List<Reservation> findByUserIdAndCheckInAndCheckOutAndHotelId(int userId, String checkIn, String checkOut, int hotelId);

    @Query(value = "SELECT * FROM spartanstay.reservation WHERE user_id = ?1", nativeQuery = true)
    List<Reservation> findByUserID(int id);
}
