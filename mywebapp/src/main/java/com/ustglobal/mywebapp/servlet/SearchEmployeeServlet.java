package com.ustglobal.mywebapp.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.ustglobal.mywebapp.dao.EmployeeDAO;
import com.ustglobal.mywebapp.dao.EmployeeDAOJpaImpl;
import com.ustglobal.mywebapp.dto.EmployeeInfoBean;

@WebServlet("/searchEmp")
public class SearchEmployeeServlet extends HttpServlet {

	private EmployeeDAO dao = new EmployeeDAOJpaImpl();
	


		@Override
		protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
			//Get the Form Data
			HttpSession session = req.getSession(false);
			
			if(session != null) {
				
			String empIdVal = req.getParameter("empid");
			int empId = Integer.parseInt(empIdVal);

			EmployeeInfoBean employeeInfoBean = dao.searchEmployee(empId);

			resp.setContentType("text/html");
			PrintWriter out = resp.getWriter();
			out.println("<html>");
			out.println("<body>");
			if(employeeInfoBean != null) {
				out.println("<h3>Employee Data For Employee Id" + empId+ "</h3>");
				out.println("Employee Id : " +employeeInfoBean.getEmpId());
				out.println("Employee Name :"+employeeInfoBean.getEmpName());
				out.println("Employee Age :"+employeeInfoBean.getAge());
				out.println("Employee Salary :"+employeeInfoBean.getSalary());
				out.println("Employee Designation :"+employeeInfoBean.getSalary());
			}
			else {
				out.println("<h2>Employee Record for Id"+empId+"Not Found</h2>");
			}
			out.println("</html>");
			out.println("</body>");
		}else {
			resp.sendRedirect("./loginForm.html");
		
		}
	}
}

