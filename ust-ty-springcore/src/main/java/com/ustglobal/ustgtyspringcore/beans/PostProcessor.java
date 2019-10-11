package com.ustglobal.ustgtyspringcore.beans;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class PostProcessor implements BeanPostProcessor {

	@Override
	public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
//		System.out.println("Bean name:"+beanName);
		if(beanName.equals("obj")){
			System.out.println("Hello World before init");
		}
		else if(beanName.equals("dog")){
			System.out.println("Dog Before init");
		}
		return bean;
	}
	
	@Override
	public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
	
	System.out.println("Bean Name:"+beanName);
	System.out.println("AfterPropertySet");
	
	return bean;  
	}
}
