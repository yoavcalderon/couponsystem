package Coupon.System.daodb;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import Coupon.System.Database.ConnectionPool;
import Coupon.System.beans.Category;
import Coupon.System.beans.Coupon;
import Coupon.System.dao.CouponDAO;
import Coupon.System.exceptions.CouponSystemException;

public class CouponDBDAO implements CouponDAO {

	@Override
	public int addCoupon(Coupon coupon) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "insert into coupons( title, description, start_date, end_date, amount, price, image, category_id, company_id) values (?, ?, ?,?,?,?,?,?,?)";
		try (PreparedStatement pstmt = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);) {
			pstmt.setString(1, coupon.getTitle());
			pstmt.setString(2, coupon.getDescription());
			pstmt.setDate(3, coupon.getStartDate());
			pstmt.setDate(4, coupon.getEndDate());
			pstmt.setInt(5, coupon.getAmount());
			pstmt.setDouble(6, coupon.getPrice());
			pstmt.setString(7, coupon.getImage());
			// ordinal returns index of int in array as what it is, food = 0, second value
			// in enum= 1 etc.
			pstmt.setInt(8, coupon.getCategory().ordinal() + 1);
			pstmt.setInt(9, coupon.getCompanyId());
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

	@Override
	public void updateCoupon(Coupon coupon) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "update coupons set title = ?, description = ?, start_date = ?, end_date = ?, amount = ?, price = ?, image = ? where id = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {

			pstmt.setString(1, coupon.getTitle());
			pstmt.setString(2, coupon.getDescription());
			pstmt.setDate(3, coupon.getStartDate());
			pstmt.setDate(4, coupon.getEndDate());
			pstmt.setInt(5, coupon.getAmount());
			pstmt.setDouble(6, coupon.getPrice());
			pstmt.setString(7, coupon.getImage());
			pstmt.setInt(8, coupon.getId());
			pstmt.executeUpdate();

		} catch (SQLException e) {
			throw new CouponSystemException("updateCoupon function failed", e);

		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}

	}

	@Override
	public boolean deleteCoupon(int couponID) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "delete from coupons where id = ?";
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
				c.setCompanyId(rs.getInt("company_id"));
				c.setId(rs.getInt("id"));
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

	@Override
	public ArrayList<Coupon> getAllCoupouns(int companyID) throws CouponSystemException {
		/**
		 * gets an instance of connection from connection pool
		 */
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from coupons join categories on coupons.category_id = categories.id where company_id=?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setInt(1, companyID);
			ResultSet rs = pstmt.executeQuery();
			ArrayList<Coupon> coupons = new ArrayList<>();
			while (rs.next()) {
				Coupon c = new Coupon();
				c.setCategory(Category.valueOf(rs.getString("name")));
				c.setTitle(rs.getString("title"));
				c.setDescription(rs.getString("description"));
				c.setStartDate(rs.getDate("start_date"));
				c.setEndDate(rs.getDate("end_date"));
				c.setAmount(rs.getInt("amount"));
				c.setPrice(rs.getDouble("price"));
				c.setImage(rs.getString("image"));
				c.setCompanyId(companyID);
				c.setId(rs.getInt("id"));
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

	@Override
	public void addCouponPurchase(int customerID, int couponID) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = " insert into customers_vs_coupons (customer_id, coupon_id) values (?,?) ";
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

	@Override
	public void deleteCouponPurchase(Integer... couponIDs) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = " delete from customers_vs_coupons where coupon_id = ?";
		try {
			PreparedStatement pstmt = con.prepareStatement(sql);
			for (int currId : couponIDs) {
				pstmt.setInt(1, currId);
				pstmt.executeUpdate();

			}

		} catch (SQLException e) {
			throw new CouponSystemException("method deleteCouponPurchase has failed", e);

		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	@Override
	public Integer[] getExpiredCouponsIds() throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select id from coupons where end_date < ?";
		try {
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setDate(1, new Date(System.currentTimeMillis()));
			ResultSet rs = pstmt.executeQuery();
			ArrayList<Integer> list = new ArrayList<>();
			while (rs.next()) {
				list.add(rs.getInt(1));
			}
			Integer[] arr = list.toArray(new Integer[0]);
			return arr;
		} catch (SQLException e) {
			throw new CouponSystemException("getExpiredCouponsIds failed ", e);
		}
	}

	@Override
	public boolean couponCheck(int companyId, String title) throws CouponSystemException {
		ArrayList<Coupon> couponarray = new ArrayList<>();
		couponarray = getAllCoupouns(companyId);

		for (Coupon coupon : couponarray) {
			if (coupon.getTitle().equals(title)) {
				throw new CouponSystemException(" cannot add title of coupon exists");
			}

		}
		return true;
	}

}
