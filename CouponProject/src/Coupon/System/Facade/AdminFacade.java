package Coupon.System.Facade;

import java.util.ArrayList;
import java.util.List;

import Coupon.System.beans.Company;
import Coupon.System.beans.Coupon;
import Coupon.System.beans.Customer;
import Coupon.System.dao.CompaniesDAO;
import Coupon.System.dao.CouponDAO;
import Coupon.System.dao.CustomerDAO;
import Coupon.System.exceptions.CouponSystemException;
//********************************************************************

public class AdminFacade extends ClientFacade {
	private String email = "admin@admin.com";
	private String password = "admin";

	public AdminFacade(CompaniesDAO companiesDAO, CustomerDAO customerDAO, CouponDAO couponDAO) {
		super(companiesDAO, customerDAO, couponDAO);
		// TODO Auto-generated constructor stub
	}

	// ********************************************************************
	/**
	 * returns true if email and password are valid, otherwise returns false
	 * 
	 * @param password
	 * @param email
	 */
	@Override
	public boolean login(String email, String password) {

		return this.email.equals(email) && this.password.equals(password);
	}

	// ********************************************************************
	/**
	 * adds the specified company if company does not already exist ( no company
	 * with the same email or password)
	 * 
	 * @param company
	 * @return
	 * @throws CouponSystemException
	 */
	public int addCompany(Company company) throws CouponSystemException {
		if (companiesDAO.isCompanyExists(company.getEmail(), company.getPassword())) {
			throw new CouponSystemException("addCompany failed- company already exists" + company);
		} else {
			return companiesDAO.addCompany(company);
		}

	}

	// ********************************************************************
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
	// ********************************************************************

	public void deleteCompany(int companyId) throws CouponSystemException {

		Company companyFromDb = companiesDAO.getOneCompany(companyId);
		if (companyFromDb != null) {
			// 1. get the company coupons
			List<Coupon> coupons = couponDAO.getAllCoupouns(companyId);
			// 2. delete from customerVsCoupons all purchases history
			for (Coupon coupon : coupons) {
				couponDAO.deleteCouponPurchase(coupon.getId());
				// 3. delete all company coupons
				couponDAO.deleteCoupon(coupon.getId());
			}
			// 4. delete company
			companiesDAO.deleteCompany(companyId);
		} else {
			throw new CouponSystemException("deleteCompany failed company does not exist -");
		}
	}

	// ********************************************************************
	public ArrayList<Company> returnAllCompanies() throws CouponSystemException {
		return companiesDAO.getAllCompanies();

	}

	// ********************************************************************
	public Company getOneCompany(int companyId) throws CouponSystemException {
		return companiesDAO.getOneCompany(companyId);
	}

	// *******************************************************************************************************************
	public void addCustomer(Customer customer) throws CouponSystemException {
		ArrayList<Customer> customerArray = customerDAO.getAllCustomers();
		for (Customer customer1 : customerArray) {
			if (customer1.getEmail().equals(customer.getEmail())) {
				System.out.println("addCustomer failed, a customer with this email exists already ");

				return;
			}
		}
		addCustomer(customer);

	}

	// ********************************************************************
	public void updateCustomer(Customer customer) throws CouponSystemException {
		customerDAO.updateCustomer(customer);
	}

	// **************************************************************************************************************
	public void deleteCustomer(Customer customer) throws CouponSystemException {
//1. get a customer from the database
		Customer customerFromDb = customerDAO.getCustomerbyId(customer.getId());
		// 2. get all customer coupons and delete purchase history and coupons for
		// customer
		ArrayList<Coupon> coupons = couponDAO.getAllCoupouns();
		for (Coupon coupon : coupons) {
			couponDAO.deleteCouponPurchase(customer.getId(), coupon.getId());
			couponDAO.deleteCoupon(customer.getId());
			if (customerFromDb.equals(customer)) {
				customerDAO.deleteCustomer(customerFromDb);
			} else {
				throw new CouponSystemException(
						"deleteCustomer function failed delete customer failed, customer does not exist");
			}

		}

	}
	// **************************************************************************************************************

	public Customer getOneCustomer(Customer customer) throws CouponSystemException {
		return customerDAO.getCustomerbyId(customer.getId());

	}
	// **************************************************************************************************************

	public ArrayList<Customer> getAllCustomers(Customer customer) throws CouponSystemException {
		return customerDAO.getAllCustomers();

	}
	// **************************************************************************************************************

}
