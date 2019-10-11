package com.ustglobal.jpql;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.ustglobal.jpatestapp.dto.Movie;

public class ReadDemo {

	public static void main(String[] args) {
		EntityManagerFactory entityManagerFactory = null;
		EntityManager entityManager = null;
		EntityTransaction transaction = null;


		entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence");
		entityManager = entityManagerFactory.createEntityManager();
//		String jpql = "select ratings from Movie";
		String jpql1 = "from Movie";
//
//		Query query = entityManager.createQuery(jpql);
//		List<String> resultList = query.getResultList();

//		for (String  movie: resultList) {
//			System.out.println(movie);
//		}
		Query query1 = entityManager.createQuery(jpql1);
		List<Movie> resultList1 = query1.getResultList();

		for (Movie movie: resultList1) {
			System.out.println(movie.getId());
		}
		try {

			entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence");
			entityManager = entityManagerFactory.createEntityManager();

			transaction= entityManager.getTransaction();
			transaction.begin();
			String jpql2 = "update Movie set ratings =:rm where id =:id";
			Query query2=entityManager.createQuery(jpql2);
			query2.setParameter("rm","Awesome");
			query2.setParameter("id",103);
			System.out.println( query2.executeUpdate());
			transaction.commit();
		}catch(Exception e) {
			transaction.rollback();
			e.printStackTrace();
		}

		try {

			entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence");
			entityManager = entityManagerFactory.createEntityManager();

			transaction= entityManager.getTransaction();
			transaction.begin();
			String jpql3 = "delete from Movie where id =:id";
			Query query3=entityManager.createQuery(jpql3);
			query3.setParameter("id",105);
			System.out.println( query3.executeUpdate());
			transaction.commit();
		}catch(Exception e) {
			transaction.rollback();
			e.printStackTrace();
		}

	}//end of main method
}//end of class
