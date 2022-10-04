package com.spartanstay.spartanstay.repository;


import com.spartanstay.spartanstay.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{
    @Query("SELECT * FROM spartanstay.customer WHERE email = ? AND password = ?")
    Customer findCustomer(String e, String p);
}
