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
	/**
	 * a database related boolean that checks if a company exists by mail and
	 * password
	 */
	@Override
	public boolean isCompanyExists(String email, String password) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from companies where email = ? OR password = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setString(1, email);
			pstmt.setString(2, password);
			ResultSet rs = pstmt.executeQuery();

			return rs.next();
		} catch (

		SQLException e) {
			throw new CouponSystemException("isCompanyExist failed ", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}

	/**
	 * a database related function that adds a company
	 */
	@Override
	public int addCompany(Company company) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "insert into companies(name, email, password) values(?,?,?)";
		try (PreparedStatement pstmt = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);) {
			pstmt.setString(1, company.getName());
			pstmt.setString(2, company.getEmail());
			pstmt.setString(3, company.getPassword());
			pstmt.executeUpdate();
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

	/**
	 * a database related function that updates an existing company per the
	 * specified idD
	 */
	@Override
	public void updateCompany(Company company) throws CouponSystemException {

		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "update companies set name=?, email=?, password=? where id = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setString(1, company.getName());
			pstmt.setString(2, company.getEmail());
			pstmt.setString(3, company.getPassword());
			pstmt.setInt(4, company.getId());
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

	/**
	 * a database related boolean that deletes an existing company per the specified
	 * company id
	 */
	@Override
	public boolean deleteCompany(int companyID) throws CouponSystemException {
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

	/**
	 * returns an array of all companies
	 */
	@Override
	public ArrayList<Company> getAllCompanies() throws CouponSystemException {
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

	/**
	 * returns a specific company by specified id
	 */
	@Override
	public Company getOneCompany(int CompanyID) throws CouponSystemException {
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

	/**
	 * returns a specific company by its email and password
	 */
	@Override
	public Company getOneCompany(String email, String password) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from companies where email AND password = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setString(1, email);
			pstmt.setString(2, password);
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
				Company c = new Company();
				c.setId(rs.getInt("id"));
				c.setEmail(rs.getString(email));
				c.setPassword(rs.getString(password));
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

	/**
	 * returns a specific company id by email and password
	 */
	@Override
	public int getCompanyId(String email, String password) throws CouponSystemException {

		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select id from companies where email = ? AND password = ?";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setString(1, email);
			pstmt.setString(2, password);
			ResultSet rs = pstmt.executeQuery();
			rs.next();
			int id = rs.getInt(1);
			return id;
		} catch (

		SQLException e) {
			throw new CouponSystemException("isCompanyExist failed ", e);
		} finally {
			ConnectionPool.getInstance().restoreConnection(con);
		}
	}
}
