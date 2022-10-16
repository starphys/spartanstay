package com.spartanstay.spartanstay.controller;
import com.spartanstay.spartanstay.model.Customer;
import com.spartanstay.spartanstay.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/credentials")
@CrossOrigin
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping("/delete")
    public String deleteUser(@RequestBody Customer customer)
    {
        customerService.deleteUser(customer);
        return customer.getFirstName() + " "+ customer.getLastName() + " was deleted";
    }
}
