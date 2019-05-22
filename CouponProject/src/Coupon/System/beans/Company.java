package Coupon.System.beans;

import java.util.ArrayList;

public class Company {
	private int id;
	private String name;
	private String email;
	private String password;
	private ArrayList<Coupon> companyarraylist = new ArrayList<Coupon>();

	// ********************************************************************************************************************
	// empty CTOR
	public Company() {
	}

	// ********************************************************************************************************************

	public Company(int id, String name, String email, String password, ArrayList<Coupon> companyarraylist) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.companyarraylist = companyarraylist;

		// ********************************************************************************************************************

	}

	public void setId(int id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	// ********************************************************************************************************************

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public ArrayList<Coupon> getCompanyarraylist() {
		return companyarraylist;
	}

	// ********************************************************************************************************************

	@Override
	public String toString() {
		return "Company [id : " + id + ", \nname : " + name + ", \nemail : " + email + ", \npassword : " + password
				+ ", \ncompanyarraylist : " + companyarraylist + "]";
	}

}
