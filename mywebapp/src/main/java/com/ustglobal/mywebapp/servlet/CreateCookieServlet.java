package com.ustglobal.mywebapp.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/createCookie")
public class CreateCookieServlet extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Cookie cookie = new Cookie("name", "Guru");
		PrintWriter out = resp.getWriter();
		resp.addCookie(cookie);
		resp.setContentType("text/html");
		out.print("<h2>Cookie Created Sucessfully</h2> ");
		
		
	}//End of doGet()
}//End of Class
