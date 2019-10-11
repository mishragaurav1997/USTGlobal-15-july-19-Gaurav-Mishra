package com.ustglobal.ustgtyspringcore;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.ustglobal.ustgtyspringcore.beans.Animal;
import com.ustglobal.ustgtyspringcore.beans.HelloWorld;
import com.ustglobal.ustgtyspringcore.config.BeanConfig;

public class AnnotationConfigApp {

	public static void main(String[] args) {

		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(BeanConfig.class);

		HelloWorld obj = context.getBean(HelloWorld.class);
		System.out.println(obj.getMsg());
		System.out.println(obj.getMap());
		obj.getAnimal().makeSound();

		Animal animal1 = (Animal) context.getBean("dog");
		Animal animal2 = (Animal) context.getBean("dog");
		System.out.println(animal1 == animal2);
		
		context.close();

	}
}
