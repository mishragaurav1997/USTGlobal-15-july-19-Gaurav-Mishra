package com.ustglobal.ustgtyspringcore.beans;

import org.springframework.stereotype.Component;

@Component("human")
public class Human implements Animal{

	@Override
	public void makeSound() {
		System.out.println("Bla Bla Bla Bla Bla......");
	}

}
