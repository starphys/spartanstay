package com.spartanstay.spartanstay.repository;

import com.spartanstay.spartanstay.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>{
    //BINARY makes it so its case-sensitive
    @Query(value = "SELECT * FROM spartanstay.customer WHERE email = BINARY ?1 AND password = BINARY ?2", nativeQuery = true)
    Customer findByEmailAndPassword(String email, String password);
}
