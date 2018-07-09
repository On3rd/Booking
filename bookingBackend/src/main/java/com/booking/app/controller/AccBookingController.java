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

import com.booking.app.modal.AccBooking;
import com.booking.app.repository.AccBookingRepository;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200",allowedHeaders = "*")

public class AccBookingController {

	@Autowired
	 
	private AccBookingRepository accBookingRepository;
	
	@GetMapping("/accBooking")
	public List<AccBooking> getAccBooking()
	{
		return accBookingRepository.findAll();
	}
	
	@GetMapping("/accBooking/{accBooking_Id}")
	public Optional<AccBooking> getAccBooking(@PathVariable Long accBooking_Id)
	{
		return accBookingRepository.findById(accBooking_Id);
	}
	
	@DeleteMapping("/accBooking/{accBooking_Id}")
	public boolean deleteAccBooking(@PathVariable Long accBooking_Id)
	{
		accBookingRepository.deleteById(accBooking_Id);
		return true;
	}

	@PostMapping("/accBooking")
	public AccBooking createAccBooking(@RequestBody AccBooking accBooking)
	{
		return accBookingRepository.save(accBooking);
	}

	@PutMapping("/accBooking")
	public AccBooking updateAccBooking(@RequestBody AccBooking accBooking)
	{
		return accBookingRepository.save(accBooking);
	}
	
	 

	
	
}
