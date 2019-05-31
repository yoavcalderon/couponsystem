package Coupon.System.Test;

import Coupon.System.Database.ConnectionPool;
import Coupon.System.Facade.AdminFacade;
import Coupon.System.Facade.CompanyFacade;
import Coupon.System.Facade.CustomerFacade;
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
				System.out.println("admin log in sucsses ");
				// **************************************************************************************
				// test all will perform all actions below

//___________________________________________________________________________________________________________________________________________________
//                     actions must be performed one by one and not all together unless parameters are exist and are inserted correctly
				// for convienience every function is accompanied by creation and insertion of
				// parameters
//___________________________________________________________________________________________________________________________________________________

				// 1)===>a)admin facade- all company actions
////company creation
//				Company c1 = new Company();
//				c1.setId(1);
//				c1.setName("comp1name");
//				c1.setEmail("comp1mail");
//				c1.setPassword("comp1pass");
//				adminFacade.addCompany(c1);
//				System.out.println("add company success");
////company create and update
//				Company c2 = new Company();
//				c2.setId(2);
//				c2.setName("comp2name");
//				c2.setEmail("comp2mail");
//				c2.setPassword("comp2pass");
//				adminFacade.addCompany(c2);
//				System.out.println("add company success");
////update	company- company id must match generated db id			
//				c2.setId(222);
//				c2.setName("comp2update1");
//				c2.setEmail("comp2update2");
//				c2.setPassword("comp2update3");
//				adminFacade.updateCompany(c2);
//				System.out.println("update company success");
////company create and delete- company id must match generated db id
//				Company c3 = new Company();
//				c3.setId(3);
//				c3.setName("comp3name");
//				c3.setEmail("comp3mail");
//				c3.setPassword("comp3pass");
//				adminFacade.addCompany(c3);
//				System.out.println("add company success");
//				adminFacade.deleteCompany(223);
//				System.out.println("delete company success");
////get company functions- 
//				System.out.println("all companies" + adminFacade.getAllCompanies());
//				System.out.println("get all companies success");
////company id must match generated db id
//				System.out.println(" one company" + adminFacade.getOneCompany(222));
//				System.out.println("get one company success");

//				// 1)===>b)admin facade- all customer actions
////add customer
//				Customer cus1 = new Customer();
//				cus1.setId(1);
//				cus1.setEmail("cus1mail");
//				cus1.setFirstName("cus1name");
//				cus1.setLastName("cus1sur");
//				cus1.setPassword("cus1pass");
//				adminFacade.addCustomer(cus1);
//				System.out.println(" add customer success");
////add customer and update
//				Customer cus2 = new Customer();
//				cus2.setId(2);
//				cus2.setFirstName("cus2name");
//				cus2.setLastName("cus2sur");
//				cus2.setEmail("cus2mail");
//				cus2.setPassword("cus2pass");
//				adminFacade.addCustomer(cus2);
//				System.out.println("add customer success");
//
//				cus2.setId(104);
//				cus2.setFirstName("cus2update1");
//				cus2.setLastName("cus2update2");
//				cus2.setEmail("cus2update3");
//				cus2.setPassword("cus2update4");
//				adminFacade.updateCustomer(cus2);
//				System.out.println("update customer success");
//// add customer and delete
//				Customer cus3 = new Customer();
//				cus3.setId(106);
//				cus3.setFirstName("cus3name");
//				cus3.setLastName("cus3sur");
//				cus3.setEmail("cus3mail");
//				cus3.setPassword("cus3pass");
//				adminFacade.addCustomer(cus3);
//				System.out.println("add customer success");
//				adminFacade.deleteCustomer(cus3);
//				System.out.println("delete customer success");

////get functions
//
//				System.out.println("one customer" + adminFacade.getOneCustomer(cus3));
//				System.out.println("get one customer success");
//				System.out.println("all customers" + adminFacade.getAllCustomers());
//				System.out.println("get all customers success");

				// **************************************************************************************
