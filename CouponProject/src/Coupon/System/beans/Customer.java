package Coupon.System.beans;

import java.util.ArrayList;

public class Customer {
	// ********************************************************************************************************************

	private int id;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	ArrayList<Coupon> customerarraylist = new ArrayList<Coupon>();

	// ********************************************************************************************************************

	public Customer(int id, String firstName, String lastName, String email, String password,
			ArrayList<Coupon> customerarraylist) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.customerarraylist = customerarraylist;

	}

	// ********************************************************************************************************************
	// emptyCTOR
	public Customer() {
		super();
	}
	// ********************************************************************************************************************

	public int getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	// ********************************************************************************************************************

	public ArrayList<Coupon> getCustomerarraylist() {
		return customerarraylist;
	}

	// ********************************************************************************************************************

	public void setId(int id) {
		this.id = id;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setCustomerarraylist(ArrayList<Coupon> customerarraylist) {
		this.customerarraylist = customerarraylist;
	}
	// ********************************************************************************************************************

	@Override
	public String toString() {
		return " Customer id :" + id + ", \nfirstName : " + firstName + ", \nlastName : " + lastName + ", \nemail : "
				+ email + ", \npassword : " + password + ", \ncustomerarraylist : " + customerarraylist + "]";
	}

}
