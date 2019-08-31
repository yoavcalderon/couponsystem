package com.projectstage3.Coupon.System.login;

import javax.persistence.Enumerated;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.projectstage3.Coupon.System.Facade.AdminFacade;
import com.projectstage3.Coupon.System.Facade.ClientFacade;
import com.projectstage3.Coupon.System.Facade.CompanyFacade;
import com.projectstage3.Coupon.System.Facade.CustomerFacade;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;
import com.projectstage3.Coupon.System.exceptions.NameOrPasswordNotFoundException;

@Component
@Scope("singleton")
public class LoginManager {
	@Autowired
	private ApplicationContext context;

	@Autowired
	CompanyFacade cf;

	private LoginManager() {
	}

	/**
	 * logs in to an account of a client specified by the email and password
	 * 
	 * @param email
	 * @param password
	 * @param clientType
	 * @return
	 * @throws CouponSystemException
	 */
	@Enumerated
	private ClientType clientType;

	public ClientFacade login(String email, String password, ClientType clientType)
			throws CouponSystemException, NameOrPasswordNotFoundException {
		switch (clientType) {

		case ADMINISTRATOR:
			AdminFacade adminFacade = context.getBean(AdminFacade.class);
			if (adminFacade.login(email, password)) {
				System.out.println("you are now logged in admin");
				return adminFacade;

			}

			break;
		case COMPANY:

//			CompanyFacade companyFacade = context.getBean(CompanyFacade.class);
			System.out.println("before if");
			if (cf.login(email, password)) {
				System.out.println("you are now logged in company");
				System.out.println(cf.getCompanyDetails());
				return cf;

			}
			System.out.println("after if");

			break;
		case CUSTOMER:
			CustomerFacade customerFacade = context.getBean(CustomerFacade.class);
			if (customerFacade.login(email, password)) {

				System.out.println("you are now logged in customer");
				return customerFacade;

			}

			break;

		default:
			throw new CouponSystemException(" login failed, no valid client type was specified");
		}
		return null;

	}

}
