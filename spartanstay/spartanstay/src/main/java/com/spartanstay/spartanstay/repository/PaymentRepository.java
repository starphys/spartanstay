package com.spartanstay.spartanstay.repository;

import com.spartanstay.spartanstay.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer>{

    @Query(value = "SELECT * FROM spartanstay.payment WHERE user_id = ?1", nativeQuery = true)
    List<Payment> findByUserId(int currentUserid);

    @Query(value = "SELECT * FROM spartanstay.payment WHERE (user_id = ?1 AND card_number = ?2)", nativeQuery = true)
    List<Payment> findByUserIdAndCardNumber(int userId, String cardNumber);
}
