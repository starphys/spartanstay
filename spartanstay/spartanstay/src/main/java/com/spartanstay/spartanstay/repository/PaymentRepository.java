package com.spartanstay.spartanstay.repository;

import com.spartanstay.spartanstay.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer>{

    @Query(value = "SELECT * FROM spartanstay.payment WHERE user_id = ?1 and payment_type = ?2", nativeQuery = true)
    Payment findByIdAndPaymentType( int currentUserid, String paymentType);
}
