package com.projectstage3.Coupon.System.beans;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "coupons")
//fields
public class Coupon {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinColumn(name = "companyId")
	private Company company;
	@Enumerated(EnumType.STRING)
	private Category category;
	private String title;
	private String description;
	private Date startDate;
	private Date endDate;
	private int amount;
	private double price;
	private String image;

	public static class CouponJSON {
		private int id;
		private Category category;
		private String title;
		private String description;
		private Date startDate;
		private Date endDate;
		private int amount;
		private double price;
		private String image;

		public CouponJSON(Coupon coupon) {
			this.id = coupon.id;
			this.category = coupon.category;
			this.title = coupon.title;
			this.description = coupon.description;
			this.startDate = coupon.startDate;
			this.endDate = coupon.endDate;
			this.price = coupon.price;
			this.image = coupon.image;
		}
	}

//CTOR
	public Coupon(Company company, Category category, String title, String description, Date startDate, Date endDate,
			int amount, double price, String image) {
		this.company = company;
		this.category = category;
		this.title = title;
		this.description = description;
		this.startDate = startDate;
		this.endDate = endDate;
		this.amount = amount;
		this.price = price;
		this.image = image;
	}

//empty CTOR
	public Coupon() {
	}

//getters setters

	public void setCompany(Company company) {
		this.company = company;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getId() {
		return id;
	}

	public Company getCompany() {
		return company;
	}

	public Category getCategory() {
		return category;
	}

	public String getTitle() {
		return title;
	}

	public String getDescription() {
		return description;
	}

	public Date getStartDate() {
		return startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public int getAmount() {
		return amount;
	}

	public double getPrice() {
		return price;
	}

	public String getImage() {
		return image;
	}

//to string

	@Override
	public boolean equals(Object obj) {
		if (obj instanceof Coupon) {
			return this.id == ((Coupon) obj).getId();
		} else
			return false;
	}

	@Override
	public String toString() {
		return "Coupon [id=" + id + ", category=" + category + ", title=" + title + ", description=" + description
				+ ", startDate=" + startDate + ", endDate=" + endDate + ", amount=" + amount + ", price=" + price + "]";
	}

}
