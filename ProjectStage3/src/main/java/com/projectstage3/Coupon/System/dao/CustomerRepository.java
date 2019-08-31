package com.projectstage3.Coupon.System.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectstage3.Coupon.System.beans.Customer;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	/**
	 * Checks if customer exists by email and password parameters
	 * 
	 * @param string email
	 * @param string password
	 * @return
	 * @throws CouponSystemException
	 */

	public Customer findByFirstNameAndPassword(String firstName, String password) throws CouponSystemException;

	/**
	 * Checks if customer exists by name and password parameters
	 * 
	 * @param email
	 * @param password
	 * @return
	 * @throws CouponSystemException
	 */
	boolean existsByEmailAndPassword(String email, String password) throws CouponSystemException;

	/**
	 * gets customer by id
	 * 
	 * @param int id
	 * @return
	 * @throws CouponSystemException
	 */
	public Customer getCustomerById(int id) throws CouponSystemException;

	/**
	 * returns customer by email and first name
	 * 
	 * @param string email
	 * @param string password
	 * @return
	 * @throws CouponSystemException
	 */
	Customer getCustomerByEmailAndFirstName(String email, String firstName) throws CouponSystemException;

	/**
	 * returns customer by email and password
	 * 
	 * @param string email
	 * @param string password
	 * @return
	 * @throws CouponSystemException
	 */
	Customer getCustomerByEmailAndPassword(String email, String password);

}
