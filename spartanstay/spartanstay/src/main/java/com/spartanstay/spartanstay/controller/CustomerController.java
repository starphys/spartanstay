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
    public Customer currentUser = new Customer();

    @Autowired
    private CustomerService customerService;

    @PostMapping("/add")
    public String add(@RequestBody Customer customer){
        System.out.println(customer.getId() + customer.getFirstName() + customer.getLastName()
                + customer.getPassword() + customer.getConfirmPassword());
        if(customer.getConfirmPassword().equals(customer.getPassword()))
        {
            customerService.saveCustomer(customer);
            currentUser = customerService.findCustomer(customer.getEmail(), customer.getPassword());
            System.out.println(currentUser.getId());
            return "{\"id\":\""+currentUser.getId()+"\"" +
                    ",\"email\":\""+currentUser.getEmail()+
                    "\"" +",\"firstName\":\""+currentUser.getFirstName()+
                    "\""+",\"lastName\":\""+currentUser.getLastName()+"\"}";
        }
       return "Customer not added, incorrect password";
    }

    @GetMapping("/getAll")
    public List<Customer> list(){
        return customerService.getAllCustomers();
    }

    @GetMapping("/login")
    public String login(@RequestParam("email") String email, @RequestParam("password") String password)
    {
        currentUser = customerService.findCustomer(email, password);
        //if the user was not found
        if(currentUser == null)
        {
            return "{}";
        }
        //json w email, first name, last name
        return "{\"id\":\""+currentUser.getId()+"\"" +",\"email\":\""+currentUser.getEmail()+"\"" +",\"firstName\":\""+currentUser.getFirstName()+"\""+",\"lastName\":\""+currentUser.getLastName()+"\"}";
    }

    @PostMapping("/logout")
    public String logout(@RequestBody Customer customer)
    {
        currentUser = null;
        return customer.getFirstName() + " " + customer.getLastName() + " was logged out";
    }
}

