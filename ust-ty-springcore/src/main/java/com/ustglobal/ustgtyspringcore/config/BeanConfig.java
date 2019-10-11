package com.ustglobal.ustgtyspringcore.config;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowire;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.ustglobal.ustgtyspringcore.beans.Animal;
import com.ustglobal.ustgtyspringcore.beans.Dog;
import com.ustglobal.ustgtyspringcore.beans.HelloWorld;
import com.ustglobal.ustgtyspringcore.beans.Human;

@Configuration
public class BeanConfig {

	@Bean(name ="obj")//,autowire = Autowire.BY_TYPE)
	public HelloWorld getHelloWorld() {
		HelloWorld helloWorld = new HelloWorld();
		helloWorld.setMsg("Hello World !!!!");
		HashMap<String, Integer> map = new	HashMap<String, Integer>();
		map.put("abc", 123);
		map.put("xyz", 890);
		helloWorld.setMap(map);
		//		Animal animal = getDog();
		//		helloWorld.setAnimal(animal);
		helloWorld.setAnimal(getDog());
		return helloWorld;
	}

	@Bean(name = "dog")
	//	@Scope( "prototype")// If Scope is Singleton spring will destroy either garbage collector will take 
	public Dog getDog() {
		return new Dog();
	}

	@Bean(name = "human")
	public Human getHuman() {
		return new Human();
	}
}

