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

import com.projectstage3.Coupon.System.Facade.AdminFacade;
import com.projectstage3.Coupon.System.beans.Company;
import com.projectstage3.Coupon.System.beans.Customer;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CompanyAlreadyExistsException;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CompanyDoesNotExistExcpetion;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CustomerAlreadyExistsException;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.CustomerDoesNotExistExcpetion;
import com.projectstage3.Coupon.System.exceptions.adminexceptions.NoCompaniesFoundException;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
	public String error = "{\"error\":\"" + "AdminControllerError" + "\"}";
	@Autowired
	AdminFacade adminfacade;
	@Autowired
	private Map<String, Session> tokensMap;

	private Session isActive(String token) {
		return tokensMap.get(token);
	}

	@PostMapping(path = "/addCompany/{token}")
	public ResponseEntity<?> addCompany(@RequestBody Company company, @PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());

			try {
				adminfacade.addCompany(company);
			} catch (CouponSystemException | CompanyAlreadyExistsException e) {
				return new ResponseEntity<String>("addCompany service failed" + error,
						HttpStatus.INTERNAL_SERVER_ERROR);
			}
			return new ResponseEntity<Company>(company, HttpStatus.OK);
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

	@PutMapping(path = "/updateCompany/{token}")
	public ResponseEntity<?> updateCompany(@RequestBody Company company, @PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());
			try {
				adminfacade.updateCompany(company);
			} catch (CouponSystemException e) {
				return new ResponseEntity<String>("updateCompany Service failed" + error,
						HttpStatus.INTERNAL_SERVER_ERROR);
			}
			return new ResponseEntity<Company>(company, HttpStatus.OK);
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

	@DeleteMapping("/deleteCompany/{id}/{token}")
	public ResponseEntity<?> deleteCompany(@PathVariable("id") int id, @PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());
			try {
				adminfacade.deleteCompany(id);
			} catch (CouponSystemException | CompanyDoesNotExistExcpetion e) {
				return new ResponseEntity<String>("deleteCompany service failed" + error,
						HttpStatus.INTERNAL_SERVER_ERROR);
			}
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);

		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

	@GetMapping("/getAllComp/{token}")
	public ResponseEntity<?> getAllCompanies(@PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());
			try {
				List<Company> companies = adminfacade.getAllCompanies();
				for (Company company : companies) {
					company.setCoupons(null);
				}
				return new ResponseEntity<List<Company>>(adminfacade.getAllCompanies(), HttpStatus.OK);
			} catch (CouponSystemException | NoCompaniesFoundException e) {
				return new ResponseEntity<String>("getAllCompanies service failed" + error,
						HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

	@GetMapping("/getOneCompany/{token}/{id}")
	public ResponseEntity<?> getOneCompany(@PathVariable("id") int id, @PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());
			Company comp = null;
			try {
				comp = adminfacade.getOneCompany(id);
			} catch (CouponSystemException e) {
				return new ResponseEntity<String>("getOneCompany service failed" + error,
						HttpStatus.INTERNAL_SERVER_ERROR);
			}
			return new ResponseEntity<Company>(comp, HttpStatus.OK);

		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

	@PostMapping("/addCustomer/{token}")
	public ResponseEntity<?> addCustomer(@RequestBody Customer customer, @PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());
			try {
				adminfacade.addCustomer(customer);
				return new ResponseEntity<Customer>(customer, HttpStatus.CREATED);
			} catch (CouponSystemException | CustomerAlreadyExistsException e) {
				return new ResponseEntity<String>("addCustomer service failed" + error,
						HttpStatus.INTERNAL_SERVER_ERROR);

			}
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);

	}

	@PutMapping("/updateCustomer/{token}")
	public ResponseEntity<?> updateCustomer(@RequestBody Customer customer, @PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());
			try {
				adminfacade.updateCustomer(customer);
				return new ResponseEntity<Customer>(customer, HttpStatus.OK);
			} catch (CouponSystemException e) {
				return new ResponseEntity<String>("updateCustomer" + error, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);

	}

	@PostMapping("/deleteCustomer/{token}")
	public ResponseEntity<?> deleteCustomer(@RequestBody Customer customer, @PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());
			try {
				adminfacade.deleteCustomer(customer);
				System.out.println("500");
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			} catch (CouponSystemException | CustomerDoesNotExistExcpetion e) {
				return new ResponseEntity<String>("deleteCustomer service failed" + error,
						HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

	@GetMapping("/getAllCus/{token}")
	public ResponseEntity<?> getAllCustomers(@PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());
			try {
				return new ResponseEntity<List<Customer>>(adminfacade.getAllCustomers(), HttpStatus.OK);
			} catch (CouponSystemException e) {
				return new ResponseEntity<String>("getAllCustomers service failed" + error,
						HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

	@GetMapping(path = "/getOneCustomer/{token}/{id}")
	public ResponseEntity<?> getOneCustomer(@PathVariable("id") int id, @PathVariable("token") String token) {
		Session s = isActive(token);
		if (s != null) {
			s.setLastAcssesed(System.currentTimeMillis());
			try {
				Customer cust = adminfacade.getOneCustomer(id);
				return new ResponseEntity<Customer>(adminfacade.getOneCustomer(id), HttpStatus.OK);
			} catch (CouponSystemException e) {
				return new ResponseEntity<String>("getOneCustomers" + error, HttpStatus.INTERNAL_SERVER_ERROR);
			}

		}
		return new ResponseEntity<String>("session timeout", HttpStatus.UNAUTHORIZED);
	}

}
