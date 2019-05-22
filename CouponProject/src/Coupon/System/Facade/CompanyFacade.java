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

	// **************************************************************************************************************

	public CompanyFacade(CompaniesDAO companiesDAO, CustomerDAO customerDAO, CouponDAO couponDAO, int companyId) {
		super(companiesDAO, customerDAO, couponDAO);
		this.companyId = companyId;
	}
	// **************************************************************************************************************

	@Override
	public boolean login(String email, String password) throws CouponSystemException {
		if (companiesDAO.isCompanyExists(email, password) == true) {
			return true;
		} else {

			return false;
		}
	}
	// **************************************************************************************************************

	public void addCoupon(Coupon coupon) throws CouponSystemException {

		ArrayList<Coupon> couponsarray = new ArrayList<>(companyId);
		for (Coupon currantCoupon : couponsarray) {

			if (companyId == currantCoupon.getCompanyId() && coupon.getTitle().equals(currantCoupon.getTitle())) {
				throw new CouponSystemException(" addCoupon failed, cannot add coupon- title exists already");
			} else {
				couponDAO.addCoupon(coupon);

			}
		}

	}
	// **************************************************************************************************************

	public Coupon updateCoupon(Coupon coupon) throws CouponSystemException {
		couponDAO.updateCoupon(coupon);
		return coupon;
	}
	// **************************************************************************************************************

	public void deleteCopun(int couponId) throws CouponSystemException {

		couponDAO.deleteCoupon(couponId);
		couponDAO.deleteCouponPurchase(couponId);

	}
	// **************************************************************************************************************

	public ArrayList<Coupon> getAllCoupons() throws CouponSystemException {

		return couponDAO.getAllCoupouns(companyId);

	}
	// **************************************************************************************************************

	public ArrayList<Coupon> getCouponByCategory(Category category) throws CouponSystemException {
		ArrayList<Coupon> coupons = couponDAO.getAllCoupouns(companyId);
		for (Coupon coupon : coupons) {
			if (coupon.getCategory().equals(category)) {
				return couponDAO.getAllCoupouns();

			} else {
				throw new CouponSystemException("getCouponByCategory failed not coupons of this category were found");
			}

		}
		return null;

	}
	// **************************************************************************************************************

	public ArrayList<Coupon> getCompanyCoupons(double maxPrice) throws CouponSystemException {
		ArrayList<Coupon> coupons = couponDAO.getAllCoupouns(companyId);
		for (Coupon coupon : coupons) {
			if (coupon.getPrice() > maxPrice) {
				return couponDAO.getAllCoupouns();

			} else {
				throw new CouponSystemException("getCompanyCoupons failed not coupons of price");
			}

		}
		return null;

	}
	// **************************************************************************************************************

	public Company getCompanyDetails() throws CouponSystemException {
		return companiesDAO.getOneCompany(companyId);

	}

}
