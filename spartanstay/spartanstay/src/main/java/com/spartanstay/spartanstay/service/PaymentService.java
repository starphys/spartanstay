package com.spartanstay.spartanstay.service;

import com.spartanstay.spartanstay.model.Payment;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface PaymentService {
    Payment saveDetails(Payment payment);
    List<Payment> getDetails(int currentUserId);
    List<Payment> getAllDetails();
}
