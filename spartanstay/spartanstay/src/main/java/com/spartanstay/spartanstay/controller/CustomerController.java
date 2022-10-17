package com.spartanstay.spartanstay.controller;

import com.spartanstay.spartanstay.model.Customer;
import com.spartanstay.spartanstay.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// This is where the endpoints go relevant to customers (login/logout)
@RestController
@RequestMapping("/credentials")
@CrossOrigin
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping("/add")
    public String add(@RequestBody Customer customer){
        System.out.println(customer.getId() + customer.getFirstName() + customer.getLastName()
                + customer.getPassword() + customer.getConfirmPassword());
        if(customer.getConfirmPassword().equals(customer.getPassword()))
        {
            customerService.saveCustomer(customer);
            return "New customer is added";
        }
       return "Customer not added, incorrect password";
    }

    @GetMapping("/getAll")
    public List<Customer> list(){
        return customerService.getAllCustomers();
    }
}
