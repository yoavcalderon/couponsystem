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

	public void purchaseCoupon(Coupon coupon) throws CouponSystemException {
		ArrayList<Coupon> coupons = new ArrayList<>(customerId);
		for (Coupon currantcoupon : coupons) {

			if (currantcoupon.getTitle().equals(coupon.getTitle())) {

				throw new CouponSystemException("purchaseCoupon failed, coupon title exists already ");
			}
		}

		Calendar cal = Calendar.getInstance();

		if (coupon.getAmount() > 0 || coupon.getEndDate().after(cal.getTime())) {
			couponDAO.addCouponPurchase(customerId, coupon.getId());
			coupon.setAmount(coupon.getAmount() - 1);
		}

	}

	public ArrayList<Coupon> getCustomerCouponsByCategory(Category category) throws CouponSystemException {
		ArrayList<Coupon> count = new ArrayList<Coupon>();
		ArrayList<Coupon> getCustomerCoupons = couponDAO.getAllCoupouns(customerId);
		for (Coupon coupon : getCustomerCoupons) {

			if (category.equals(coupon.getCategory())) {
				count.add(coupon);
				couponDAO.getAllCoupouns();
			} else {
				if (count.size() == 0) {

					throw new CouponSystemException("getCustomerCouponsByCategory failed");
				}

			}
		}

		return count;
	}

	public ArrayList<Coupon> getCustomerCouponsByPrice(double maxPrice) throws CouponSystemException {
		ArrayList<Coupon> count = new ArrayList<Coupon>();
		ArrayList<Coupon> coupons = couponDAO.getAllCoupouns(customerId);
		for (Coupon coupon : coupons) {
			if (coupon.getPrice() < maxPrice) {
				count.add(coupon);
				throw new CouponSystemException("getCustomerCouponsByPrice failed");

			} else {
				couponDAO.getAllCoupouns();

			}
		}
		return count;

	}

	ArrayList<Coupon> getCustomerCoupons() throws CouponSystemException {
		return couponDAO.getAllCoupouns(customerId);

	}

	public Customer getCustomerDetails() throws CouponSystemException {
		return customerDAO.getCustomerbyId(customerId);
	}
}