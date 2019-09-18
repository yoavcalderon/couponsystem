package com.projectstage3.Coupon.System.Facade;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.springframework.stereotype.Service;

import com.projectstage3.Coupon.System.beans.Category;
import com.projectstage3.Coupon.System.beans.Coupon;
import com.projectstage3.Coupon.System.beans.Customer;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;
import com.projectstage3.Coupon.System.exceptions.NameOrPasswordNotFoundException;
import com.projectstage3.Coupon.System.exceptions.companyexceptions.CouponAlreadyExistsException;

@Service
public class CustomerFacade extends ClientFacade {
	private int customerId;
	private Customer customer1;

	public CustomerFacade() {
	}

	/**
	 * check the login credentials, if email and password fit or are true set the
	 * Customer id for this facade and returns true otherwise returns false
	 */

	@Override
	public boolean login(String email, String password) throws CouponSystemException, NameOrPasswordNotFoundException {
		customer1 = customerDAO.getCustomerbyMailAndPassword(email, password);
		if (customer1 == null)
			throw new NameOrPasswordNotFoundException();
		this.customerId = customer1.getId();
		this.customer1 = customer1;
		return true;

	}

	/**
	 * allows customer to purchase an existing coupon
	 * 
	 * @param coupon
	 * @throws CouponSystemException
	 * @throws CouponAlreadyExistsException
	 */
	public void purchaseCoupon(Coupon coupon) throws CouponSystemException, CouponAlreadyExistsException {
		Customer customer = customerDAO.getCustomer(customerId);
		List<Coupon> coupons = getCustomerCoupons();

		for (Coupon currantcoupon : coupons) {

			if (currantcoupon.getTitle().equals(coupon.getTitle())) {

				throw new CouponAlreadyExistsException("purchaseCoupon failed, coupon title exists already ");
			}
		}

		Calendar cal = Calendar.getInstance();
		// Automatically checks if coupon amount is greater then 0, if coupon has
		// expired and after purchase reduces the coupon amount by 1
		if (coupon.getAmount() > 0 || coupon.getEndDate().after(cal.getTime())) {
			// couponDAO.addCouponPurchase(customerId, coupon.getId());
			coupon.setAmount(coupon.getAmount() - 1);
			Customer cust = getCustomerDetails();

			cust.customerarraylist.add(coupon);
			couponDAO.updateCoupon(coupon);
			customerDAO.updateCustomer(cust);
			System.out.println("coupon was purchased");
		}

	}

	/**
	 * gets all coupons of a certain category
	 * 
	 * @param category
	 * @return
	 * @throws CouponSystemException
	 */
	public ArrayList<Coupon> getCustomerCouponsByCategory(Category category) throws CouponSystemException {
		ArrayList<Coupon> count = new ArrayList<Coupon>();
		List<Coupon> getCustomerCoupons = getCustomerCoupons();
		for (Coupon coupon : getCustomerCoupons) {

			if (category.equals(coupon.getCategory())) {
				count.add(coupon);

			}
		}

		return count;
	}

	/**
	 * gets all coupons that are lower then the currently set maxprice
	 * 
	 * @param maxPrice
	 * @return
	 * @throws CouponSystemException
	 */
	public ArrayList<Coupon> getCustomerCouponsByPrice(double maxPrice) throws CouponSystemException {
		ArrayList<Coupon> count = new ArrayList<Coupon>();
		List<Coupon> coupons = getCustomerCoupons();
		for (Coupon coupon : coupons) {
			if (coupon.getPrice() <= maxPrice) {
				count.add(coupon);

			}
		}
		return count;

	}

	/**
	 * gets all coupons that are lower then the currently set maxprice
	 * 
	 * @param maxPrice
	 * @return
	 * @throws CouponSystemException
	 */
	public List<Coupon> getAllCoupons() throws CouponSystemException {
		List<Coupon> coupons = couponDAO.getAllCoupouns();
		return coupons;

	}

	/**
	 * returns all coupons belonging to a customer by checking his id
	 * 
	 * @return
	 * @throws CouponSystemException
	 */
	public List<Coupon> getCustomerCoupons() throws CouponSystemException {

		Customer customer = getCustomerDetails();

		return customer.getCustomerarraylist();

	}

	/**
	 * returns all the customer information
	 * 
	 * @return
	 * @throws CouponSystemException
	 */
	public Customer getCustomerDetails() throws CouponSystemException {

		return customerDAO.getCustomer(customerId);
	}

	/**
	 * deletes a purchased coupon from the customer
	 * 
	 * @param coupon
	 * @throws CouponSystemException
	 */
	public void deleteCouponPurchase(Coupon coupon) throws CouponSystemException {
		Customer current = customerDAO.getCustomer(customerId);
		current.getCustomerarraylist().remove(coupon);
		customerDAO.updateCustomer(current);

	}

}
