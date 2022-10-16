package com.spartanstay.spartanstay.service;
import com.spartanstay.spartanstay.model.Customer;
import org.springframework.stereotype.Service;

@Service
public interface CustomerService {
    void deleteUser(Customer customer);
}
