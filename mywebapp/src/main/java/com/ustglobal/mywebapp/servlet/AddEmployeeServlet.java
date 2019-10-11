package com.ustglobal.mywebapp.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ustglobal.mywebapp.dao.EmployeeDAO;
import com.ustglobal.mywebapp.dao.EmployeeDAOJpaImpl;
import com.ustglobal.mywebapp.dto.EmployeeInfoBean;

public class AddEmployeeServlet extends HttpServlet {

	private EmployeeDAO dao = new EmployeeDAOJpaImpl();
	private EmployeeInfoBean employee = new  EmployeeInfoBean();
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
		String empIdVal = req.getParameter("empid");
		int empId = Integer.parseInt(empIdVal);
		employee.setEmpId(empId);
		
		String empName = req.getParameter("name");
		employee.setEmpName(empName);
		
		String empAge = req.getParameter("age");
		int ea = Integer.parseInt(empAge);
		employee.setAge(ea);
		
		String empSal = req.getParameter("salary");
		int sal = Integer.parseInt(empSal);
		employee.setSalary(sal);
		
		String desig = req.getParameter("designation");
		employee.setDesignation(desig);
		
		
		
	}
	
}
