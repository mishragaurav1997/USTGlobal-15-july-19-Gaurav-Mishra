package com.ustglobal.ustgtyspringcore;

import java.util.Map;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ustglobal.ustgtyspringcore.beans.Animal;
import com.ustglobal.ustgtyspringcore.beans.HelloWorld;
import com.ustglobal.ustgtyspringcore.beans.Pet;

public class XmlConfigApp {
	
	public static void main(String[] args) {
		HelloWorld obj1 = new HelloWorld();
		obj1.setMsg("Hello World");
		System.out.println(obj1.getMsg());

		System.out.println("***********************************");
		
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
		
		HelloWorld obj2 = context.getBean(HelloWorld.class);
		System.out.println(obj2.getMsg());
		obj2.getAnimal().makeSound();
		System.out.println(obj2.getMap());

		System.out.println("***********************************");
		
		Animal animal = (Animal) context.getBean("human");
		animal.makeSound();

		System.out.println("***********************************");
		
		Animal animal1 = (Animal) context.getBean("dog");
		animal1.makeSound();
		
		System.out.println("***********************************");
		
		Pet pet = context.getBean(Pet.class);
		System.out.println(pet.getName());
		pet.getAnimal().makeSound();
		

		context.close();
	}
}