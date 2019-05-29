package Coupon.System.login;

import Coupon.System.Facade.AdminFacade;
import Coupon.System.Facade.ClientFacade;
import Coupon.System.Facade.CompanyFacade;
import Coupon.System.Facade.CustomerFacade;
import Coupon.System.beans.ClientType;
import Coupon.System.dao.CompaniesDAO;
import Coupon.System.dao.CouponDAO;
import Coupon.System.dao.CustomerDAO;
import Coupon.System.daodb.CompaniesDBDAO;
import Coupon.System.daodb.CouponDBDAO;
import Coupon.System.daodb.CustomerDBDAO;
import Coupon.System.exceptions.CouponSystemException;

public class LoginManager {
	private static LoginManager instance = new LoginManager();

	private CompaniesDAO companiesDAO = new CompaniesDBDAO();
	private CustomerDAO customerDAO = new CustomerDBDAO();
	private CouponDAO couponDAO = new CouponDBDAO();

	private LoginManager() {
	}

	public static LoginManager getInstance() {
		return instance;
	}

	public ClientFacade login(String email, String password, ClientType clientType) throws CouponSystemException {
		ClientFacade clientFacade = null;
		switch (clientType) {

		case ADMINISTRATOR:
			AdminFacade adminFacade = new AdminFacade(companiesDAO, customerDAO, couponDAO);
			if (adminFacade.login(email, password)) {
				clientFacade = adminFacade;

			}

			break;
		case COMPANY:
			CompanyFacade companyFacade = new CompanyFacade(companiesDAO, customerDAO, couponDAO);
			if (companyFacade.login(email, password)) {
				clientFacade = companyFacade;

			}

			break;
		case CUSTOMER:
			CustomerFacade customerFacade = new CustomerFacade(companiesDAO, customerDAO, couponDAO);
			if (customerFacade.login(email, password)) {
				clientFacade = customerFacade;

			}

			break;

		default:
			throw new CouponSystemException(" login failed, no valid client type was specified");
		}

		return clientFacade;

	}

}
