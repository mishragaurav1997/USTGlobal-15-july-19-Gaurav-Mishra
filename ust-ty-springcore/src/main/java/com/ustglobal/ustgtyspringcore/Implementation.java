package com.ustglobal.ustgtyspringcore;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ustglobal.ustgtyspringcore.beans.Author;
import com.ustglobal.ustgtyspringcore.beans.HelloWorld;

public class Implementation {

	public static void main(String[] args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("beanAuthor.xml");
		//	Author author = context.getBean(Author.class);
		/*
		 * System.out.println(author.getName()); author.getWrites().write();
		 */
		Author author1 = context.getBean(Author.class);
		Author author2 = context.getBean(Author.class);
		



	}

}
