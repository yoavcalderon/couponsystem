package Coupon.System.beans;

import java.sql.Date;

public class Coupon {
	private int id;
	private int companyId;
	private Category category;
	private String title;
	private String description;
	private Date startDate;
	private Date endDate;
	private int amount;
	private double price;
	private String image;

	// ********************************************************************************************************************

	public Coupon(int id, int companyId, Category category, String title, String description, Date startDate,
			Date endDate, int amount, double price, String image) {
		this.id = id;
		this.companyId = companyId;
		this.category = category;
		this.title = title;
		this.description = description;
		this.startDate = startDate;
		this.endDate = endDate;
		this.amount = amount;
		this.price = price;
		this.image = image;
	}

	// ********************************************************************************************************************
//empty CTOR
	public Coupon() {
		// ********************************************************************************************************************
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setCompanyId(int companyId) {
		this.companyId = companyId;
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

	public int getCompanyId() {
		return companyId;
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

	// ********************************************************************************************************************

	@Override
	public String toString() {
		return "Coupon [id : " + id + ",\n companyId : " + companyId + ",\n category : " + category + ",\n title : "
				+ title + ", \ndescription : " + description + ", \nstartDate : " + startDate + ", \nendDate : "
				+ endDate + ", \namount : " + amount + ", \nprice : " + price + ", \nimage : " + image + "]";
		// ********************************************************************************************************************

	}

}
