package com.spartanstay.spartanstay.service;
import com.spartanstay.spartanstay.model.Customer;
import com.spartanstay.spartanstay.model.Reservation;
import com.spartanstay.spartanstay.repository.CustomerRepository;
import com.spartanstay.spartanstay.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService{
    @Autowired
    private CustomerRepository customerRepo;
    @Autowired
    private ReservationRepository reservationRepo;
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

    @Override
    public boolean customerExistsByID(int id)
    {
        return customerRepo.existsById(id);
    }
    
    @Override
    public Customer findByEmail(String email){
        List<Customer> list = customerRepo.findAll();
        for(int i=0; i<list.size(); i++)
        {
            if(list.get(i).getEmail().equals(email))
                return list.get(i);
        }
        return null;
    }

    @Override
    public void deleteUser(Customer customer) {
        customerRepo.delete(customer);
    }

    @Override
    public void deleteUserById(int id) {

        List<Reservation> temp = reservationRepo.findByUserID(id);
        for (Reservation r : temp) {
            reservationRepo.deleteById(r.getId());
        }
        customerRepo.deleteById(id);

    }
}
