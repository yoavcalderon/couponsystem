package Coupon.System.Facade;

import java.util.ArrayList;

import Coupon.System.beans.Category;
import Coupon.System.beans.Company;
import Coupon.System.beans.Coupon;
import Coupon.System.dao.CompaniesDAO;
import Coupon.System.dao.CouponDAO;
import Coupon.System.dao.CustomerDAO;
import Coupon.System.exceptions.CouponSystemException;

public class CompanyFacade extends ClientFacade {
	private int companyId;

	public CompanyFacade(CompaniesDAO companiesDAO, CustomerDAO customerDAO, CouponDAO couponDAO) {
		super(companiesDAO, customerDAO, couponDAO);
	}

	/**
	 * check the login credentials, if email and password fit or are true set the
	 * company id for this facade and returns true otherwise returns false
	 */
	@Override
	public boolean login(String email, String password) throws CouponSystemException {
		if (companiesDAO.isCompanyExists(email, password)) {
			companyId = companiesDAO.getCompanyId(email, password);
			return true;
		} else {

			return false;
		}
	}

	/**
	 * adds a coupon after checking it per specified title
	 * 
	 * @param coupon
	 * @throws CouponSystemException
	 */
	public void addCoupon(Coupon coupon) throws CouponSystemException {
		if (couponDAO.couponCheck(companyId, coupon.getTitle())) {
			coupon.setId(couponDAO.addCoupon(coupon));

		} else {
			throw new CouponSystemException("addCoupon failed");

		}

	}

	/**
	 * updates coupon parameters and information
	 * 
	 * @param coupon
	 * @return
	 * @throws CouponSystemException
	 */
	public Coupon updateCoupon(Coupon coupon) throws CouponSystemException {
		couponDAO.updateCoupon(coupon);
		return coupon;
	}

	/**
	 * deletes a coupon- coupon will no longer exist even if it was previously
	 * purchased
	 * 
	 * @param couponId
	 * @throws CouponSystemException
	 */
	public void deleteCoupon(int couponId) throws CouponSystemException {

		couponDAO.deleteCoupon(couponId);
		couponDAO.deleteCouponPurchase(couponId);

	}

	/**
	 * returns all company coupons
	 * 
	 * @return
	 * @throws CouponSystemException
	 */
	public ArrayList<Coupon> getAllCoupons() throws CouponSystemException {

		return couponDAO.getAllCompanyCoupouns(companyId);

	}

	/**
	 * returns all company coupons belonging to a specific category
	 * 
	 * @param category
	 * @return
	 * @throws CouponSystemException
	 */
	public ArrayList<Coupon> getCouponByCategory(Category category) throws CouponSystemException {
		ArrayList<Coupon> count = new ArrayList<Coupon>();
		ArrayList<Coupon> coupons = couponDAO.getAllCompanyCoupouns(companyId);
		for (Coupon coupon : coupons) {
			if (coupon.getCategory().equals(category)) {
				count.add(coupon);
			}
		}
		if (count.size() == 0)
			throw new CouponSystemException("getCouponByCategory failed");

		return count;

	}

	/**
	 * returns all the company coupons by their price
	 * 
	 * @param maxPrice
	 * @return
	 * @throws CouponSystemException
	 */
	public ArrayList<Coupon> getCompanyCoupons(double maxPrice) throws CouponSystemException {
		ArrayList<Coupon> count = new ArrayList<Coupon>();
		ArrayList<Coupon> coupons = couponDAO.getAllCompanyCoupouns(companyId);
		for (Coupon coupon : coupons) {
			if (coupon.getPrice() < maxPrice) {
				count.add(coupon);
				return couponDAO.getAllCoupouns();

			} else {
				throw new CouponSystemException("getCompanyCoupons failed not coupons of price");
			}

		}
		return count;

	}

	/**
	 * returns all company details by company id
	 * 
	 * @return
	 * @throws CouponSystemException
	 */
	public Company getCompanyDetails() throws CouponSystemException {
		return companiesDAO.getOneCompany(companyId);

	}

}