//2)===>a)company facade- all  actions
//login
				CompanyFacade companyFacade = (CompanyFacade) LoginManager.getInstance().login("comp2update2",
						"comp2update3", ClientType.COMPANY);
				if (companyFacade != null) {
					System.out.println("company login success");
//					// **************************************************************************************
////add company
//					Company c4 = new Company();
//					c4.setId(1);
//					c4.setName("company4name");
//					c4.setEmail("company4mail");
//					c4.setPassword("company4pass");
//					adminFacade.addCompany(c4);
//				System.out.println("add company success");
// add coupon
//					Calendar c = Calendar.getInstance();
//
//					Coupon coup1 = new Coupon();
//					coup1.setTitle("Zeus");
//					coup1.setCategory(Category.ELECTRICITY);
//					coup1.setCompanyId(224);
//					coup1.setDescription("Zeusdes");
//					coup1.setStartDate(new Date(c.getTimeInMillis()));
//					c.add(Calendar.DAY_OF_MONTH, 22);
//					coup1.setEndDate(new Date(c.getTimeInMillis()));
//					coup1.setAmount(1);
//					coup1.setPrice(20);
//					coup1.setImage("image here");
//					companyFacade.addCoupon(coup1);
//					System.out.println("coupon added success");
////create company and coupon update coupon
////add company
//					Company c5 = new Company();
//					c5.setId(2);
//					c5.setName("company5name");
//					c5.setEmail("company5mail");
//					c5.setPassword("company5pass");
//					adminFacade.addCompany(c5);
//					System.out.println("add company success");
//////add coupon
//					Coupon coup2 = new Coupon();
//					coup2.setTitle("Flying carpet");
//					coup2.setCategory(Category.VACATION);
//					coup2.setCompanyId(222);
//					coup2.setDescription("sentient carpet");
//					coup2.setStartDate(null);
//					coup2.setEndDate(null);
//					coup2.setAmount(1);
//					coup2.setPrice(10);
//					coup2.setImage("image");
//					companyFacade.addCoupon(coup2);
//					System.out.println("coupon added success");
//////update coupon
//					coup2.setTitle("coupon update");
//					coup2.setCategory(Category.FOOD);
//					coup2.setCompanyId(222);
//					coup2.setDescription("KFC");
//					coup2.setStartDate(null);
//					coup2.setEndDate(null);
//					coup2.setAmount(1);
//					coup2.setPrice(30);
//					coup2.setImage("image");
//					companyFacade.updateCoupon(coup2);
//					System.out.println("coupon updated");
//delete coupon

//					companyFacade.deleteCoupon(223);
//					System.out.println("coupon has been deleted");
////get functions
//					System.out.println("All coupons: " + companyFacade.getAllCoupons());
//					System.out.println("single coupon of type: " + companyFacade.getCouponByCategory(Category.MEDICAL));
//					System.out.println("the detailes of the logged in company" + companyFacade.getCompanyDetails());

					// **************************************************************************************
					// 3)===>a)customer facade- all actions
//login
					CustomerFacade customerFacade = (CustomerFacade) LoginManager.getInstance().login("cus3mail",
							"cus3pass", ClientType.CUSTOMER);
					System.out.println("customer login success");
//					// **************************************************************************************
//
////add and purchase coupon
//					Coupon coup4 = new Coupon();
//					coup4.setTitle("winterfell");
//					coup4.setCategory(Category.HOME);
//					coup4.setId(125);
//					coup4.setCompanyId(222);
//					coup4.setDescription("dissapointment");
//					coup4.setStartDate(null);
//					coup4.setEndDate(null);
//					coup4.setAmount(1);
//					coup4.setPrice(80);
//					coup4.setImage("image");
//					customerFacade.purchaseCoupon(coup4);
//					System.out.println(" coupon purchased");
////get functions					
//					System.out.println(customerFacade.getCustomerCoupons());

//					System.out.println(customerFacade.getCustomerCouponsByPrice(100));
//
//					System.out.println(customerFacade.getCustomerCouponsByCategory(Category.HOME));
//
//					System.out.println(customerFacade.getCustomerDetails());
//					customerFacade.deleteCouponPurchase(coup4);

				}

			} else {

				System.out.println("client login failed");
			}
		} catch (CouponSystemException e) {
			e.printStackTrace();
		} finally {
			try {
				Thread.sleep(1000);
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
