package Coupon.System.dao;

import java.util.ArrayList;

import Coupon.System.beans.Coupon;
import Coupon.System.exceptions.CouponSystemException;

public interface CouponDAO {

	int addCoupon(Coupon coupon) throws CouponSystemException;

	void updateCoupon(Coupon coupon) throws CouponSystemException;

	boolean deleteCoupon(int couponID) throws CouponSystemException;

	ArrayList<Coupon> getAllCoupouns() throws CouponSystemException;

//1. get all coupons of a certain company
	ArrayList<Coupon> getAllCoupouns(int companyID) throws CouponSystemException;

	Coupon getOneCoupon(int coupounID) throws CouponSystemException;

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

	boolean couponCheck(int companyId, String title) throws CouponSystemException;

}
