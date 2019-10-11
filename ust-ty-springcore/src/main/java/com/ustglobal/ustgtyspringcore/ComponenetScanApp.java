package com.ustglobal.ustgtyspringcore;

import javax.swing.Spring;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.ustglobal.ustgtyspringcore.beans.HelloWorld;
import com.ustglobal.ustgtyspringcore.config.SpringConfig;

public class ComponenetScanApp {

	public static void main(String[] args) {

	AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(SpringConfig.class);
	HelloWorld obj = context.getBean(HelloWorld.class);
	obj.getAnimal().makeSound();
	}

}
