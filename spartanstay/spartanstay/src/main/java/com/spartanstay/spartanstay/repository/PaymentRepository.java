package com.spartanstay.spartanstay.repository;

import com.spartanstay.spartanstay.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PaymentRepository extends JpaRepository<Payment, Integer>{

    @Query("INSERT INTO spartanstay.payment (userId, paymentType, cardNumber, expMon, expYear, securityCode) VALUES (?,?,?,?,?,?)")
    Payment saveDetails(int currentUserId, String type, String number, String expMon, String expYear, String code);

    @Query("SELECT cardNumber, expMon, expYear, securityCode FROM spartanstay.payment WHERE userId = ? and type = ?")
    Payment findDetails(int currentUserId, String paymentType);
}
