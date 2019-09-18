package com.projectstage3.Coupon.System.dbdao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.projectstage3.Coupon.System.beans.Coupon;
import com.projectstage3.Coupon.System.dao.CouponRepository;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;

@Component
public class CouponsDBDAO {
	@Autowired
	private CouponRepository repoCoup;

//a database related function adds a coupon
	public void addCoupon(Coupon coupon) {
		System.out.println(coupon.getCompany());
		repoCoup.save(coupon);

	}

//a database related function updates a coupon
	public void updateCoupon(Coupon coupon) {
		repoCoup.save(coupon);

	}

//a database related function Deletes a coupon by id
	public void deleteCoupon(int couponID) throws CouponSystemException {
		repoCoup.deleteById(couponID);
	}

//a database related function gets all coupons
	public ArrayList<Coupon> getAllCoupouns() {
		return (ArrayList<Coupon>) repoCoup.findAll();

	}

//a database related function that gets all coupons of specified company by company id
	public List<Coupon> getAllCompanyCoupouns(int id) throws CouponSystemException {
		return repoCoup.getBycompanyId(id);
	}

//a database related function that gets coupons of specified customer by id
	public ArrayList<Coupon> getAllCustomerCoupouns(int customerId) throws CouponSystemException {
		return repoCoup.getById(customerId);

	}

// a database related function that returns a coupon entity after finding email and coupon existance validation
	public Coupon getOneCoupon(int coupounId) throws CouponSystemException {
		Optional<Coupon> coupon = repoCoup.findById(coupounId);
		if (coupon.isPresent()) {
			return coupon.get();
		}
		throw new CouponSystemException("getOneCoupon failed");

	}

//a database related function that validates coupon existence by id and title
	public boolean couponCheck(int id, String title) throws CouponSystemException {
		return repoCoup.existsByIdAndTitle(id, title);

	}

}
