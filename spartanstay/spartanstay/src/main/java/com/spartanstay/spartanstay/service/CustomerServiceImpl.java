package com.spartanstay.spartanstay.service;
import com.spartanstay.spartanstay.model.Customer;
import com.spartanstay.spartanstay.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class CustomerServiceImpl implements CustomerService{
    @Autowired
    private CustomerRepository customerRepo;

    @Override
    public void deleteUser(Customer customer) {
        customerRepo.delete(customer);
    }
}
