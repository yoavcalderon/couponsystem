package Coupon.System.Facade;

import java.util.ArrayList;
import java.util.Calendar;

import Coupon.System.beans.Category;
import Coupon.System.beans.Coupon;
import Coupon.System.beans.Customer;
import Coupon.System.dao.CompaniesDAO;
import Coupon.System.dao.CouponDAO;
import Coupon.System.dao.CustomerDAO;
import Coupon.System.exceptions.CouponSystemException;

public class CustomerFacade extends ClientFacade {
	private int customerId;

	public CustomerFacade(CompaniesDAO companiesDAO, CustomerDAO customerDAO, CouponDAO couponDAO) {
		super(companiesDAO, customerDAO, couponDAO);
	}

	/**
	 * check the login credentials, if email and password fit or are true set the
	 * Customer id for this facade and returns true otherwise returns false
	 */
	@Override
	public boolean login(String email, String password) throws CouponSystemException {
		try {
			Customer c = customerDAO.getCustomer(email, password);
			if (customerDAO.isCustomerExist(email, password)) {
				this.customerId = c.getId();

			}
			return true;

		} catch (CouponSystemException e) {
			return false;
		}

	}

	/**
	 * allows customer to purchase an existing coupon
	 * 
	 * @param coupon
	 * @throws CouponSystemException
	 */
	public void purchaseCoupon(Coupon coupon) throws CouponSystemException {
		ArrayList<Coupon> coupons = getCustomerCoupons();

		for (Coupon currantcoupon : coupons) {

			if (currantcoupon.getTitle().equals(coupon.getTitle())) {

				throw new CouponSystemException("purchaseCoupon failed, coupon title exists already ");
			}
		}

		Calendar cal = Calendar.getInstance();
// automaticly checks if coupon amount is greater then 0, if coupon has expired and after purchase reduces the coupon amount by 1
		if (coupon.getAmount() > 0 || coupon.getEndDate().after(cal.getTime())) {
			couponDAO.addCouponPurchase(customerId, coupon.getId());
			coupon.setAmount(coupon.getAmount() - 1);
		}

	}

	/**
	 * gets all coupons of a certin category
	 * 
	 * @param category
	 * @return
	 * @throws CouponSystemException
	 */
	public ArrayList<Coupon> getCustomerCouponsByCategory(Category category) throws CouponSystemException {
		ArrayList<Coupon> count = new ArrayList<Coupon>();
		ArrayList<Coupon> getCustomerCoupons = couponDAO.getAllCustomerCoupouns(customerId);
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
		ArrayList<Coupon> coupons = couponDAO.getAllCustomerCoupouns(customerId);
		for (Coupon coupon : coupons) {
			if (coupon.getPrice() <= maxPrice) {
				count.add(coupon);

			}
		}
		return count;

	}

	/**
	 * returns all coupons belonging to a customer by checking his id
	 * 
	 * @return
	 * @throws CouponSystemException
	 */
	public ArrayList<Coupon> getCustomerCoupons() throws CouponSystemException {
		return couponDAO.getAllCustomerCoupouns(customerId);

	}

	/**
	 * returns all the customer information
	 * 
	 * @return
	 * @throws CouponSystemException
	 */
	public Customer getCustomerDetails() throws CouponSystemException {
		return customerDAO.getCustomerbyId(customerId);
	}

	/**
	 * deletes a purchased coupon from the customer
	 * 
	 * @param coupon
	 * @throws CouponSystemException
	 */
	public void deleteCouponPurchase(Coupon coupon) throws CouponSystemException {
		ArrayList<Coupon> coupons = getCustomerCoupons();
		for (Coupon currentCoupon : coupons) {
			if (currentCoupon.getId() == coupon.getId()) {

				couponDAO.deleteCouponPurchase(coupon.getId());
				System.out.println("deleted coupon purchuse" + coupon.getId());
			}

		}
	}

}