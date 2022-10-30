package com.spartanstay.spartanstay.controller;

import com.spartanstay.spartanstay.model.Customer;
import com.spartanstay.spartanstay.model.Payment;
import com.spartanstay.spartanstay.repository.CustomerRepository;
import com.spartanstay.spartanstay.repository.PaymentRepository;
import com.spartanstay.spartanstay.service.CustomerService;
import com.spartanstay.spartanstay.service.PaymentService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.*;

class PaymentControllerTest {
    @InjectMocks
    private PaymentController paymentController;

    @Mock
    private PaymentRepository paymentRepository;

    @Mock
    private PaymentService paymentService;

    @BeforeEach
    public void init()
    {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void details() {
        /*
        Payment p1 = new Payment();
        p1.setSecurityCode("123");
        p1.setExpYear("23");
        p1.setExpMonth("01");
        p1.setCardNumber("1234 5678 9102 3456");
        p1.setId(0);
        p1.setUserId(1);
        p1.setPaymentType("discover");
        paymentController.addDetails(p1);
        CustomerController.currentUser = new Customer();
        CustomerController.currentUser.setId(0);
        Payment payment = paymentController.details("discover");
        assertEquals("1234 5678 9012 3456", payment.getCardNumber());
         */
    }

    @Test
    void list() {
    }

    @Test
    void addDetails() {
        Payment p1 = new Payment();
        p1.setSecurityCode("123");
        p1.setExpYear("23");
        p1.setExpMonth("01");
        p1.setCardNumber("1234 5678 9102 3456");
        p1.setId(0);
        p1.setUserId(1);
        p1.setPaymentType("discover");
        String result = paymentController.addDetails(p1);
        assertEquals("discover card was added", result);
    }
}