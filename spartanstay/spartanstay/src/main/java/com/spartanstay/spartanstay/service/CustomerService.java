package com.spartanstay.spartanstay.service;

import com.spartanstay.spartanstay.model.Customer;
import org.springframework.stereotype.Service;
import com.spartanstay.spartanstay.model.Payment;
import java.util.List;

@Service
public interface CustomerService {
    public Customer saveCustomer(Customer customer);
    public List<Customer> getAllCustomers();

    Payment saveDetails(Payment payment);

    List<Payment> getAllDetails();

    Payment getDetails(String paymentType);

    Payment getDetails(int currentUserId, String paymentType);
}
