package com.booking.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.booking.app.modal.User;
import com.booking.app.repository.UserRepository;

@SpringBootApplication
public class MyBookingDotComApplication implements CommandLineRunner {

	@Autowired
	
	private UserRepository userRepository;
	public static void main(String[] args) {
		SpringApplication.run(MyBookingDotComApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception
	{
		userRepository.save(new User("Ntsako","Makhubela","arnold@gmail.com","0795342478","Bae_two2","2468"));
	}
	
	}
	
	

