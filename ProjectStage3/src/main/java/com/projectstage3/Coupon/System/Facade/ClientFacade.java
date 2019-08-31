package com.projectstage3.Coupon.System.Facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projectstage3.Coupon.System.dbdao.CompaniesDBDAO;
import com.projectstage3.Coupon.System.dbdao.CouponsDBDAO;
import com.projectstage3.Coupon.System.dbdao.CustomerDBDAO;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;
import com.projectstage3.Coupon.System.exceptions.NameOrPasswordNotFoundException;

@Service
public abstract class ClientFacade implements Facade {
	@Autowired
	protected CompaniesDBDAO companiesDAO;
	@Autowired
	protected CustomerDBDAO customerDAO;
	@Autowired
	protected CouponsDBDAO couponDAO;

	/**
	 * logs in per specified email and password
	 * 
	 * @param name
	 * @param password
	 * @return
	 * @throws CouponSystemException
	 */
	public abstract boolean login(String name, String password)
			throws CouponSystemException, NameOrPasswordNotFoundException;

}
