package com.spartanstay.spartanstay.service;

import com.spartanstay.spartanstay.model.Payment;
import com.spartanstay.spartanstay.controller.CustomerController;
import com.spartanstay.spartanstay.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentServiceImpl {

    @Autowired
    private PaymentRepository paymentRepo;

    Payment saveDetails(Payment payment)
    {
        String encryptNumber = encrypt(payment.getCardNumber());
        String encryptExp = encrypt(payment.getExpDate());
        String encryptSecCode =  encrypt(payment.getSecurityCode());
        return paymentRepo.saveDetails(CustomerController.currentUser.getId(), payment.getPaymentType(), encryptNumber, encryptExp, encryptSecCode);
    }

    Payment getDetails()
    {
        Payment data = paymentRepo.findDetails(CustomerController.currentUser.getId());
        data.setCardNumber(decrypt(data.getCardNumber()));
        data.setExpDate(decrypt(data.getExpDate()));
        data.setSecurityCode(decrypt(data.getSecurityCode()));
        return data;
    }

    //not done
    String encrypt(String val)
    {
        String encrypted = "";
        return encrypted;
    }

    //not done
    String decrypt(String val)
    {
        String decrypted = "";
        return decrypted;
    }
}
