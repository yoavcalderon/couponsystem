package Coupon.System.dao;

import java.util.ArrayList;

import Coupon.System.beans.Customer;
import Coupon.System.exceptions.CouponSystemException;

public interface CustomerDAO {

	boolean isCustomerExist(String email, String password) throws CouponSystemException;

	int addCustomer(Customer customer) throws CouponSystemException;

	boolean deleteCustomer(Customer customer) throws CouponSystemException;

	void updateCustomer(Customer customer) throws CouponSystemException;

	ArrayList<Customer> getAllCustomers() throws CouponSystemException;

	Customer getCustomerbyId(int id) throws CouponSystemException;

	Customer getCustomer(String email, String password) throws CouponSystemException;

}
