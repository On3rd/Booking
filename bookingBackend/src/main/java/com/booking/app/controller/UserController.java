package com.booking.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.booking.app.modal.User;
import com.booking.app.repository.UserRepository;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200",allowedHeaders = "*")

public class UserController {

	@Autowired
	 
	private UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> getUsers()
	{
		return userRepository.findAll();
	}
	
	@GetMapping("/users/{user_Id}")
	public Optional<User> getUser(@PathVariable Long user_Id)
	{
		return userRepository.findById(user_Id);
	}
	
	@DeleteMapping("/users/{user_Id}")
	public boolean deleteUser(@PathVariable Long user_Id)
	{
		userRepository.deleteById(user_Id);
		return true;
	}

	@PostMapping("/users")
	public User createUser(@RequestBody User user)
	{
		return userRepository.save(user);
	}

	@PutMapping("/users")
	public User updateUser(@RequestBody User user)
	{
		return userRepository.save(user);
	}
	
	 

	
	
}
