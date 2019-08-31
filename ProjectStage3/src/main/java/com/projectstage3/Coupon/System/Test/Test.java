package com.projectstage3.Coupon.System.Test;

import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Component;

import com.projectstage3.Coupon.System.Facade.AdminFacade;
import com.projectstage3.Coupon.System.Facade.CompanyFacade;
import com.projectstage3.Coupon.System.Facade.CustomerFacade;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;
import com.projectstage3.Coupon.System.exceptions.NameOrPasswordNotFoundException;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CompanyAlreadyExistsException;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CompanyDoesNotExistExcpetion;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CustomerAlreadyExistsException;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CustomerDoesNotExistExcpetion;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.NoCompaniesFoundException;
import com.projectstage3.Coupon.System.exceptions.companyexceptions.CouponAlreadyExistsException;
import com.projectstage3.Coupon.System.exceptions.companyexceptions.CouponNotFoundException;

@Component
public class Test {

	@Autowired
	AdminFacade adminFacade;
	@Autowired
	CompanyFacade companyFacade;
	@Autowired
	CustomerFacade customerFacade;

	ConfigurableApplicationContext context;
	Calendar cal = Calendar.getInstance();

	public Test(ConfigurableApplicationContext context) {

		this.context = context;
	}

	public void TestAll() throws CouponSystemException, NameOrPasswordNotFoundException, CouponAlreadyExistsException,
			CouponNotFoundException, CompanyAlreadyExistsException, CustomerAlreadyExistsException,
			CompanyDoesNotExistExcpetion, CustomerDoesNotExistExcpetion, NoCompaniesFoundException {
//		cal.set(Calendar.YEAR, 2019);
//		cal.set(Calendar.MONTH, 6);
//		cal.set(Calendar.DAY_OF_MONTH, 2);
//		Date start = new Date(cal.getTimeInMillis());
//
//		cal.set(Calendar.MONTH, 10);
//		Date end = new Date(cal.getTimeInMillis());
//		// started thread
//		CouponExpirationDailyJob job = context.getBean(CouponExpirationDailyJob.class);
//		Thread jobThread = new Thread(job);
//		jobThread.start();
//
//		try {
//
//			// login
//
//			if (adminFacade != null) {
//				System.out.println("admin log in sucsses ");
		// **************************************************************************************
		// @test all will perform all actions below@

//				LoginManager loginManager = context.getBean(LoginManager.class);
//				AdminFacade admin1 = (AdminFacade) loginManager.login("admin", "admin", ClientType.ADMINISTRATOR);
		//// ========================= adminFacade =========================
////Admin- 1) add company, add customer
//				adminFacade.addCompany(new Company("company13", "company13@mail.com", "company13pass"));
//				adminFacade.addCustomer(
//						new Customer("Customer13", "Customer13", "Customer13@email.com", "Customer13pass"));
//				Customer temp = new Customer("Customer6", "Customer6sir", "Customer6@email.com", "Customer6pass");
//				adminFacade.addCustomer(temp);

////Admin- 2) delete company, delete customer
//				adminFacade.deleteCompany(2);
//				Customer customer3 = adminFacade.getOneCustomer(203);
//				adminFacade.deleteCustomer(customer3);

////Admin- 3) update company				
//				Company company6 = adminFacade.getOneCompany(103);
//				System.out.println(company6);
//				company6.setEmail("mychangedemail");
//				adminFacade.updateCompany(company6);
////Admin- 4) update customer
//				System.out.println(adminFacade.getOneCustomer(temp));
//				Customer customer7 = adminFacade.getOneCustomer(301);
//				System.out.println(customer7);
//				customer7.setEmail("Changes");
//				adminFacade.updateCustomer(customer7);
////Admin- 5) getter functions
//				System.out.println(adminFacade.getOneCompany(103));
//				System.out.println(adminFacade.getOneCustomer(301));
//				System.out.println(adminFacade.getAllCompanies());
//				System.out.println(adminFacade.getAllCustomers());

////				 ============================ companyFacade ============================

//				CompanyFacade company1 = (CompanyFacade) loginManager.login("company2@mail.com", "company2pass",
//						ClientType.COMPANY);
//				if (company1 == null) {
//					System.out.println("Login failed!!!");
//					return;
//				}
////Company -1)  add coupon, delete coupon
//				companyFacade.addCoupon(new Coupon(company1.getCompanyDetails(), Category.CAMPING, "JJJ", "HHH", start,
//						end, 1, 1.2, "image"));
//				companyFacade.deleteCoupon(109);
////Company -2)update coupon
//				Coupon couponTemp = adminFacade.getOneCoupon(117);
//				couponTemp.setDescription("Description of aeons");
//				companyFacade.updateCoupon(couponTemp);
////Company -3)getter functions
//				System.out.println(companyFacade.getAllCoupons());
//				System.out.println(companyFacade.getCompanyCoupons(117));
//				System.out.println(companyFacade.getCompanyDetails());
//				System.out.println(companyFacade.getCouponByCategory(Category.RESTURANT));
		// ============================ customerFacade // ============================
//				CustomerFacade customer1 = (CustomerFacade) loginManager.login("owlface@.com", "owlfacepass",
//						ClientType.CUSTOMER);
////Customer -1)purchase coupon, delete coupon
//				Coupon couponTemp2 = adminFacade.getOneCoupon(120);
//				customerFacade.purchaseCoupon(couponTemp2);
//				customerFacade.deleteCouponPurchase(adminFacade.getOneCoupon(118));
////Customer -2)getter functions
//				System.out.println(customerFacade.getCustomerDetails());
//				System.out.println(customerFacade.getCustomerCoupons());
//				System.out.println(customerFacade.getCustomerCouponsByCategory(Category.CAMPING));
//				System.out.println(customerFacade.getCustomerCouponsByPrice(13));

//______________________________________________________________________________________________________________

//			} else {
//
//				System.out.println("client login failed");
//			}
//		} finally {
//			try {
//				Thread.sleep(1000);
//			} catch (InterruptedException e) {
//				e.printStackTrace();
//			}
//			job.stop();
//			try {
//				jobThread.join();
//			} catch (InterruptedException e) {
//				e.printStackTrace();
//			}
//
//		}
	}
}
