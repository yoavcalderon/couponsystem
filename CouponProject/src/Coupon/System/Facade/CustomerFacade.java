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
// **************************************************************************************************************

public class CustomerFacade extends ClientFacade {
	private int customerId;

	public CustomerFacade(CompaniesDAO companiesDAO, CustomerDAO customerDAO, CouponDAO couponDAO, int customerId) {
		super(companiesDAO, customerDAO, couponDAO);
		this.customerId = customerId;
	}
	// **************************************************************************************************************

	@Override
	public boolean login(String email, String password) throws CouponSystemException {
		Customer customer = customerDAO.getCustomerbyId(customerId);

		if (customer.getEmail().equals(email) && customer.getPassword().equals(password)) {
			return true;
		} else {
			return false;

		}
	}
	// **************************************************************************************************************

	public void purchaseCoupon(Coupon coupon) throws CouponSystemException {
		ArrayList<Coupon> coupons = new ArrayList<>();
		Calendar cal = Calendar.getInstance();

		if (coupon.getAmount() > 1 || coupon.getAmount() == 0 || coupon.getEndDate().after(cal.getTime())) {
			throw new CouponSystemException(" purchaseCoupon failed ");
		} else {

			couponDAO.addCouponPurchase(customerId, coupon.getId());
			coupon.setAmount(coupon.getAmount() - 1);
		}
	}

	ArrayList<Coupon> getCustomerCoupons() throws CouponSystemException {
		return couponDAO.getAllCoupouns();

	}

	// **************************************************************************************************************
	public ArrayList<Coupon> getCustomerCouponsByCategory(Category category) throws CouponSystemException {
		ArrayList<Coupon> getCustomerCoupons = couponDAO.getAllCoupouns(customerId);
		for (Coupon coupon : getCustomerCoupons) {

			if (category.equals(coupon.getCategory())) {
				couponDAO.getAllCoupouns();
			} else {
				throw new CouponSystemException("getCustomerCouponsByCategory failed");

			}
		}

		return null;
	}

	// **************************************************************************************************************
	public ArrayList<Coupon> getCustomerCouponsByPrice(double maxPrice) throws CouponSystemException {
		ArrayList<Coupon> coupons = couponDAO.getAllCoupouns(customerId);
		for (Coupon coupon : coupons) {
			if (coupon.getPrice() > maxPrice) {
				throw new CouponSystemException("getCustomerCouponsByPrice failed");

			} else {
				couponDAO.getAllCoupouns();

			}
		}
		return null;

	}
	// **************************************************************************************************************

	public Customer getCustomerDetails() throws CouponSystemException {
		return customerDAO.getCustomerbyId(customerId);
	}
}