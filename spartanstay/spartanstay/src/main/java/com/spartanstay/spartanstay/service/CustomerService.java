package com.spartanstay.spartanstay.service;

import com.spartanstay.spartanstay.model.Customer;
import org.springframework.stereotype.Service;
import com.spartanstay.spartanstay.model.Payment;
import java.util.List;

@Service
public interface CustomerService {
    Customer saveCustomer(Customer customer);
    List<Customer> getAllCustomers();
}
