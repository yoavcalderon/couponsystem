package com.projectstage3.Coupon.System.Facade;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projectstage3.Coupon.System.beans.Category;
import com.projectstage3.Coupon.System.beans.Company;
import com.projectstage3.Coupon.System.beans.Coupon;
import com.projectstage3.Coupon.System.dbdao.CompaniesDBDAO;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;
import com.projectstage3.Coupon.System.exceptions.NameOrPasswordNotFoundException;
import com.projectstage3.Coupon.System.exceptions.companyexceptions.CouponAlreadyExistsException;
import com.projectstage3.Coupon.System.exceptions.companyexceptions.CouponNotFoundException;

@Service
public class CompanyFacade extends ClientFacade {

	@Autowired
	protected CompaniesDBDAO companiesDAO;

//	private int companyId;
	private Company company;

	public CompanyFacade() {
	}

	/**
	 * check the login credentials, if email and password fit or are true set the
	 * company id for this facade and returns true otherwise returns false
	 * 
	 * @throws CouponSystemException
	 */
	@Override

	public boolean login(String email, String password) throws CouponSystemException, NameOrPasswordNotFoundException {
		this.company = companiesDAO.getOneCompany(email, password);
		if (company == null)
			throw new NameOrPasswordNotFoundException();

		return true;

	}

	/**
	 * adds a coupon after checking it per specified title
	 * 
	 * @param coupon
	 * @throws CouponSystemException
	 * @throws CouponAlreadyExistsException
	 */
	public void addCoupon(Coupon coupon) throws CouponSystemException, CouponAlreadyExistsException {

		coupon.setCompany(this.company);
		System.out.println(company);
		if (couponDAO.couponCheck(coupon.getId(), coupon.getTitle())) {
			throw new CouponAlreadyExistsException("addCoupon failed coupon exists");

		} else {
			System.out.println(this.company);
			coupon.setCompany(this.company);

			couponDAO.addCoupon(coupon);
			;
		}

	}

	/**
	 * updates coupon parameters and information
	 * 
	 * @param coupon
	 * @return
	 * @throws CouponSystemException
	 * @throws CouponNotFoundException
	 */
	public void updateCoupon(Coupon coupon) throws CouponSystemException, CouponNotFoundException {
		Coupon couponFromDb = couponDAO.getOneCoupon(coupon.getId());
		if (couponFromDb != null) {
			couponFromDb.setAmount(coupon.getAmount());
			couponFromDb.setCategory(coupon.getCategory());
			couponFromDb.setDescription(coupon.getDescription());
			couponFromDb.setStartDate(coupon.getStartDate());
			couponFromDb.setEndDate(coupon.getEndDate());
			couponFromDb.setImage(coupon.getImage());
			couponFromDb.setPrice(coupon.getPrice());
			couponFromDb.setTitle(coupon.getTitle());
			couponDAO.updateCoupon(couponFromDb);
		} else {
			throw new CouponNotFoundException("updateCoupon failed coupon not found");
		}
	}

	/**
	 * deletes a coupon- coupon will no longer exist even if it was previously
	 * purchased
	 * 
	 * @param couponId
	 * @throws CouponSystemException
	 */
	public void deleteCoupon(int couponId) throws CouponSystemException {

		couponDAO.deleteCoupon(couponId);

	}

	/**
	 * returns all company coupons
	 * 
	 * @return
	 * @throws CouponSystemException
	 */
	public List<Coupon> getAllCoupons() throws CouponSystemException {

		return couponDAO.getAllCompanyCoupouns(company.getId());

	}

	/**
	 * returns all company coupons belonging to a specific category
	 * 
	 * @param category
	 * @return
	 * @throws CouponSystemException
	 * @throws CouponNotFoundException
	 */
	public ArrayList<Coupon> getCouponByCategory(Category category)
			throws CouponSystemException, CouponNotFoundException {
		ArrayList<Coupon> count = new ArrayList<Coupon>();
		List<Coupon> coupons = couponDAO.getAllCompanyCoupouns(company.getId());
		for (Coupon coupon : coupons) {
			if (coupon.getCategory().equals(category)) {
				count.add(coupon);
			}
		}
		if (count.size() == 0)
			throw new CouponNotFoundException("getCouponByCategory failed- no coupons of this category found");

		return count;

	}

	/**
	 * returns all the company coupons by their price
	 * 
	 * @param maxPrice
	 * @return
	 * @throws CouponSystemException
	 * @throws CouponNotFoundException
	 */
	public ArrayList<Coupon> getCompanyCoupons(double maxPrice) throws CouponSystemException, CouponNotFoundException {
		ArrayList<Coupon> count = new ArrayList<Coupon>();
		List<Coupon> coupons = couponDAO.getAllCompanyCoupouns(company.getId());
		for (Coupon coupon : coupons) {
			if (coupon.getPrice() < maxPrice) {
				count.add(coupon);

			} else {
				throw new CouponNotFoundException(
						"getCompanyCoupons failed no coupons this price specification were found");
			}

		}
		return count;

	}

	/**
	 * returns all company details by company id
	 * 
	 * @return
	 * @throws CouponSystemException
	 */
	public Company getCompanyDetails() throws CouponSystemException {
		return companiesDAO.getOneCompany(company.getId());

	}

}
