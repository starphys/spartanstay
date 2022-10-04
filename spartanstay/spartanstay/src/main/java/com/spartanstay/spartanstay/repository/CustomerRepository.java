package com.spartanstay.spartanstay.repository;

import com.spartanstay.spartanstay.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{
}
