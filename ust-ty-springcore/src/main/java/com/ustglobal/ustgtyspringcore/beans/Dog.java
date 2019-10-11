package com.ustglobal.ustgtyspringcore.beans;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.stereotype.Component;

@Component("dog")
public class Dog implements Animal {
	
	public Dog() {
	System.out.println("Dog Object Created");
	}
	
	@PostConstruct
	public void init() {
		System.out.println("Dog init method");
	}
	@PreDestroy
	public void destroy() {
		System.out.println("Dog destroy Method");
	}
	
	@Override
	public void makeSound() {

		System.out.println("Baoooooooooo.......");
	}

}
