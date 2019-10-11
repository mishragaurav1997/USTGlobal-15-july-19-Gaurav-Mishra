package com.ustglobal.jpatestapp;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
//import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.ustglobal.jpatestapp.dto.Movie;

public class Test {

	public static void main(String[] args) {
		
		EntityManagerFactory entityManagerFactory = null;
		EntityManager entityManager = null;
//		EntityTransaction transaction = null;


		entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence");
		entityManager = entityManagerFactory.createEntityManager();
		String jpql1 = "from Movie";
		
		Query query1 = entityManager.createQuery(jpql1);
		List<Movie> resultList1 = query1.getResultList(); 

		for (Movie movie: resultList1) {
			System.out.println(movie.getId());
		}



	}

}
