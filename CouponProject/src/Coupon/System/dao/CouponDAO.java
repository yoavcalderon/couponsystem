package Coupon.System.dao;

import java.util.ArrayList;

import Coupon.System.beans.Coupon;
import Coupon.System.exceptions.CouponSystemException;

public interface CouponDAO {

	int addCoupon(Coupon coupon) throws CouponSystemException;

	void updateCoupon(Coupon coupon) throws CouponSystemException;

	boolean deleteCoupon(int couponID) throws CouponSystemException;

	/**
	 * get all coupons in the system
	 * 
	 * @return array of coupon object
	 * @throws CouponSystemException
	 */
	ArrayList<Coupon> getAllCoupouns() throws CouponSystemException;

	/**
	 * get all coupons of a certain company
	 * 
	 * @param companyID
	 * @return array of coupon object
	 * @throws CouponSystemException
	 */
	ArrayList<Coupon> getAllCompanyCoupouns(int companyID) throws CouponSystemException;

	/**
	 * get all coupons of a certain customer
	 * 
	 * @param customerId
	 * @return array of coupon object
	 * @throws CouponSystemException
	 */
	ArrayList<Coupon> getAllCustomerCoupouns(int customerId) throws CouponSystemException;

	/**
	 * get specified coupon by coupon id
	 * 
	 * @param coupounID
	 * @return
	 * @throws CouponSystemException
	 */
	Coupon getOneCoupon(int coupounID) throws CouponSystemException;

	/**
	 * purchase a coupon for a customer by id's
	 * 
	 * @param customerID
	 * @param            int couponID
	 * @throws CouponSystemException
	 */
	void addCouponPurchase(int customerID, int couponID) throws CouponSystemException;

	/**
	 * delete all customers purchases of the specified coupon
	 * 
	 * @param CouponIDs
	 * @throws CouponSystemException
	 */
	void deleteCouponPurchase(Integer... CouponIDs) throws CouponSystemException;

	/**
	 * returns an array with all the ids of expired coupons
	 * 
	 * @return
	 * @throws CouponSystemException
	 */
	Integer[] getExpiredCouponsIds() throws CouponSystemException;

	/**
	 * checks if a coupon exists by its title
	 * 
	 * @param        int companyId
	 * @param String title
	 * @return
	 * @throws CouponSystemException
	 */
	boolean couponCheck(int companyId, String title) throws CouponSystemException;

	/**
	 * deletes the coupon purchase from the customer by customer and coupon id
	 * 
	 * @param customerID
	 * @param couponID
	 * @return
	 * @throws CouponSystemException
	 */
	boolean deleteCouponPurchase(int customerID, int couponID) throws CouponSystemException;
}
