package com.ustglobal.jpatestapp;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.jpatestapp.dto.Movie;

public class GetReference {

	public static void main(String[] args) {
		EntityManagerFactory entityManagerFactory = null;
		EntityManager entityManager = null;
		EntityTransaction transaction = null;
		try {

			entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence");
			entityManager = entityManagerFactory.createEntityManager();
			transaction = entityManager.getTransaction();
			transaction.begin();
//			 Movie movie =entityManager.find(Movie.class, 102);
//			 System.out.println(movie.getClass()); 
//			 System.out.println(movie);
			
			  Movie movie= entityManager.getReference(Movie.class, 102);
			  System.out.println("Output of Get Refrence"); 
			  System.out.println(movie.getClass());
			 	
			transaction.commit();
		} catch (Exception e) {
			transaction.rollback();
			e.printStackTrace();
		} finally {
			entityManager.close();
		}

	}

}
