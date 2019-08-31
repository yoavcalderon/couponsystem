package Coupon.System.dao;

import java.util.ArrayList;

import Coupon.System.beans.Customer;
import Coupon.System.exceptions.CouponSystemException;

public interface CustomerDAO {
	/**
	 * Checks if customer exists by email and password parameters
	 * 
	 * @param string email
	 * @param string password
	 * @return
	 * @throws CouponSystemException
	 */

	boolean ExistsBy(String email, String password) throws CouponSystemException;

	/**
	 * adds customer
	 * 
	 * @param customer object
	 * @return
	 * @throws CouponSystemException
	 */
	int addCustomer(Customer customer) throws CouponSystemException;

	/**
	 * deletes customer
	 * 
	 * @param customer object
	 * @return
	 * @throws CouponSystemException
	 */
	boolean deleteCustomer(Customer customer) throws CouponSystemException;

	/**
	 * updates customer
	 * 
	 * @param customer
	 * @throws CouponSystemException
	 */
	void updateCustomer(Customer customer) throws CouponSystemException;

	/**
	 * returns all customers
	 * 
	 * @return an array of object customer
	 * @throws CouponSystemException
	 */
	ArrayList<Customer> getAllCustomers() throws CouponSystemException;

	/**
	 * gets customer by id
	 * 
	 * @param int id
	 * @return
	 * @throws CouponSystemException
	 */
	Customer getCustomerbyId(int id) throws CouponSystemException;

	/**
	 * 
	 * @param string email
	 * @param string password
	 * @return
	 * @throws CouponSystemException
	 */
	Customer getCustomer(String email, String password) throws CouponSystemException;

}
