package Coupon.System.Facade;

import Coupon.System.dao.CompaniesDAO;
import Coupon.System.dao.CouponDAO;
import Coupon.System.dao.CustomerDAO;
import Coupon.System.exceptions.CouponSystemException;

// ********************************************************************

public abstract class ClientFacade {
	protected CompaniesDAO companiesDAO;
	protected CustomerDAO customerDAO;
	protected CouponDAO couponDAO;
	// ********************************************************************

	public ClientFacade(CompaniesDAO companiesDAO, CustomerDAO customerDAO, CouponDAO couponDAO) {
		this.companiesDAO = companiesDAO;
		this.customerDAO = customerDAO;
		this.couponDAO = couponDAO;
	}
	// ********************************************************************

	public abstract boolean login(String email, String password) throws CouponSystemException;

}
