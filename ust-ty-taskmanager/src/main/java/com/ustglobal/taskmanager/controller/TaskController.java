package com.ustglobal.taskmanager.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ustglobal.taskmanager.dto.Task;
import com.ustglobal.taskmanager.dto.TaskResponse;
import com.ustglobal.taskmanager.service.TaskService;

@RestController
@RequestMapping("/task")
@CrossOrigin(origins = "*")
public class TaskController {

	@Autowired
	private TaskService service;
	
	@InitBinder
	public void initBinder(WebDataBinder binder) {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		CustomDateEditor editor = new CustomDateEditor(format, true);
		binder.registerCustomEditor(Date.class, editor);
	}

	@GetMapping(path = "/get-all", produces = MediaType.APPLICATION_JSON_VALUE)
	public TaskResponse getAllTask() {
		List<Task> task = service.getAllTask();

		TaskResponse response = new TaskResponse();
		if (task.isEmpty()) {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setDescription("No data Found");
		} else {
			response.setStatusCode(201);
			response.setMessage("Success");
			response.setDescription("All Data Found");
			response.setTask(task);
		}
		return response;
	}

	@PostMapping(path = "/add", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public TaskResponse addTask(@RequestBody Task task) {
     TaskResponse response = new TaskResponse();
     if (service.addTask(task)) {
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
	
	@DeleteMapping(path = "/remove/{task_id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public TaskResponse removeTask(@PathVariable("task_id") int task_id) {
		TaskResponse response = new TaskResponse();
		if (service.removeTask(task_id)) {
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

	@PutMapping(path = "/modify", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public TaskResponse modifyTask(@RequestBody Task task) {
		TaskResponse response = new TaskResponse();
		if ( service.update(task)) {
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
}
