package com.ustglobal.taskmanager.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.taskmanager.dto.Task;
import com.ustglobal.taskmanager.repository.TaskRepository;

@Service
public class TaskServiceJpaImpl implements TaskService {

	@Autowired
	TaskRepository repository;
	
	@Override
	public boolean addTask(Task task) {
		Date date = new Date();
		task.setTask_start_date(date);
		System.out.println(repository.save(task));
		return true;
	}

	@Override
	public boolean removeTask(int task_id) {
		repository.deleteById(task_id);
		return true;
	}

	@Override
	public boolean update(Task task) {
		Date task_end_date= new Date();
		task.setTask_end_date(task_end_date);
		repository.updateTask(task_end_date, task.getTask_id());
		return true;
	}

	@Override
	public List<Task> getAllTask() {
		return repository.findAll();
	}

}
