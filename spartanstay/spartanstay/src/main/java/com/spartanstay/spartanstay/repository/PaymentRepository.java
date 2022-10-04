package com.spartanstay.spartanstay.repository;

import com.spartanstay.spartanstay.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PaymentRepository extends JpaRepository<Payment, Integer>{

    @Query("INSERT INTO spartanstay.payment (userId, paymentType, cardNumber, expDate, securityCode) VALUES (?,?,?,?,?)")
    Payment saveDetails(int currentUserId, String type, String number, String exp, String code);

    @Query("SELECT paymentType, cardNumber, expDate, securityCode FROM spartanstay.payment WHERE userId = ?")
    Payment findDetails(int currentUserId);
}
