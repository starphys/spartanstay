package com.spartanstay.spartanstay.service;
import com.spartanstay.spartanstay.model.Customer;
import org.springframework.stereotype.Service;
import com.spartanstay.spartanstay.model.Payment;

import java.util.List;

@Service
public interface CustomerService {
    Customer saveCustomer(Customer customer);
    List<Customer> getAllCustomers();
    Customer findCustomer(String email, String password);
    void deleteUser(Customer customer);
    boolean customerExistsByID(int id);
    void deleteUserById(int id);
    Customer findByEmail(String email);
    void addRewardPoint(String totalPrice);
    String spendRewardPoint(String totalPrice);
}