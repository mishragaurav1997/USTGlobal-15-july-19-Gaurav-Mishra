package com.ustglobal.mywebapp.dao;

import java.sql.Connection;

import com.ustglobal.mywebapp.dto.EmployeeInfoBean;

public interface EmployeeDAO {

	public EmployeeInfoBean searchEmployee(int id) ;
	public boolean addEmployee(EmployeeInfoBean bean);
	public  EmployeeInfoBean login(int empId,String password);
	public void deleteEmployee (int id);
	
}
