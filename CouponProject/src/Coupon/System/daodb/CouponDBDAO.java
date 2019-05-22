package Coupon.System.daodb;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import Coupon.System.Database.ConnectionPool;
import Coupon.System.beans.Category;
import Coupon.System.beans.Coupon;
import Coupon.System.dao.CouponDAO;
import Coupon.System.exceptions.CouponSystemException;

public class CouponDBDAO implements CouponDAO {
	// ********************************************************************************************************************

	@Override
	public int addCoupon(Coupon coupon) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "insert into coupons(title, description, start_date, end_date, amount, price, image) values (?,?,?,?,?,?,?)";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setString(1, coupon.getTitle());
			pstmt.setString(2, coupon.getDescription());
			pstmt.setDate(3, coupon.getStartDate());
			pstmt.setDate(4, coupon.getEndDate());
			pstmt.setInt(5, coupon.getAmount());
			pstmt.setDouble(6, coupon.getPrice());
			pstmt.setString(7, coupon.getImage());
			pstmt.executeUpdate();

			/**
			 * this function returns results set. this result set holds the auto generated
			 * id we returned with the method generated keys
			 */
			ResultSet rs = pstmt.getGeneratedKeys();
			rs.next();
			int id = rs.getInt(1);
			return id;

		} catch (SQLException e) {
			throw new CouponSystemException("method addCoupon has failed, the coupon was not added", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);

		}
	}
	// ********************************************************************************************************************

	@Override
	public void updateCoupon(Coupon coupon) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "update coupon set company ID= ?, title = ?, description = ?, start_date = ?, end_date = ?, amount = ?, price = ?, image = ? where id = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {

			pstmt.setString(2, coupon.getTitle());
			pstmt.setString(3, coupon.getDescription());
			pstmt.setDate(4, coupon.getStartDate());
			pstmt.setDate(5, coupon.getEndDate());
			pstmt.setInt(6, coupon.getAmount());
			pstmt.setDouble(7, coupon.getPrice());
			pstmt.setString(8, coupon.getImage());
			pstmt.executeUpdate();

		} catch (SQLException e) {
			throw new CouponSystemException("updateCoupon function failed", e);

		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}

	}

	// ********************************************************************************************************************

	@Override
	public boolean deleteCoupon(int couponID) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "delete from coupon where id = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {

			pstmt.setInt(1, couponID);
			int rowCount = pstmt.executeUpdate();
			if (rowCount == 0) {
				return false;

			} else {
				return true;
			}

		} catch (SQLException e) {
			throw new CouponSystemException("deleteCoupon function failed", e);

		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}

	}

	// ********************************************************************************************************************

	@Override
	public ArrayList<Coupon> getAllCoupouns() throws CouponSystemException {
		/**
		 * gets an instance of connection from connection pool
		 */
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from coupons";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			ResultSet rs = pstmt.executeQuery();
			ArrayList<Coupon> coupons = new ArrayList<>();
			while (rs.next()) {
				Coupon c = new Coupon();
				c.setCategory(Category.valueOf(rs.getString("Category")));
				c.setTitle(rs.getString("title"));
				c.setDescription(rs.getString("description"));
				c.setStartDate(rs.getDate("start_date"));
				c.setEndDate(rs.getDate("end_date"));
				c.setAmount(rs.getInt("amount"));
				c.setPrice(rs.getDouble("price"));
				c.setImage(rs.getString("image"));
				coupons.add(c);
			}
			return coupons;
		} catch (

		SQLException e) {
			throw new CouponSystemException(" getAllCoupons failed", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	// ********************************************************************************************************************

	@Override
	public ArrayList<Coupon> getAllCoupouns(int companyID) throws CouponSystemException {
		/**
		 * gets an instance of connection from connection pool
		 */
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from coupons where company_id=?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setInt(1, companyID);
			ResultSet rs = pstmt.executeQuery();
			ArrayList<Coupon> coupons = new ArrayList<>();
			while (rs.next()) {
				Coupon c = new Coupon();
				c.setCategory(Category.valueOf(rs.getString("Category")));
				c.setTitle(rs.getString("title"));
				c.setDescription(rs.getString("description"));
				c.setStartDate(rs.getDate("start_date"));
				c.setEndDate(rs.getDate("end_date"));
				c.setAmount(rs.getInt("amount"));
				c.setPrice(rs.getDouble("price"));
				c.setImage(rs.getString("image"));
				coupons.add(c);
			}
			return coupons;
		} catch (

		SQLException e) {
			throw new CouponSystemException(" getAllCoupons of specific company failed", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}
	// ********************************************************************************************************************

	@Override
	public Coupon getOneCoupon(int coupounID) throws CouponSystemException {
		/**
		 * gets an instance of connection from connection pool
		 */
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from coupons where id = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setInt(1, coupounID);
			ResultSet rs = pstmt.executeQuery();
			rs.next();
			if (rs.next()) {
				Coupon c = new Coupon();
				c.setId(rs.getInt("id"));
				c.setCompanyId(rs.getInt("company_id"));
				c.setCategory(Category.valueOf(rs.getString("category_id")));
				c.setTitle(rs.getString("title"));
				c.setDescription(rs.getString("description"));
				c.setStartDate(rs.getDate("start_date"));
				c.setEndDate(rs.getDate("end_date"));
				c.setAmount(rs.getInt("amount"));
				c.setPrice(rs.getDouble("price"));
				c.setImage(rs.getString("image"));
				return c;
			} else {
				throw new CouponSystemException("getOneCoupon failed - Coupon does not exist ");
			}
		} catch (

		SQLException e) {
			throw new CouponSystemException("getOneCoupon failed ", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	// ********************************************************************************************************************

	@Override
	public void addCouponPurchase(int customerID, int couponID) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = " insert into COUPONS_VS_CUSTOMERS values (?,?) ";
		try {
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, customerID);
			pstmt.setInt(2, couponID);
			pstmt.executeUpdate();

		} catch (SQLException e) {
			throw new CouponSystemException("method addCouponPurchase has failed", e);

		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	// ********************************************************************************************************************

	@Override
	public void deleteCouponPurchase(int customerID, int couponID) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = " delete from COUPONS_VS_CUSTOMERS where customer_id = ? AND coupon_id = ?";
		try {
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, customerID);
			pstmt.setInt(2, couponID);
			pstmt.executeUpdate();

		} catch (SQLException e) {
			throw new CouponSystemException("method deleteCouponPurchase has failed", e);

		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}
	// ********************************************************************************************************************

	@Override
	public void deleteCouponPurchase(int couponID) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = " delete from COUPONS_VS_CUSTOMERS where coupon_id = ?";
		try {
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, couponID);
			pstmt.executeUpdate();

		} catch (SQLException e) {
			throw new CouponSystemException("method deleteCouponPurchase has failed", e);

		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

}
