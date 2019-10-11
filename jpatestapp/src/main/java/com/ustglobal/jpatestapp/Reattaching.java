package com.ustglobal.jpatestapp;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.jpatestapp.dto.Movie;

public class Reattaching {

	public static void main(String []args) {
		EntityManagerFactory entityManagerFactory = null;
		EntityManager entityManager = null;
		EntityTransaction transaction = null;
		try {
			
			
			entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence");
			entityManager = entityManagerFactory.createEntityManager();
			transaction = entityManager.getTransaction();
			transaction.begin();
			Movie movie =entityManager.find(Movie.class, 103);
			System.out.println(movie);
			System.out.println(entityManager.contains(movie));
			entityManager.detach(movie);
			System.out.println(entityManager.contains(movie));
			movie.setRatings("Bad");
			Movie m1 = entityManager.merge(movie); 
			System.out.println("3rd sop "+m1);
			entityManager.contains(movie);
			transaction.commit();
		} catch (Exception e) {
			transaction.rollback();
			e.printStackTrace();
		} finally {
			entityManager.close();
		}

	}

}
