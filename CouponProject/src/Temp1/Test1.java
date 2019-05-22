package Temp1;

import Coupon.System.Database.ConnectionPool;
import Coupon.System.beans.Company;
import Coupon.System.daodb.CompaniesDBDAO;
import Coupon.System.exceptions.CouponSystemException;

public class Test1 {
	public static void main(String[] args) {
		// ********************************************************************************************************************
		try {
			Company c = new Company(0, "test company1", "cmopany email", "a", null);
			CompaniesDBDAO dao = new CompaniesDBDAO();
			int id = dao.addCompany(c);
			System.out.println("added company to table: " + id);
		} catch (CouponSystemException e) {
			e.printStackTrace();
		} finally {
			try {
				ConnectionPool.getInstance().closeAllConnections();
			} catch (CouponSystemException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();

				// ********************************************************************************************************************

			}
		}

	}

}
