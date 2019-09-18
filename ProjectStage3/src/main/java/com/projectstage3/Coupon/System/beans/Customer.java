package com.projectstage3.Coupon.System.beans;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "customers")
public class Customer {
	// fields
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String firstName;
	private String lastName;
	private String email;
	private String password;

	@ManyToMany(cascade = { CascadeType.MERGE, CascadeType.REMOVE }, fetch = FetchType.EAGER)
	@JoinTable(name = "customers_vs_coupons", joinColumns = @JoinColumn(name = "id"))
	@JsonIgnore
	public List<Coupon> customerarraylist = new ArrayList<Coupon>();

	// CTOR
	public Customer(String firstName, String lastName, String email, String password) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;

	}

	// emptyCTOR
	public Customer() {
		super();
	}

	// getters setters
	public int getId() {
		return id;
	}

	public void setId(int id) {

		this.id = id;

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

	public List<Coupon> getCustomerarraylist() {
		return customerarraylist;
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

//to string
	@Override
	public String toString() {
		return " Customer id :" + id + ", \nfirstName : " + firstName + ", \nlastName : " + lastName + ", \nemail : "
				+ email + ", \npassword : " + password + "";
	}

}
