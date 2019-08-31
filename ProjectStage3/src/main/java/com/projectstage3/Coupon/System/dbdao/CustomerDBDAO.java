package com.projectstage3.Coupon.System.dbdao;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.projectstage3.Coupon.System.beans.Customer;
import com.projectstage3.Coupon.System.dao.CustomerRepository;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;

@Component
public class CustomerDBDAO {
	@Autowired
	private CustomerRepository repoCus;

//a database related function checks customer existance validation by email and password
	public boolean isCustomerExist(String email, String password) throws CouponSystemException {

		return repoCus.existsByEmailAndPassword(email, password);
	}

//a database related function that adds a customer
	public Customer addCustomer(Customer customer) throws CouponSystemException {
		return repoCus.save(customer);
	}

//a database related function that deletes a customer after customer validation
	public boolean deleteCustomer(Customer cust) throws CouponSystemException {
		if (repoCus.existsByEmailAndPassword(cust.getEmail(), cust.getPassword())) {
			repoCus.deleteById(cust.getId());

		} else {
			throw new CouponSystemException("deleteCustomer failed customer not found ");
		}
		return false;
	}

// a database related function  that udates customer after existance validation
	public void updateCustomer(Customer cust) {
		if (repoCus.existsById(cust.getId())) {
			repoCus.save(cust);

		}
	}

// a database related function returns all customers
	public ArrayList<Customer> getAllCustomers() {
		return (ArrayList<Customer>) repoCus.findAll();
	}

//a database related function returns customer by email and name
	public Customer getCustomerbyMailAndName(String email, String firstName) throws CouponSystemException {
		return repoCus.getCustomerByEmailAndFirstName(email, firstName);
	}

//a database related function designed to return customer entity after checking id and existance validation
	public Customer getCustomer(int id) throws CouponSystemException {
		Optional<Customer> customer = repoCus.findById(id);
		if (customer.isPresent()) {
			return customer.get();

		}
		throw new CouponSystemException("getCustomer failed customer was not found");
	}

//a database related function that returns customer entity by email and password
	public Customer getCustomerbyMailAndPassword(String email, String password) throws CouponSystemException {
		return repoCus.getCustomerByEmailAndPassword(email, password);
	}

//a database related function that returns customer entity by name and password
	public Customer getCustomerbyNameAndPassword(String name, String password) throws CouponSystemException {
		return repoCus.getCustomerByEmailAndPassword(name, password);
	}

//a database related function that extracts a customer id by use of email and password
	public int idExtractor(String email, String password) throws CouponSystemException {
		return repoCus.getCustomerByEmailAndPassword(email, password).getId();
	}
}
//--------outdated database functions kept for safety-----------
//an *outdated* database related function that returns id of specified customer by email and name
//	public int getCustomerId(String email, String FirstName) throws CouponSystemException {
//		return repoCus.getCustomerByEmailAndFirstName(email, FirstName).getId();
//
//	}
//an *outdated* database related function that returns customer by its id
//	public Customer getCustomerbyId(int customerId) throws CouponSystemException {
//		return (Customer) repoCus.getCustomerById(customerId);
//	}
