package com.projectstage3.Coupon.System.Facade;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.projectstage3.Coupon.System.beans.Company;
import com.projectstage3.Coupon.System.beans.Coupon;
import com.projectstage3.Coupon.System.beans.Customer;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CompanyAlreadyExistsException;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CompanyDoesNotExistExcpetion;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CustomerAlreadyExistsException;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CustomerDoesNotExistExcpetion;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.NoCompaniesFoundException;

@Service
public class AdminFacade extends ClientFacade {
	public AdminFacade() {

	}

	private String name = "admin";
	private String password = "admin";

	/**
	 * returns true if email and password are valid, otherwise returns false
	 * 
	 * @param password
	 * @param name
	 */
	@Override
	public boolean login(String name, String password) {

		if (this.name.equals(name) && this.password.equals(password)) {

			return true;
		}
		return false;
	}

	/**
	 * adds the specified company if company does not already exist ( no company
	 * with the same email or password)
	 * 
	 * @param company
	 * @return
	 * @throws CouponSystemException
	 */
	public void addCompany(Company company) throws CouponSystemException, CompanyAlreadyExistsException {

		if (companiesDAO.isCompanyExists(company.getEmail(), company.getPassword())) {
			throw new CompanyAlreadyExistsException("addCompany failed- company already exists" + company);
		} else {
			companiesDAO.addCompany(company);
			System.out.println("company added sucssesfuly");
		}

	}

	/**
	 * updates the specified company ( by id). the id and name are not updated
	 * 
	 * @param company
	 * @throws CouponSystemException
	 */
	public void updateCompany(Company company) throws CouponSystemException {
		Company companyFromDb = companiesDAO.getOneCompany(company.getId());
		companyFromDb.setEmail(company.getEmail());
		companyFromDb.setPassword(company.getPassword());
		companiesDAO.updateCompany(companyFromDb);

	}

	/**
	 * deletes company along with their purchase history
	 * 
	 * @param companyId
	 * @throws CouponSystemException
	 * @throws CompanyDoesNotExistExcpetion
	 */
	public void deleteCompany(int companyId) throws CouponSystemException, CompanyDoesNotExistExcpetion {

		Company companyFromDb = companiesDAO.getOneCompany(companyId);
		if (companyFromDb != null) {
			// 1. get the company coupons
			List<Coupon> coupons = couponDAO.getAllCompanyCoupouns(companyId);
			// 2. delete from customerVsCoupons all purchases history
			for (Coupon coupon : coupons) {
				couponDAO.deleteCoupon(coupon.getId());
			}
			// 4. delete company
			companiesDAO.deleteCompany(companyId);
		} else {
			throw new CompanyDoesNotExistExcpetion("deleteCompany failed - company does not exist");
		}
	}

	/**
	 * gets an array of all companies in the system
	 * 
	 * @return
	 * @throws CouponSystemException
	 * @throws NoCompaniesFoundException
	 */
	public ArrayList<Company> getAllCompanies() throws CouponSystemException, NoCompaniesFoundException {
		if (companiesDAO.getAllCompanies() != null) {
			return (ArrayList<Company>) companiesDAO.getAllCompanies();

		} else {
			throw new NoCompaniesFoundException("getAllCompanies failed- no companies found");
		}

	}

	/**
	 * gets a specified company
	 * 
	 * @param companyId
	 * @return
	 * @throws CouponSystemException
	 */
	public Company getOneCompany(int companyId) throws CouponSystemException {
		return companiesDAO.getOneCompany(companyId);
	}

	public Coupon getOneCoupon(int couponId) throws CouponSystemException {
		System.out.println("coupon got, coupon id is: " + couponId);
		return couponDAO.getOneCoupon(couponId);
	}

	/**
	 * adds a customer providing his email and password do not exist
	 * 
	 * @param customer
	 * @throws CouponSystemException
	 * @throws CustomerAlreadyExistsException
	 */
	public void addCustomer(Customer customer) throws CouponSystemException, CustomerAlreadyExistsException {
		if (customerDAO.isCustomerExist(customer.getEmail(), customer.getPassword())) {
			throw new CustomerAlreadyExistsException("addCustomer failed - the customer exists" + customer);

		} else {
			customerDAO.addCustomer(customer);
			System.out.println("company added sucssesfuly");

		}
	}

	/**
	 * updates customer information and parameters
	 * 
	 * @param customer
	 * @throws CouponSystemException
	 */
	public void updateCustomer(Customer customer) throws CouponSystemException {
		customerDAO.updateCustomer(customer);
	}

	/**
	 * deletes a customer completely
	 * 
	 * @param customer
	 * @throws CouponSystemException
	 * @throws CustomerDoesNotExistExcpetion
	 */
	public void deleteCustomer(Customer customer) throws CouponSystemException, CustomerDoesNotExistExcpetion {
		// 1. get a customer from the database
		Customer customerFromDb = customerDAO.getCustomerbyEmailAndFirstName(customer.getEmail(),
				customer.getFirstName());
		// 2. get all customer coupons and delete purchase history and coupons for
		// customer
		ArrayList<Coupon> coupons = (ArrayList<Coupon>) couponDAO.getAllCoupouns();

		if (coupons.isEmpty()) {

		} else {
			for (Coupon coupon : coupons) {
				couponDAO.deleteCoupon(coupon.getId());

			}

		}

		if (customerFromDb.getId() == customer.getId()) {
			customerDAO.deleteCustomer(customerFromDb);
			System.out.println("customer has been deleted");
		} else {
			throw new CustomerDoesNotExistExcpetion(
					"deleteCustomer function failed delete customer failed, customer does not exist");
		}

	}

	public Customer getOneCustomer(Customer customer) throws CouponSystemException {
		return customerDAO.getCustomerbyEmailAndFirstName(customer.getEmail(), customer.getFirstName());

	}

	public ArrayList<Customer> getAllCustomers() throws CouponSystemException {
		return (ArrayList<Customer>) customerDAO.getAllCustomers();

	}

	public Customer getOneCustomer(int id) throws CouponSystemException {
		return customerDAO.getCustomer(id);

	}

}
