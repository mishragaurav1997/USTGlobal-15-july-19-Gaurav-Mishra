package com.ustglobal.manytomany;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.oneToOne.VoterCard;

public class Test {

	public static void main(String[] args) {

		EntityManagerFactory emf = null;
		EntityManager em = null;
		EntityTransaction tx = null;

		try {
			emf = Persistence.createEntityManagerFactory("TestPersistence");
			em = emf.createEntityManager();
			tx= em.getTransaction();
			tx.begin();
			Course course = em.find(Course.class,10);
			course.getCid()
			System.out.println("Saved");
			tx.commit();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			em.close();
		}

	}

}
