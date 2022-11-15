package com.spartanstay.spartanstay.controller;

import com.spartanstay.spartanstay.model.Customer;
import com.spartanstay.spartanstay.repository.CustomerRepository;
import com.spartanstay.spartanstay.service.CustomerService;
import com.spartanstay.spartanstay.service.CustomerServiceImpl;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.event.annotation.BeforeTestClass;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


class CustomerControllerTest {
    @InjectMocks
    private CustomerController customerController;

    @Mock
    private CustomerRepository customerRepository;

    @Mock
    private CustomerService customerService;

    @BeforeEach
    public void init()
    {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testAdd()
    {
        Customer c = new Customer();
        c.setEmail("liz@gmail.com");
        c.setFirstName("Liz");
        c.setLastName("Hillman");
        c.setPassword("Liz1");
        String result = customerController.add(c);
        assertEquals("New customer is added", result);
    }

    @Test
    void testGetList()
    {
        Customer c1 = new Customer();
        c1.setId(0);
        c1.setFirstName("liz");
        c1.setLastName("liz h");
        Customer c2 = new Customer();
        c2.setId(1);
        c2.setFirstName("not liz");
        c2.setLastName("not liz h");
        customerController.add(c1);
        customerController.add(c2);
        List<Customer> customers = new ArrayList<>();
        Mockito.when(customerRepository.findAll()).thenReturn(customers);
        customers = customerController.list();
        assertNotNull(customers);
        //this no work
        assertEquals(2, customers.size());
    }
//
//    @Test
//    void testAdd()
//    {
//        Customer c = new Customer();
//        c.setEmail("liz@gmail.com");
//        c.setFirstName("Liz");
//        c.setLastName("Hillman");
//        c.setPassword("Liz1");
//        String result = customerController.add(c);
//        assertEquals("New customer is added", result);
//    }
//
//    @Test
//    void testGetList()
//    {
//        Customer c1 = new Customer();
//        c1.setId(0);
//        c1.setFirstName("liz");
//        c1.setLastName("liz h");
//        Customer c2 = new Customer();
//        c2.setId(1);
//        c2.setFirstName("not liz");
//        c2.setLastName("not liz h");
//        customerController.add(c1);
//        customerController.add(c2);
//        Mockito.when(customerRepository.findAll()).thenReturn(customers);
//        customers = customerController.list();
//        assertNotNull(customers);
//        assertEquals(2, customers.size());
//    }
}