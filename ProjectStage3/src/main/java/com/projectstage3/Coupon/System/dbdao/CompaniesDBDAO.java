package com.projectstage3.Coupon.System.dbdao;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.projectstage3.Coupon.System.beans.Company;
import com.projectstage3.Coupon.System.dao.CompaniesRepository;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;

@Component
public class CompaniesDBDAO {
	@Autowired
	private CompaniesRepository repocomp;

//a database related function  validates company existence by email and password
	public boolean isCompanyExists(String email, String password) throws CouponSystemException {
		return repocomp.existsByEmailAndPassword(email, password);

	}

//a database related function  adds specified company
	public void addCompany(Company company) {
		repocomp.save(company);
	}

//a database related function  updates company after validating company existance
	public void updateCompany(Company company) {
		if (repocomp.existsById(company.getId())) {
			repocomp.save(company);

		}

	}

// deletes a company
	public void deleteCompany(int companyID) {
		repocomp.deleteById(companyID);

	}

//returns all companies
	public ArrayList<Company> getAllCompanies() {
		return (ArrayList<Company>) repocomp.findAll();

	}

// returns a company by its id
	public Company getOneCompany(int companyId) throws CouponSystemException {
		Optional<Company> opt = repocomp.findById(companyId);
		if (opt.isPresent()) {
			return opt.get();
		}
		return null;

	}

// returns a company by its email and password
	public Company getOneCompany(String email, String password) throws CouponSystemException {
		return repocomp.getByEmailAndPassword(email, password);

	}

// returns a company by its name and password
	public Company getOneCompanyLogin(String name, String password) throws CouponSystemException {
		return repocomp.findByNameAndPassword(name, password);

	}

	// a database related function that extracts a customer id by use of email and
	// password
	public int idExtractor(String email, String password) throws CouponSystemException {
		return repocomp.findByEmailAndPassword(email, password).getId();
	}

// returns id of a specified company by its email and password
	public int getCompanyId(String email, String password) throws CouponSystemException {
		return repocomp.findByEmailAndPassword(email, password).getId();

	}

}
