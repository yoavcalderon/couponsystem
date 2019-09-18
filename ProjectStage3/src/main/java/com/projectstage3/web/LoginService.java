package com.projectstage3.web;

import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.projectstage3.Coupon.System.Facade.Facade;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;
import com.projectstage3.Coupon.System.exceptions.NameOrPasswordNotFoundException;
import com.projectstage3.Coupon.System.login.ClientType;
import com.projectstage3.Coupon.System.login.LoginManager;

@RestController
@CrossOrigin
public class LoginService {
	@Autowired
	private Map<String, Session> tokensMap;
	@Autowired
	private LoginManager manager;

	@PostMapping("login")
	public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password,
			@RequestParam String type) {
		if (!type.equals("ADMINISTRATOR") && !type.equals("COMPANY") && !type.equals("CUSTOMER")) {

			return new ResponseEntity<String>("Wrong type", HttpStatus.UNAUTHORIZED);
		}
		Session session = new Session();
		ClientType client = null;
		String token = UUID.randomUUID().toString();
		long lastAcssesed = System.currentTimeMillis();
		Facade f = null;
		try {
			f = manager.login(email, password, ClientType.valueOf(type));
			System.out.println(f);
			session.setFacade(f);
			session.setLastAcssesed(System.currentTimeMillis());
			tokensMap.put(token, session);
			return new ResponseEntity<String>("{\"token\":\"" + token + "\"}", HttpStatus.OK);
		} catch (CouponSystemException | NameOrPasswordNotFoundException e) {
			return new ResponseEntity<String>("login has failed", HttpStatus.UNAUTHORIZED);
		}

	}

	@PostMapping(path = "logout/{token}")
	public ResponseEntity<String> logout(@PathVariable("token") String token) {
		tokensMap.remove(token);
		return new ResponseEntity<String>("logged out", HttpStatus.OK);
	}
}
