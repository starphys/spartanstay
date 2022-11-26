package com.spartanstay.spartanstay.controller;
import com.spartanstay.spartanstay.exception.UserNotFoundException;
import com.spartanstay.spartanstay.model.Customer;
import com.spartanstay.spartanstay.repository.CustomerRepository;
import com.spartanstay.spartanstay.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.nio.file.attribute.UserPrincipalNotFoundException;

@RestController
@RequestMapping("/credentials")
@CrossOrigin
public class CustomerController {
    public Customer currentUser = new Customer();

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CustomerService customerService;

    @PostMapping("/add")
    public String add(@RequestBody Customer customer){
        System.out.println(customer.getId() + customer.getFirstName() + customer.getLastName()
                + customer.getPassword() + customer.getConfirmPassword());

        if(customerService.findByEmail(customer.getEmail()) != null)
        {

            System.out.println("Woops! User already exists.");
            return "{\"status\":\"failure\", \"message\":\"User already exists\"}";
        }

        if(customer.getConfirmPassword().equals(customer.getPassword()))
        {
            customerService.saveCustomer(customer);
            currentUser = customerService.findCustomer(customer.getEmail(), customer.getPassword());
            System.out.println(currentUser.getId());
            return "{\"id\":\""+currentUser.getId()+"\"" +
                    ",\"email\":\""+currentUser.getEmail()+
                    "\"" +",\"firstName\":\""+currentUser.getFirstName()+
                    "\""+",\"lastName\":\""+currentUser.getLastName()+"\"" +
                    ", \"rewardPoints\":\"" + currentUser.getRewardPoints() +
                    "\",\"status\":\"success\"}";
        }

        System.out.println("Customer not added, incorrect password");
        return "{\"status\":\"failure\"}";
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
        return "{\"id\":\""+currentUser.getId()+"\"" +",\"email\":\""+currentUser.getEmail()+"\"" +",\"firstName\":\""+currentUser.getFirstName()+"\""+",\"lastName\":\""
                +currentUser.getLastName()+"\",\"rewardPoints\":\""+ currentUser.getRewardPoints() +"\"}";
    }

    @PostMapping("/logout")
    public String logout(@RequestBody Customer customer)
    {
        currentUser = null;
        return customer.getFirstName() + " " + customer.getLastName() + " was logged out";
    }

    @GetMapping("/getrewards")
    public String getRewards(@RequestParam() int id, @RequestParam("email") String email, @RequestParam("firstName") String firstName, @RequestParam() String lastName)
    {

        return "{\"id\":\""+id+"\"" +",\"email\":\""+email+"\"" +",\"firstName\":\""+firstName+"\""+",\"lastName\":\""
                +lastName+"\",\"rewardPoints\":\""+ customerService.getRewardPoints(id) +"\"}";
    }

    @GetMapping("/setrewards")
    public String setRewards(@RequestParam("id") int id, @RequestParam("") int rewardPoints)
    {
        System.out.println("Adding " + rewardPoints + " reward points to user "+id+"'s account.");
        return customerService.addRewardPoints(id, rewardPoints);
    }

    // Passing in the ID of the user you want to delete
    // Ex. deleting user #12) localhost:8080/credentials/delete/12
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
    String deleteUser(@PathVariable int id)
    {
        if (!customerService.customerExistsByID(id))
        {
            throw new UserNotFoundException(id);
        }
        customerService.deleteUserById(id);
        return "User with ID " + id + " has been deleted successfully.";

    }

}

