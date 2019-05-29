package Coupon.System.Test;

import Coupon.System.Database.ConnectionPool;
import Coupon.System.Facade.AdminFacade;
import Coupon.System.Facade.CompanyFacade;
import Coupon.System.Facade.CustomerFacade;
import Coupon.System.beans.Category;
import Coupon.System.beans.ClientType;
import Coupon.System.exceptions.CouponSystemException;
import Coupon.System.job.CouponExpirationDailyJob;
import Coupon.System.login.LoginManager;

public class Test {
	public void TestAll() {
		// started thread
		CouponExpirationDailyJob job = new CouponExpirationDailyJob();
		Thread jobThread = new Thread(job, "jobthread");
		job.setJobThread(jobThread);

		try {

			// login
			AdminFacade adminFacade = (AdminFacade) LoginManager.getInstance().login("admin@admin.com", "admin",
					ClientType.ADMINISTRATOR);

			if (adminFacade != null) {
				System.out.println("log in sucsses ");
				// **************************************************************************************
				// do all admin actions here...

				// 1)===>a)admin facade- all company actions

//				Company c1 = new Company();
//				c1.setId(1);
//				c1.setName("DDDXXX");
//				c1.setEmail("DDDmailYYY");
//				c1.setPassword("DDDpassZZZ");
//				adminFacade.addCompany(c1);
//				System.out.println("add company success");
//
//				c1.setId(1);
//				c1.setName("EEEXXX");
//				c1.setEmail("EEEmailYYY");
//				c1.setPassword("EEEpassZZZ");
//				adminFacade.updateCompany(c1);
//				System.out.println("update company success");

//				adminFacade.deleteCompany(3);
//				System.out.println("delete company success");

//				System.out.println(adminFacade.getAllCompanies());

//				System.out.println(adminFacade.getOneCompany(3));

				// 1)===>b)admin facade- all customer actions

//				Customer cus1 = new Customer();
//				cus1.setId(1);
//				cus1.setEmail("cus1@email");
//				cus1.setFirstName("cus1");
//				cus1.setLastName("cus1famname");
//				cus1.setPassword("cus1pass");
//				adminFacade.addCustomer(cus1);
//				System.out.println(" add customer success");

//				Customer cus2 = new Customer();
//				cus2.setId(2);
//				cus2.setFirstName("cus2");
//				cus2.setLastName("cus2famname");
//				cus2.setEmail("cus2@email");
//				cus2.setPassword("cus2pass");
//				adminFacade.addCustomer(cus2);
//				System.out.println("add customer success");

//				cus2.setId(1);
//				cus2.setFirstName("cus2updatefirst");
//				cus2.setLastName("cus2updatelastname");
//				cus2.setEmail("cus2@updated");
//				cus2.setPassword("cus2passupdated");
//				adminFacade.updateCustomer(cus2);
//				System.out.println("update customer success");

//				adminFacade.deleteCustomer(cus2);
//				System.out.println("delete customer success");

//				Customer cus3 = new Customer();
//				cus3.setId(3);
//				cus3.setEmail("cus3@email");
//				cus3.setFirstName("cus3");
//				cus3.setLastName("cus3famname");
//				cus3.setPassword("cus3pass");
//				adminFacade.addCustomer(cus3);
//				System.out.println(" add customer success");
//
//				System.out.println(adminFacade.getOneCustomer(cus3));
//				System.out.println("get one customer success");
//				System.out.println(adminFacade.getAllCustomers());

				// int id = adminFacade.addCompany(c1);
				// System.out.println("company created. id =" + id);
				// **************************************************************************************

				CompanyFacade companyFacade = (CompanyFacade) LoginManager.getInstance().login("doogle", "shoogle",
						ClientType.COMPANY);
				if (companyFacade != null) {
					System.out.println("client login success");
					// **************************************************************************************
//2)===>a)company facade- all  actions

//					Company company1 = new Company();
//					company1.setId(1);
//					company1.setName("google");
//					company1.setEmail("doogle");
//					company1.setPassword("shoogle");
//					adminFacade.addCompany(company1);
//					System.out.println("add company success");

//					Calendar c = Calendar.getInstance();
//
//					Coupon c6 = new Coupon();
//					c6.setTitle("Coup2");
//					c6.setCategory(Category.ELECTRICITY);
//					c6.setCompanyId(114);
//					c6.setDescription("shocking coupon");
//					c6.setStartDate(new Date(c.getTimeInMillis()));
//					c.add(Calendar.DAY_OF_MONTH, 22);
//					c6.setEndDate(new Date(c.getTimeInMillis()));
//					c6.setAmount(16);
//					c6.setPrice(1.9);
//					c6.setImage("image here");
//					companyFacade.addCoupon(c6);
//					System.out.println("coupon added success");

//
//					Coupon c7 = new Coupon();
//					c7.setTitle("coupon creation");
//					c7.setCategory(Category.VACATION);
//					c7.setCompanyId(112);
//					c7.setDescription("resturant coupon");
//					c7.setStartDate(null);
//					c7.setEndDate(null);
//					c7.setAmount(1);
//					c7.setPrice(1.1);
//					c7.setImage("image");
//					companyFacade.addCoupon(c7);
//					System.out.println("coupon added success");
//
//					c7.setTitle("coupon update");
//					c7.setCategory(Category.ELECTRICITY);
//					c7.setCompanyId(112);
//					c7.setDescription("resturanting coupon");
//					c7.setStartDate(null);
//					c7.setEndDate(null);
//					c7.setAmount(1);
//					c7.setPrice(1.1);
//					c7.setImage("image");
//					companyFacade.updateCoupon(c7);
//					System.out.println("coupon updated");
//
//					companyFacade.deleteCopun(37);
//					System.out.println("coupon has been deleted");
//
//					System.out.println("All coupons: " + companyFacade.getAllCoupons());
//					System.out.println("Vacation: " + companyFacade.getCouponByCategory(Category.VACATION));
//					System.out.println(companyFacade.getCompanyDetails());

					// 2)===>a)company facade- all actions
					CustomerFacade customerFacade = (CustomerFacade) LoginManager.getInstance().login("cus2@email",
							"cus2pass", ClientType.CUSTOMER);
					System.out.println("login success");
//
//					Coupon c7 = new Coupon();
//					c7.setTitle("coupon creation");
//					c7.setCategory(Category.VACATION);
//					c7.setCompanyId(112);
//					c7.setDescription("resturant coupon");
//					c7.setStartDate(null);
//					c7.setEndDate(null);
//					c7.setAmount(1);
//					c7.setPrice(1.1);
//					c7.setImage("image");
//					companyFacade.addCoupon(c7);
//					System.out.println("coupon added success");
//					customerFacade.purchaseCoupon(c7);
//					System.out.println(" coupon purchased");
					System.out.println(customerFacade.getCustomerCouponsByPrice(100));

					System.out.println(customerFacade.getCustomerCouponsByCategory(Category.VACATION));
//					System.out.println(customerFacade.getCustomerDetails());

//					Customer cus1 = new Customer();
//					cus1.setId(1);
//					cus1.setEmail("cus1@email");
//					cus1.setFirstName("cus1");
//					cus1.setLastName("cus1famname");
//					cus1.setPassword("cus1pass");
//					adminFacade.addCustomer(cus1);
//					System.out.println(" add customer success");

				}

			} else {

				System.out.println("client login failed");
			}
		} catch (CouponSystemException e) {
			e.printStackTrace();
		} finally {
			try {
				Thread.sleep(20000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			job.stop();
			try {
				jobThread.join();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}

			try {
				ConnectionPool.getInstance().closeAllConnections();
			} catch (CouponSystemException e) {
				e.printStackTrace();
			}

		}
	}
}
