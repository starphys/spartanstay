package com.spartanstay.spartanstay.service;

import com.spartanstay.spartanstay.model.Payment;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface PaymentService {
    Payment saveDetails(Payment payment);
    Payment getDetails(int currentUserId, String paymentType);
    List<Payment> getAllDetails();
}
