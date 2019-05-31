package Coupon.System.daodb;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import Coupon.System.Database.ConnectionPool;
import Coupon.System.beans.Customer;
import Coupon.System.dao.CustomerDAO;
import Coupon.System.exceptions.CouponSystemException;

public class CustomerDBDAO implements CustomerDAO {

	/**
	 * a database related boolean that checks if customer exists by strings email
	 * and password
	 */
	@Override
	public boolean isCustomerExist(String email, String password) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from customers where email = ? OR password = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setString(1, email);
			pstmt.setString(2, password);
			ResultSet rs = pstmt.executeQuery();
			return rs.next();

		} catch (SQLException e) {
			throw new CouponSystemException("isCustomerExist failed", e);

		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	/**
	 * database related function that adds a customer to database by name email and
	 * password
	 */
	@Override
	public int addCustomer(Customer cust) throws CouponSystemException {

		// gets an instance of connection from connection pool

		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "insert into customers(first_name, last_name, email, password) values(?,?,?,?)";

		// when the insert statement generates numbers automaticly, we can get these
		// numbers if we ask. the way to ask is through giving the method a special int
		// value

		try (PreparedStatement pstmt = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);) {
			pstmt.setString(1, cust.getFirstName());
			pstmt.setString(2, cust.getLastName());
			pstmt.setString(3, cust.getEmail());
			pstmt.setString(4, cust.getPassword());
			pstmt.executeUpdate();

			// this function returns results set. this result set holds the auto generated
			// id we returned with the method generated keys

			ResultSet rs = pstmt.getGeneratedKeys();
			rs.next();
			int id = rs.getInt(1);
			return id;

		} catch (SQLException e) {
			throw new CouponSystemException("addCustomer has failed", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);

		}

	}

	/**
	 * database related boolean that deletes customer where the customer id matches
	 */
	@Override
	public boolean deleteCustomer(Customer cust) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "delete from customers where id = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setInt(1, cust.getId());
			int rowCount = pstmt.executeUpdate();
			if (rowCount == 0) {
				return false;
			} else {
				return true;
			}

		} catch (

		SQLException e) {
			throw new CouponSystemException(" deleteCustomer failed", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	/**
	 * database related function that allows us to update customer details where id
	 * matches
	 */
	@Override
	public void updateCustomer(Customer cust) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "update customers set first_name=?, last_name=?, email=?, password=? where id = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setString(1, cust.getFirstName());
			pstmt.setString(2, cust.getLastName());
			pstmt.setString(3, cust.getEmail());
			pstmt.setString(4, cust.getPassword());
			pstmt.setInt(5, cust.getId());
			int rowCount = pstmt.executeUpdate();
			if (rowCount == 0) {
				throw new CouponSystemException("updateCustomer failed- customer not found" + cust);

			}

		} catch (

		SQLException e) {
			throw new CouponSystemException(" updateCustomer failed", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	/**
	 * returns an array filled with all customers
	 */
	@Override
	public ArrayList<Customer> getAllCustomers() throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from customers";
		try (PreparedStatement pstmt = con.prepareStatement(sql)) {
			ResultSet rs = pstmt.executeQuery();
			ArrayList<Customer> cust = new ArrayList<>();
			while (rs.next()) {
				Customer c = new Customer();
				c.setId(rs.getInt("id"));
				c.setEmail(rs.getString("email"));
				c.setPassword(rs.getString("password"));
				c.setFirstName(rs.getString("first_name"));
				c.setLastName(rs.getString("last_name"));
				cust.add(c);
			}
			return cust;
		} catch (

		SQLException e) {
			throw new CouponSystemException(" getAllCompanies failed", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	/**
	 * returns specific customer by id
	 */
	@Override
	public Customer getCustomerbyId(int customerId) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from customers where id = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setInt(1, customerId);
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
				Customer c = new Customer();
				c.setId(rs.getInt("id"));
				c.setEmail(rs.getString("email"));
				c.setPassword(rs.getString("password"));
				c.setFirstName(rs.getString("first_name"));
				c.setLastName(rs.getString("last_name"));
				return c;
			} else {
				throw new CouponSystemException("getCustomerbyId failed - customer does not exist ");
			}
		} catch (

		SQLException e) {
			throw new CouponSystemException("getCustomerbyId failed ", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	/**
	 * returns specific customer by email and password
	 */
	@Override
	public Customer getCustomer(String email, String password) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from customers where email = ? AND password = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setString(1, email);
			pstmt.setString(2, password);
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
				Customer c = new Customer();
				c.setId(rs.getInt("id"));
				c.setEmail(email);
				c.setPassword(password);
				c.setFirstName(rs.getString("first_name"));
				c.setLastName(rs.getString("last_name"));
				return c;
			} else {
				throw new CouponSystemException("getCustomer failed - customer does not exist ");
			}
		} catch (

		SQLException e) {
			throw new CouponSystemException("getCustomer failed ", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

}
