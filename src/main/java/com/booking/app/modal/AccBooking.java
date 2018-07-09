package com.booking.app.modal;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "accBookingTable")

public class AccBooking {


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	private long accBooking_Id;
	
	
	private Date checkInDate;
	private Date checkOutDate;
	private String prop_name;
	private String prop_type;
	private String numberRoom;
	private String city;
	private String contact_name;
	private String addressline2;
	private String country;
	
	private int noOfChildren;
	private int noOfAdults;
	
	private String province;
	private String streetAddress;
	private int noOfVisitors;
	private double price;
	private String postal_code;
	private int user_id;
	private int prop_Id;
	private int nights;
	
	

	public int getNights() {
		return nights;
	}






	public void setNights(int nights) {
		this.nights = nights;
	}






	public int getProp_Id() {
		return prop_Id;
	}






	public void setProp_Id(int prop_Id) {
		this.prop_Id = prop_Id;
	}

	public int getUser_id() {
		return user_id;
	}
	
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public AccBooking(Date checkInDate, Date checkOutDate, String prop_name, String prop_type, String numberRoom,
			String city, String contact_name, String addressline2, String country, int noOfChildren, int noOfAdults,
			String province, String streetAddress, int noOfVisitors, double price, String postal_code, int user_id,
			int prop_Id, int nights) {
		super();
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
		this.prop_name = prop_name;
		this.prop_type = prop_type;
		this.numberRoom = numberRoom;
		this.city = city;
		this.contact_name = contact_name;
		this.addressline2 = addressline2;
		this.country = country;
		this.noOfChildren = noOfChildren;
		this.noOfAdults = noOfAdults;
		this.province = province;
		this.streetAddress = streetAddress;
		this.noOfVisitors = noOfVisitors;
		this.price = price;
		this.postal_code = postal_code;
		this.user_id = user_id;
		this.prop_Id = prop_Id;
		this.nights = nights;
	}






	public AccBooking() {
	}
	
	


	

	public long getAccBooking_Id() {
		return accBooking_Id;
	}






	public Date getCheckInDate() {
		return checkInDate;
	}
	public void setCheckInDate(Date checkInDate) {
		this.checkInDate = checkInDate;
	}
	public Date getCheckOutDate() {
		return checkOutDate;
	}
	public void setCheckOutDate(Date checkOutDate) {
		this.checkOutDate = checkOutDate;
	}
	public String getProp_name() {
		return prop_name;
	}
	public void setProp_name(String prop_name) {
		this.prop_name = prop_name;
	}
	public String getProp_type() {
		return prop_type;
	}
	public void setProp_type(String prop_type) {
		this.prop_type = prop_type;
	}
	public String getNumberRoom() {
		return numberRoom;
	}
	public void setNumberRoom(String numberRoom) {
		this.numberRoom = numberRoom;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getContact_name() {
		return contact_name;
	}
	public void setContact_name(String contact_name) {
		this.contact_name = contact_name;
	}
	public String getAddressline2() {
		return addressline2;
	}
	public void setAddressline2(String addressline2) {
		this.addressline2 = addressline2;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getStreetAddress() {
		return streetAddress;
	}
	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}
	
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getPostal_code() {
		return postal_code;
	}
	public void setPostal_code(String postal_code) {
		this.postal_code = postal_code;
	}
	
	
	public int getNoOfVisitors() {
		return noOfVisitors;
	}
	public void setNoOfVisitors(int noOfVisitors) {
		this.noOfVisitors = noOfVisitors;
	}
	public int getNoOfAdults() {
		return noOfAdults;
	}
	public void setNoOfAdults(int noOfAdults) {
		this.noOfAdults = noOfAdults;
	}
	public int getNoOfChildren() {
		return noOfChildren;
	}
	public void setNoOfChildren(int noOfChildren) {
		this.noOfChildren = noOfChildren;
	}
	
	
	
	
	
}

