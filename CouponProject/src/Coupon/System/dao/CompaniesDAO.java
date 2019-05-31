package Coupon.System.dao;

import java.util.ArrayList;

import Coupon.System.beans.Company;
import Coupon.System.exceptions.CouponSystemException;

public interface CompaniesDAO {
	/**
	 * returns company id by email and password
	 * 
	 * @param string email
	 * @param string password
	 * @return
	 * @throws CouponSystemException
	 */
	public int getCompanyId(String email, String password) throws CouponSystemException;

	public boolean isCompanyExists(String email, String password) throws CouponSystemException;

	/**
	 * adds the specified company to the system and returns the company auto
	 * generated id
	 * 
	 * @param company the company to add
	 * @return the auto generated id of the company
	 */

	public int addCompany(Company company) throws CouponSystemException;

	/**
	 * updates the specified company. if company isn't found (by ID) throws coupon
	 * system exception
	 * 
	 * @param object company
	 * @throws CouponSystemException
	 */
	public void updateCompany(Company company) throws CouponSystemException;

	/**
	 * deletes the specified company.
	 * 
	 * @param int companyID the id of the company to remove
	 * @return true if the company was deleted otherwise returns false
	 * @throws CouponSystemException
	 */

	public boolean deleteCompany(int companyID) throws CouponSystemException;

	public ArrayList<Company> getAllCompanies() throws CouponSystemException;

	/**
	 * returns the company of the specified id
	 * 
	 * @param CompanyID the id of the company
	 * @return the specified company
	 * @throws CouponSystemException if the company does not exist
	 */
	public Company getOneCompany(int CompanyID) throws CouponSystemException;

	/**
	 * returns 1 company by specified email and password
	 * 
	 * @param email
	 * @param password
	 * @return
	 * @throws CouponSystemException
	 */
	Company getOneCompany(String email, String password) throws CouponSystemException;

}
