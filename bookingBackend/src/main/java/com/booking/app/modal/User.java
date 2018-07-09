package com.booking.app.modal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "usertable")

public class User {
	

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	private Long user_Id;
	@NotNull
    @Column(nullable = false)
	private String name;
	@NotNull
    @Column(nullable = false)
	private String surname;
	@NotNull
    @Column(nullable = false, unique = true)
	private String email;
	@NotNull
    @Column(nullable = false)
	private String phonenumber;
	@NotNull
    @Column(nullable = false)
	private String password;
	
	private String stuffNo;
	/*@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_Id")
	private List<Property> property;
	
	
	public List<Property> getProperty() {
		return property;
	}
	public void setProperty(List<Property> property) {
		this.property = property;
	}*/
	
	
	public String getStuffNo() {
		return stuffNo;
	}
	public void setStuffNo(String stuffNo) {
		this.stuffNo = stuffNo;
	}
	public String getName() {
		return name;
	}
	public Long getUser_Id() {
		return user_Id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNo() {
		return phonenumber;
	}
	public void setPhoneNo(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	public User(@NotNull String name, @NotNull String surname, @NotNull String email, @NotNull String phonenumber,
			@NotNull String password, String stuffNo) {
		
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.phonenumber = phonenumber;
		this.password = password;
		this.stuffNo = stuffNo;
	}
	public User()
	{
		
	}
	
	@Override
	public String toString() {
		return "User [name=" + name + ", surname=" + surname + ", email=" + email + ", phonenumber="
				+ phonenumber + ", password=" + password + "]";
	}
	
	
	
}
