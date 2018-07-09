package com.booking.app.modal;



import java.io.File;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "propertytable")

public class Property {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "prop_Id")
	private Long prop_Id;
	
	public Long getProp_Id() {
		return prop_Id;
	}
	@NotNull
    @Column(nullable = false, unique = true)
	private String prop_name;
	@NotNull
    @Column(nullable = false)
	private String prop_type;
	@NotNull
    @Column(nullable = false)
	private int numberRoom;
	@NotNull
    @Column(nullable = false)
	private String city;
	@NotNull
    @Column(nullable = false)
	private String contact_name;
	@NotNull
    @Column(nullable = false)
	private String addressline2;
	@NotNull
    @Column(nullable = false)
	private String country;
	@NotNull
    @Column(nullable = false)
	private File image;
	@NotNull
    @Column(nullable = false)
	private String province;
	@NotNull
    @Column(nullable = false)
	private String streetAddress;
	
	private String website;
	@NotNull
    @Column(nullable = false)
	private double price;
	@NotNull
    @Column(nullable = false)
	private String postal_code;
	
	@NotNull
    @Column(nullable = false)
	private Long user_Id;
	
	
	public Long getUser_Id() {
		return user_Id;
	}
	public void setUser_Id(Long user_Id) {
		this.user_Id = user_Id;
	}
	
	/*
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name ="prop_Id",referencedColumnName = "prop_Id")
	private List<PropertyTimeSheet> propertyTimeSheet;
	

	
	public List<PropertyTimeSheet> getPropertyTimeSheet() {
		return propertyTimeSheet;
	}
	public void setPropertyTimeSheet(List<PropertyTimeSheet> propertyTimeSheet) {
		this.propertyTimeSheet = propertyTimeSheet;
	}*/
	
	
	
	@Override
	public String toString() {
		return "Property [prop_name=" + prop_name + ", prop_type=" + prop_type + ", numberRoom=" + numberRoom
				+ ", city=" + city + ", contact_name=" + contact_name + ", addressline2=" + addressline2 + ", country="
				+ country + ", image=" + image + ", province=" + province + ", streetAddress=" + streetAddress
				+ ", website=" + website + ", price=" + price + ", postal_code=" + postal_code + "]";
	}
	
	public Property(@NotNull String prop_name, @NotNull String prop_type, @NotNull int numberRoom,
			@NotNull String city, @NotNull String contact_name, @NotNull String addressline2, @NotNull String country,
			@NotNull @NotNull @NotNull @NotNull @NotNull File image, @NotNull String province, @NotNull String streetAddress, String website,
			@NotNull double price, @NotNull String postal_code, @NotNull Long user_Id) {
		super();
		this.prop_name = prop_name;
		this.prop_type = prop_type;
		this.numberRoom = numberRoom;
		this.city = city;
		this.contact_name = contact_name;
		this.addressline2 = addressline2;
		this.country = country;
		this.image = image;
		this.province = province;
		this.streetAddress = streetAddress;
		this.website = website;
		this.price = price;
		this.postal_code = postal_code;
		this.user_Id = user_Id;
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
	public int getNumberRoom() {
		return numberRoom;
	}
	public void setNumberRoom(int numberRoom) {
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
	public File getImage() {
		return image;
	}
	public void setImage(File image) {
		this.image = image;
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
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
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
	public Property() 
	{
			}
	
	
	
	
	
	
}
