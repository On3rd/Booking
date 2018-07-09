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
@Table(name = "displayPropertyTable")

public class DisplayProperties {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long disp_Id;
	
	@NotNull
    @Column(nullable = false)
	private String city;
	@NotNull
    @Column(nullable = false)
	private String country;
	@NotNull
    @Column(nullable = false)
	private File image;
	@NotNull
    @Column(nullable = false)
	private String province;
	
	
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
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
	
	
	
	
	
	
	public DisplayProperties(String city, String country, File image, String province) {
		super();
		this.city = city;
		this.country = country;
		this.image = image;
		this.province = province;
		
	}
	public DisplayProperties() {
		}
	
	
}