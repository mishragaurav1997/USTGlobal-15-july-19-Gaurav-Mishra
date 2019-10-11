package com.ustglobal.jpatestapp;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.jpatestapp.dto.Movie;

public class App {
	public static void main(String[] args) {
		//Transient State
		Movie movie = new Movie();
		movie.setId(105);
		movie.setName("John Wick");
		movie.setRatings("Very Good");
		EntityManagerFactory entityManagerFactory = null;
		EntityManager entityManager = null;
		EntityTransaction transaction = null;


		try {
			entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence");
			entityManager = entityManagerFactory.createEntityManager();
			transaction = entityManager.getTransaction();
			transaction.begin();
			entityManager.persist(movie);
			System.out.println("Saved");
			transaction.commit();
			System.out.println(entityManager.contains(movie));
			entityManager.detach(movie);
			System.out.println(entityManager.contains(movie));
		} catch (Exception e) {
			transaction.rollback();
			e.printStackTrace();
		}finally {
			entityManager.close();
		}

	}// end of main method
}// end of the class
