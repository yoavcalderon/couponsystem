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
	/**
	 * a database related function that adds a coupon
	 */
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
			pstmt.setInt(8, coupon.getCategory().ordinal() + 1);
			pstmt.setInt(9, coupon.getCompanyId());
			pstmt.executeUpdate();

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

	/**
	 * database related function that allows us to update the coupon where id
	 * matches
	 */
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

	/**
	 * database related boolean that deletes coupon where id matches
	 */
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

	/**
	 * a database related array that returns all coupons
	 */
	@Override
	public ArrayList<Coupon> getAllCoupouns() throws CouponSystemException {
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

	/**
	 * database related list that returns all company coupons where companyId
	 * matches
	 */
	@Override
	public ArrayList<Coupon> getAllCompanyCoupouns(int companyId) throws CouponSystemException {

		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from coupons join categories on coupons.category_id = categories.id where company_id=?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setInt(1, companyId);
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
				c.setCompanyId(companyId);
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

	/**
	 * database related function that brings back all coupons belonging to a
	 * specific customer by his id
	 */
	@Override
	public ArrayList<Coupon> getAllCustomerCoupouns(int customerId) throws CouponSystemException {

		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from coupons join customers_vs_coupons on coupons.id = customers_vs_coupons.coupon_id where customer_id=?";
		// get all coupon ids from id list
		// String sql2 = "select * from coupons where id=?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);
		// PreparedStatement pstmt2 = con.prepareStatement(sql2);
		) {
			pstmt.setInt(1, customerId);
			ResultSet rs = pstmt.executeQuery();
			ArrayList<Coupon> coupons = new ArrayList<>();
			while (rs.next()) {
				Coupon c = new Coupon();
				c.setCategory(Category.values()[rs.getInt("CATEGORY_ID") - 1]);
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
			System.out.println(coupons);

			return coupons;
		} catch (

		SQLException e) {
			throw new CouponSystemException(" getAllCoupons of specific company failed", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	/**
	 * database related function that returns coupon where id matches
	 */
	@Override
	public Coupon getOneCoupon(int coupounID) throws CouponSystemException {
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

	/**
	 * a database related function that allows the customer to purchase a coupon
	 */
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

	/**
	 * a database related function that allows to delete purchase coupons
	 */
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

	/**
	 * database related function that gets all expired coupon ids
	 */
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

	/**
	 * database related boolean that checks if coupon exists by title
	 */
	@Override
	public boolean couponCheck(int companyId, String title) throws CouponSystemException {
		ArrayList<Coupon> couponarray = new ArrayList<>();
		couponarray = getAllCompanyCoupouns(companyId);

		for (Coupon coupon : couponarray) {
			if (coupon.getTitle().equals(title)) {
				throw new CouponSystemException(" cannot add title of coupon exists");
			}

		}
		return true;
	}

	/**
	 * a database related function that allows to delete purchase coupon
	 */
	@Override
	public boolean deleteCouponPurchase(int customerID, int couponID) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = " delete from customers_vs_coupons where coupon_id=? AND where customer_id= ?) ";
		try {
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setInt(2, couponID);
			pstmt.setInt(1, customerID);
			int rowCount = pstmt.executeUpdate();
			if (rowCount == 0) {
				return false;

			} else {
				return true;
			}

		} catch (SQLException e) {
			throw new CouponSystemException("method addCouponPurchase has failed", e);

		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

}
