package com.ustglobal.usttyspringboot.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ustglobal.usttyspringboot.dto.Employee;
import com.ustglobal.usttyspringboot.dto.EmployeeResponse;
import com.ustglobal.usttyspringboot.service.EmployeeService;

@RestController
@RequestMapping("/employee")

@CrossOrigin(origins = "*",allowedHeaders = "*",allowCredentials = "true")
public class EmployeeController {

	@Autowired
	@Qualifier("jpa")
	private EmployeeService service;
	
	@GetMapping(path = "/get-all-email", produces = MediaType.APPLICATION_JSON_VALUE)
	public EmployeeResponse getAllEmployeesByEmail(@RequestParam("email") String email) {
		EmployeeResponse response = new EmployeeResponse();
		List<Employee> employees = service.getEmployeesByEmail(email);
		if (employees == null) {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setDescription("No data Found");
		} else {

			response.setStatusCode(201);
			response.setMessage("Success");
			response.setDescription("Data Found");
			response.setEmployees(employees);
		}
		return response;
	}
	
	@GetMapping(path = "/get-all-name", produces = MediaType.APPLICATION_JSON_VALUE)
	public EmployeeResponse getAllEmployeesByName(@RequestParam("name") String name) {
		EmployeeResponse response = new EmployeeResponse();
		List<Employee> employees = service.getEmployeesByName(name);
		if (employees == null) {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setDescription("No data Found");
		} else {

			response.setStatusCode(201);
			response.setMessage("Success");
			response.setDescription("Data Found");
			response.setEmployees(employees);
		}
		return response;
	}

	@GetMapping(path = "/get", produces = MediaType.APPLICATION_JSON_VALUE)
	public EmployeeResponse getEmployee(@RequestParam("id") int id) {
		Employee employee = service.getEmployee(id);
		EmployeeResponse response = new EmployeeResponse();
		if (employee == null) {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setDescription("No data Found");
		} else {

			response.setStatusCode(201);
			response.setMessage("Success");
			response.setDescription("Data Found");
			response.setEmployees(Arrays.asList(employee));
		}
		return response;
	}

	@GetMapping(path = "/get-all", produces = MediaType.APPLICATION_JSON_VALUE)
	public EmployeeResponse getAllEmployees() {
		List<Employee> employee = service.getAllEmployees();
		;
		EmployeeResponse response = new EmployeeResponse();
		if (employee.isEmpty()) {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setDescription("No data Found");
		} else {
			response.setStatusCode(201);
			response.setMessage("Success");
			response.setDescription("All Data Found");
			response.setEmployees(employee);
		}
		return response;
	}

	@PostMapping(path = "/add", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public EmployeeResponse addEmployee(@RequestBody Employee employee) {
		EmployeeResponse response = new EmployeeResponse();
		if (service.addEmployee(employee)) {
			response.setStatusCode(201);
			response.setMessage("Success");
			response.setDescription("Data Added");
		} else {
			response.setStatusCode(201);
			response.setMessage("Failure");
			response.setDescription("No Data Added");
		}
		return response;

	}

	@PutMapping(path = "/modify", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public EmployeeResponse modifyEmployee(@RequestBody Employee employee) {
		EmployeeResponse response = new EmployeeResponse();
		if ( service.modifyEmployee(employee)) {
			response.setStatusCode(201);
			response.setMessage("Success");
			response.setDescription("Modification Done");
		} else {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setDescription("NO modification Done");
		}
		return response;
	}

	@DeleteMapping(path = "/remove/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public EmployeeResponse removeEmployee(@PathVariable("id") int id) {
		EmployeeResponse response = new EmployeeResponse();
		if (service.removeEmployee(id)) {
			response.setStatusCode(401);
			response.setMessage("Success");
			response.setDescription("Data Deleted");
		} else {
			response.setStatusCode(201);
			response.setMessage("Failure");
			response.setDescription("No data Deleted");
		}
		return response;
	}
	
	@GetMapping("/exce")
	public String throwsException() throws Exception{
		throw new Exception();
		
	}

}
