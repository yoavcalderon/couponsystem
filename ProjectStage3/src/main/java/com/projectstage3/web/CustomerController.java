package com.projectstage3.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectstage3.Coupon.System.Facade.CustomerFacade;
import com.projectstage3.Coupon.System.beans.Category;
import com.projectstage3.Coupon.System.beans.Coupon;
import com.projectstage3.Coupon.System.beans.Customer;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;
import com.projectstage3.Coupon.System.exceptions.companyexceptions.CouponAlreadyExistsException;

@CrossOrigin
@RestController
@RequestMapping("/customer")
public class CustomerController {
	@Autowired
	CustomerFacade customerfacade;
	@Autowired
	private Map<String, Session> tokensMap;

	private Session isActive(String token) {
		return tokensMap.get(token);
	}

//	@PostMapping(path = "/login/{token}")
//	public ResponseEntity<?> login(@PathVariable("name") String name, @PathVariable("password") String password) {
//		try {
//			if (customerfacade.login(name, password)) {
//				return new ResponseEntity<Boolean>(true, HttpStatus.OK);
//			}
//			return new ResponseEntity<Boolean>(false, HttpStatus.OK);
//		} catch (CouponSystemException | NameOrPasswordNotFoundException e) {
//			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//
//	}

	@PostMapping(path = "/purchase/{token}")
	public ResponseEntity<?> purchaseCoupon(@RequestBody Coupon coupon, @PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());

			try {
				customerfacade.purchaseCoupon(coupon);
				return new ResponseEntity<Boolean>(true, HttpStatus.OK);
			} catch (CouponSystemException | CouponAlreadyExistsException e) {
				return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
			}

		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

	@GetMapping(path = "/getCustomerCoupons/{token}")
	public ResponseEntity<?> getCustomerCoupons(@PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());
			try {

				return new ResponseEntity<List<Coupon>>(customerfacade.getCustomerCoupons(), HttpStatus.OK);
			} catch (CouponSystemException e) {
				// TODO Auto-generated catch block
				return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

	@GetMapping(path = "/getCustomerCouponsCat/{token}/{category}")
	public ResponseEntity<?> getCustomerCouponsCat(@PathVariable("category") Category category,
			@PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());
			try {
				return new ResponseEntity<List<Coupon>>(customerfacade.getCustomerCouponsByCategory(category),
						HttpStatus.OK);
			} catch (CouponSystemException e) {
				return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

	@GetMapping(path = "/getCustomerCouponsPrice/{token}/{price}")
	public ResponseEntity<?> getCustomerCouponsPrice(@PathVariable("price") double maxPrice,
			@PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());
			try {
				return new ResponseEntity<List<Coupon>>(customerfacade.getCustomerCouponsByPrice(maxPrice),
						HttpStatus.OK);
			} catch (CouponSystemException e) {
				return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

	@GetMapping(path = "/getCustomerDetails/{token}")
	public ResponseEntity<?> getCustomerDetails(@RequestBody Customer customer, @PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());
			try {
				return new ResponseEntity<Customer>(customerfacade.getCustomerDetails(), HttpStatus.OK);
			} catch (CouponSystemException e) {
				return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
			}

		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}
}
