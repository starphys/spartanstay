package com.spartanstay.spartanstay.service;

import com.spartanstay.spartanstay.model.Payment;
import org.springframework.stereotype.Service;

@Service
public interface PaymentService {
    Payment saveDetails(int currentUserId, String type, String number, String exp, String code);
    Payment getDetails();
}
