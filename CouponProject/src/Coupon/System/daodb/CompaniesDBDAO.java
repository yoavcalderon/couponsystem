package Coupon.System.daodb;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import Coupon.System.Database.ConnectionPool;
import Coupon.System.beans.Company;
import Coupon.System.dao.CompaniesDAO;
import Coupon.System.exceptions.CouponSystemException;

public class CompaniesDBDAO implements CompaniesDAO {

	// ********************************************************************************************************************

	@Override
	public boolean isCompanyExists(String email, String password) throws CouponSystemException {
		/**
		 * gets an instance of connection from connection pool
		 */
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from companies where email = ? || password = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setString(1, email);
			pstmt.setString(1, password);
			ResultSet rs = pstmt.executeQuery();
			/**
			 * if the new current row is valid Returns true, false if there are no more
			 * rows.
			 */
			return rs.next();
		} catch (

		SQLException e) {
			throw new CouponSystemException("isCompanyExist failed ", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	// ********************************************************************************************************************

	@Override
	public int addCompany(Company company) throws CouponSystemException {
		/**
		 * gets an instance of connection from connection pool
		 */
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "insert into companies(name, email, password) values(?,?,?)";

		/**
		 * when the insert statement generates numbers automaticly, we can get these
		 * numbers if we ask. the way to ask is through giving the method a special int
		 * value
		 */
		try (PreparedStatement pstmt = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);) {
			pstmt.setString(1, company.getName());
			pstmt.setString(2, company.getEmail());
			pstmt.setString(3, company.getPassword());
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
			throw new CouponSystemException("addCompany has failed", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);

		}

	}

	// ********************************************************************************************************************

	@Override
	public void updateCompany(Company company) throws CouponSystemException {

		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "update companies set name=?, email=?, password=? where id = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setString(1, company.getName());
			pstmt.setString(2, company.getEmail());
			pstmt.setString(3, company.getPassword());
			int rowCount = pstmt.executeUpdate();
			if (rowCount == 0) {
				throw new CouponSystemException(" update company failed - company not found" + company);

			}

		} catch (SQLException e) {
			throw new CouponSystemException(" updateCompany failed", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	// ********************************************************************************************************************

	@Override
	public boolean deleteCompany(int companyID) throws CouponSystemException {
		/**
		 * gets an instance of connection from connection pool
		 */
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "delete from companies where id = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setInt(1, companyID);
			int rowCount = pstmt.executeUpdate();
			if (rowCount == 0) {
				return false;
			} else {
				return true;
			}

		} catch (

		SQLException e) {
			throw new CouponSystemException(" deleteCompany failed", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	// ********************************************************************************************************************

	@Override
	public ArrayList<Company> getAllCompanies() throws CouponSystemException {
		/**
		 * gets an instance of connection from connection pool
		 */
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from companies";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			ResultSet rs = pstmt.executeQuery();
			ArrayList<Company> companies = new ArrayList<>();
			while (rs.next()) {
				Company c = new Company();
				c.setId(rs.getInt("id"));
				c.setEmail(rs.getString("email"));
				c.setPassword(rs.getString("password"));
				c.setName(rs.getString("name"));
				companies.add(c);
			}
			return companies;
		} catch (

		SQLException e) {
			throw new CouponSystemException(" getAllCompanies failed", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	// ********************************************************************************************************************

	@Override
	public Company getOneCompany(int CompanyID) throws CouponSystemException {
		/**
		 * gets an instance of connection from connection pool
		 */
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from companies where id = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setInt(1, CompanyID);
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
				Company c = new Company();
				c.setId(CompanyID);
				c.setEmail(rs.getString("email"));
				c.setPassword(rs.getString("password"));
				c.setName(rs.getString("name"));
				return c;

			} else {
				throw new CouponSystemException("getOneCompany failed - company does not exist ");
			}
		} catch (

		SQLException e) {
			throw new CouponSystemException("getOneCompany failed ", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

}
