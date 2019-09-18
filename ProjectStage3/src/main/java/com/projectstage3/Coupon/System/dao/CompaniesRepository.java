package com.projectstage3.Coupon.System.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectstage3.Coupon.System.beans.Company;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;

public interface CompaniesRepository extends JpaRepository<Company, Integer> {
	/**
	 * returns company id by email and password
	 * 
	 * @param string email
	 * @param string password
	 * @return
	 * @throws CouponSystemException
	 */
	public Company findByEmailAndPassword(String email, String password) throws CouponSystemException;

	/**
	 * 
	 * @param email
	 * @param password
	 * @return
	 * @throws CouponSystemException
	 */
	public Company findByNameAndPassword(String name, String password) throws CouponSystemException;

	/**
	 * checks if company exists in system by email and password
	 * 
	 * @param email
	 * @param password
	 * @return
	 * @throws CouponSystemException
	 */

	public boolean existsByEmailAndPassword(String email, String password) throws CouponSystemException;

	/**
	 * returns the company of the specified id
	 * 
	 * @param CompanyID the id of the company
	 * @return the specified company
	 * @throws CouponSystemException if the company does not exist
	 */
	public Company getById(int id) throws CouponSystemException;

	/**
	 * returns 1 company by specified email and password
	 * 
	 * @param email
	 * @param password
	 * @return
	 * @throws CouponSystemException
	 */
	public Company getByEmailAndPassword(String email, String password) throws CouponSystemException;

}
