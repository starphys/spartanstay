package com.spartanstay.spartanstay.service;
import com.spartanstay.spartanstay.model.Customer;
import com.spartanstay.spartanstay.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Override
    public Customer saveCustomer(Customer customer) {
        return customerRepo.save(customer);
    }

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepo.findAll();
    }

    @Override
    public Customer findCustomer(String email, String password)
    {
        return customerRepo.findByEmailAndPassword(email, password);
    }

    public Customer findByEmail(String email){
        List<Customer> list = customerRepo.findAll();
        for(int i=0; i<list.size(); i++)
        {
            if(list.get(i).getEmail().equals(email))
                return list.get(i);
        }
        return null;
    }

    @Autowired
    private CustomerRepository customerRepo;
}
