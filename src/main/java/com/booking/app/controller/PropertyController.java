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

import com.booking.app.modal.Property;
import com.booking.app.repository.PropertyRepository;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200",allowedHeaders = "*")

public class PropertyController {

	@Autowired
	 
	private PropertyRepository propertyRepository;
	
	@GetMapping("/property")
	public List<Property> getProperty()
	{
		return propertyRepository.findAll();
	}
	
	@GetMapping("/property/{prob_Id}")
	public Optional<Property> getProperty(@PathVariable Long prob_Id)
	{
		return propertyRepository.findById(prob_Id);
	}
	
	@DeleteMapping("/property/{prob_Id}")
	public boolean deleteProperty(@PathVariable Long prob_Id)
	{
		propertyRepository.deleteById(prob_Id);
		return true;
	}

	@PostMapping("/property")
	public Property createProperty(@RequestBody Property property)
	{
		
		return propertyRepository.save(property);
	}

	@PutMapping("/property")
	public Property updateProperty(@RequestBody Property property)
	{
		return propertyRepository.save(property);
	}
	
	 

	
	
}
