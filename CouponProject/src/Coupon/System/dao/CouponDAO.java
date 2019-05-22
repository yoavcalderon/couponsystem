package Coupon.System.dao;

import java.util.ArrayList;

import Coupon.System.beans.Coupon;
import Coupon.System.exceptions.CouponSystemException;

public interface CouponDAO {
	// ********************************************************************

	public int addCoupon(Coupon coupon) throws CouponSystemException;
	// ********************************************************************

	public void updateCoupon(Coupon coupon) throws CouponSystemException;
	// ********************************************************************

	public boolean deleteCoupon(int couponID) throws CouponSystemException;
	// ********************************************************************

	public ArrayList<Coupon> getAllCoupouns() throws CouponSystemException;

//1. get all coupons of a certain company
	public ArrayList<Coupon> getAllCoupouns(int companyID) throws CouponSystemException;
	// ********************************************************************

	public Coupon getOneCoupon(int coupounID) throws CouponSystemException;
	// ********************************************************************

	public void addCouponPurchase(int customerID, int couponID) throws CouponSystemException;
	// ********************************************************************

	public void deleteCouponPurchase(int customerID, int CouponID) throws CouponSystemException;

	// ********************************************************************

	/**
	 * delete all customers purchases of the specified coupon
	 * 
	 * @param CouponID
	 * @throws CouponSystemException
	 */
	public void deleteCouponPurchase(int CouponID) throws CouponSystemException;
	// ********************************************************************

}
