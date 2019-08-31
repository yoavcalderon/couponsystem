package com.projectstage3.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectstage3.Coupon.System.Facade.CompanyFacade;
import com.projectstage3.Coupon.System.beans.Category;
import com.projectstage3.Coupon.System.beans.Coupon;
import com.projectstage3.Coupon.System.dbdao.CompaniesDBDAO;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;
import com.projectstage3.Coupon.System.exceptions.companyexceptions.CouponAlreadyExistsException;
import com.projectstage3.Coupon.System.exceptions.companyexceptions.CouponDeleteFailed;
import com.projectstage3.Coupon.System.exceptions.companyexceptions.CouponNotFoundException;

@CrossOrigin
@RequestMapping("/company")
@RestController
public class CompanyController {
	@Autowired
	protected CompaniesDBDAO companiesDAO;
	@Autowired
	CompanyFacade companyFacade;
	@Autowired
	private Map<String, Session> tokensMap;

	private Session isActive(String token) {
		return tokensMap.get(token);
	}

//	@PostMapping(path = "/login/{token}/{name}/{password}")
//	public ResponseEntity<?> login(@PathVariable String name, @PathVariable String password) {
//		try {
//			if (companyFacade.login(name, password)) {
//				return new ResponseEntity<Boolean>(true, HttpStatus.OK);
//			}
//			return new ResponseEntity<Boolean>(false, HttpStatus.OK);
//		} catch (CouponSystemException | NameOrPasswordNotFoundException e) {
//
//			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}

	@PostMapping(path = "/addCoupon/{token}")
	public ResponseEntity<?> addCoupon(@RequestBody Coupon coupon, @PathVariable("token") String token) {
		// System.out.println(tokensMap.get(token).getFacade());
		Session s = isActive(token);
		if (s != null) {
			System.out.println(coupon.getTitle());
			s.setLastAcssesed(System.currentTimeMillis());

			try {
				companyFacade.addCoupon(coupon);
//				return new ResponseEntity<Boolean>(true, HttpStatus.CREATED);
				coupon.setCompany(null);
				return new ResponseEntity<Coupon>(coupon, HttpStatus.CREATED);
			} catch (CouponSystemException | CouponAlreadyExistsException e) {

				return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

	@PutMapping(path = "/updateCoupon/{token}")
	public ResponseEntity<?> update(@RequestBody Coupon coupon, @PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());

		}
		try {
			companyFacade.updateCoupon(coupon);
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		} catch (CouponSystemException | CouponNotFoundException e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.OK);
		}

	}

	@DeleteMapping(path = "/deleteCoupon/{token}/{id}")
	public ResponseEntity<?> deleteCoupon(@PathVariable("id") int id, @PathVariable("token") String token)
			throws CouponDeleteFailed {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());

			try {
				companyFacade.deleteCoupon(id);
				return new ResponseEntity<Integer>(HttpStatus.NO_CONTENT);
			} catch (CouponSystemException e) {
				throw new CouponDeleteFailed();
			}
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

	@GetMapping(path = "/getCompanyCoupons/{token}")
	public ResponseEntity<?> getCompanyCoupons(@PathVariable("token") String token) throws CouponNotFoundException {
		Session s = isActive(token);
		if (s != null) {

			try {
				List<Coupon> coupons = companyFacade.getAllCoupons();
				for (Coupon coupon : coupons) {
					coupon.setCompany(null);
				}

				s.setLastAcssesed(System.currentTimeMillis());
				return new ResponseEntity<List<Coupon>>(coupons, HttpStatus.OK);
			} catch (CouponSystemException e) {
				return new ResponseEntity<String>("getCoupon Service failed", HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

	@GetMapping(path = "/getCompanyCouponsCat/{token}/{Category}")
	public ResponseEntity<?> getCompanyCouponsCat(@PathVariable("Category") Category category,
			@PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());

			try {
				return new ResponseEntity<List<Coupon>>(companyFacade.getCouponByCategory(category), HttpStatus.OK);
			} catch (CouponSystemException | CouponNotFoundException e) {
				return new ResponseEntity<String>("getCompanyCouponsCat", HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);

	}

	@GetMapping(path = "/getCompanyCouponsPrice/{token}/{price}")
	public ResponseEntity<?> getCompanyCouponsPrice(@PathVariable("price") double Price,
			@PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());

			try {
				return new ResponseEntity<List<Coupon>>(companyFacade.getCompanyCoupons(Price), HttpStatus.OK);
			} catch (CouponSystemException | CouponNotFoundException e) {
				return new ResponseEntity<String>("getCompanyCouponsPrice Service Failed",
						HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);

	}

	// new
	@GetMapping("/getCompanyDetails/{token}")
	public ResponseEntity<?> getCompanyDetails(@PathVariable String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());
			try {
				return new ResponseEntity<>(((CompanyFacade) s.getFacade()).getCompanyDetails(), HttpStatus.OK);
			} catch (CouponSystemException e) {
				return new ResponseEntity<String>("getCompanyDetails Service Failed", HttpStatus.INTERNAL_SERVER_ERROR);
			}

		} else {
			return new ResponseEntity<>("session timeout", HttpStatus.UNAUTHORIZED);

		}
	}

}
