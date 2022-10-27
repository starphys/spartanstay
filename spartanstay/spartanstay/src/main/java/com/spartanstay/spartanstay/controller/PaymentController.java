package com.spartanstay.spartanstay.controller;

import com.spartanstay.spartanstay.model.Payment;
import com.spartanstay.spartanstay.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payments")
@CrossOrigin
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @GetMapping("/getCardDetails")
    public List<Payment> details(@RequestParam("userId") int userId, @RequestParam("paymentType") String paymentType)
    {
        return paymentService.getDetails(userId);
    }

    @GetMapping("/getAllCards")
    public List<Payment> list()
    {
        return paymentService.getAllDetails();
    }

    @PostMapping("/addCardDetails")
    public String addDetails(@RequestBody Payment payment)
    {
        paymentService.saveDetails(payment);
        return payment.getPaymentType() + " card was added";
    }
}
