package com.spartanstay.spartanstay.controller;
import com.spartanstay.spartanstay.exception.UserNotFoundException;
import com.spartanstay.spartanstay.model.Customer;
import com.spartanstay.spartanstay.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;

@RestController
@RequestMapping("/credentials")
@CrossOrigin
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository;

    // Passing in the ID of the user you want to delete
    // Ex. deleting user #12) localhost:8080/credentials/delete/12
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
    String deleteUser(@PathVariable int id)
    {
        if (!customerRepository.existsById(id))
        {
            throw new UserNotFoundException(id);
        }
        customerRepository.deleteById(id);
        return "User with ID " + id + " has been deleted successfully.";

    }

}
