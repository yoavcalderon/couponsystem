package Temp1;

import Coupon.System.beans.Coupon;
import Coupon.System.daodb.CouponDBDAO;
import Coupon.System.exceptions.CouponSystemException;

public class Test1 {
	public static void main(String[] args) {
		// ********************************************************************************************************************
//		try {
//			Company c = new Company(0, "test company1", "cmopany email", "a", null);
//			CompaniesDBDAO dao = new CompaniesDBDAO();
//			int id = dao.addCompany(c);
//			System.out.println("added company to table: " + id);
//		} catch (CouponSystemException e) {
//			e.printStackTrace();
//		} finally {
//			try {
//				ConnectionPool.getInstance().closeAllConnections();
//			} catch (CouponSystemException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();

		// ********************************************************************************************************************

		CouponDBDAO coupondb = new CouponDBDAO();
		Coupon c5 = new Coupon();
		c5.setTitle("coupon title");
		c5.setDescription("resturant coupon");
		c5.setStartDate(null);
		c5.setEndDate(null);
		c5.setAmount(1);
		c5.setPrice(1.1);
		c5.setImage("image");
		try {
			coupondb.addCoupon(c5);
		} catch (CouponSystemException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		System.out.println("coupon added success");
	}

}
