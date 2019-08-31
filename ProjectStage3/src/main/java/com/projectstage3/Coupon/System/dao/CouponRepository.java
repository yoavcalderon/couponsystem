package com.projectstage3.Coupon.System.dao;

import java.sql.Date;
import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectstage3.Coupon.System.beans.Coupon;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;

public interface CouponRepository extends JpaRepository<Coupon, Integer> {

	/**
	 * get all coupons of a certain company
	 * 
	 * @param companyID
	 * @return array of coupon object
	 * @throws CouponSystemException
	 */
	public ArrayList<Coupon> getBycompanyId(int companyId) throws CouponSystemException;

	/**
	 * get all coupons of a certain customer
	 * 
	 * @param couponId
	 * @return array of coupon object
	 * @throws CouponSystemException
	 */
	public ArrayList<Coupon> getById(int couponId) throws CouponSystemException;

	/**
	 * returns an array with all the ids of expired coupons
	 * 
	 * @return
	 * @throws CouponSystemException
	 */
	public ArrayList<Coupon> getCouponsByEndDateGreaterThan(Date endDate) throws CouponSystemException;

	/**
	 * checks if a coupon exists by its title
	 * 
	 * @param        int companyId
	 * @param String title
	 * @return
	 * @throws CouponSystemException
	 */
	public boolean existsByIdAndTitle(int id, String title) throws CouponSystemException;

}
