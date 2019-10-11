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

@WebServlet("/contextAttr")
public class MyContextAttrServlet extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
		EmployeeInfoBean employeeInfoBean = new EmployeeInfoBean();
		employeeInfoBean.setEmpId(568);
		employeeInfoBean.setEmpName("Yamini");
		employeeInfoBean.setAge(34);
		employeeInfoBean.setSalary(487031);
		
		ServletContext context =  getServletContext();
		context.setAttribute("emp",employeeInfoBean);
		
		resp.setContentType("text/html");
		PrintWriter out = resp.getWriter();
		out.println("<html>");
		out.println("<body>");
		out.println("<h3>Context Attribute has been Set </h3>");
		out.println("</html>");
		out.println("</body>");
	}

}
