package com.projectstage3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.projectstage3.Coupon.System.Test.Test;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;
import com.projectstage3.Coupon.System.exceptions.NameOrPasswordNotFoundException;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CompanyAlreadyExistsException;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CompanyDoesNotExistExcpetion;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CustomerAlreadyExistsException;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CustomerDoesNotExistExcpetion;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.NoCompaniesFoundException;
import com.projectstage3.Coupon.System.exceptions.companyexceptions.CouponAlreadyExistsException;
import com.projectstage3.Coupon.System.exceptions.companyexceptions.CouponNotFoundException;

@SpringBootApplication
public class ProjectStage3Application {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(ProjectStage3Application.class, args);

//		CouponsDBDAO couponsDBDAO = context.getBean(CouponsDBDAO.class);
//		CompaniesDBDAO companiesDBDAO = context.getBean(CompaniesDBDAO.class);
//		CustomerDBDAO customerDBDAO = context.getBean(CustomerDBDAO.class);
//
//		AdminFacade adminFacade = context.getBean(AdminFacade.class);
//		CustomerFacade customerFacade = context.getBean(CustomerFacade.class);
//		CompanyFacade companyFacade = context.getBean(CompanyFacade.class);

		System.out.println("==== test started ====");

		Test test = context.getBean(Test.class, context);
		try {
			test.TestAll();
		} catch (CouponSystemException | NameOrPasswordNotFoundException | CouponAlreadyExistsException
				| CouponNotFoundException | CompanyAlreadyExistsException | CustomerAlreadyExistsException
				| CompanyDoesNotExistExcpetion | CustomerDoesNotExistExcpetion | NoCompaniesFoundException e) {
			e.printStackTrace();
		}
		System.out.println("==== test ended ====");

	}

}
