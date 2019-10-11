package com.ustglobal.mywebapp.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/redirect")
public class RedirectServlet extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
		/*
		 * String url = "https://www.facebook.com"; resp.sendRedirect(url);
		 */
		String url  = "http://localhost:8081/mywebapp/myFirstServlet";
		resp.sendRedirect(url);
	}
}
