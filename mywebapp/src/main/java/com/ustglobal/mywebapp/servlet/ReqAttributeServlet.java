package com.ustglobal.mywebapp.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.ustglobal.mywebapp.dto.EmployeeInfoBean;

@WebServlet("/reqAttribute")
public class ReqAttributeServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
	EmployeeInfoBean employeeInfobean =  (EmployeeInfoBean) req.getAttribute("employee");
	
	resp.setContentType("text/html");
	PrintWriter out = resp.getWriter();
	out.println("<html>");
	out.println("<body>");
	out.println("<h3>Employee Details are - </h3>");
	out.println("Id -"+employeeInfobean.getEmpid());
	out.println("Name -"+employeeInfobean.getEmpName());
	out.println("Age: "+employeeInfobean.getAge());
	out.println("Salary - "+employeeInfobean.getSalary());
	out.println("Designation - "+employeeInfobean.getDesignation());
	out.println("</html>");
	out.println("</body>");
	
	
	}
}
