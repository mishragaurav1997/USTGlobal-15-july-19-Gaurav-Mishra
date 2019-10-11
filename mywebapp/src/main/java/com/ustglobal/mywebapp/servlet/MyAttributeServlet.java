package com.ustglobal.mywebapp.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ustglobal.mywebapp.dto.EmployeeInfoBean;

@WebServlet("/myAttributeValue")
public class MyAttributeServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		
		
		
		ServletContext context = getServletContext();
		EmployeeInfoBean employeeInfobean = (EmployeeInfoBean) context.getAttribute("emp");

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
