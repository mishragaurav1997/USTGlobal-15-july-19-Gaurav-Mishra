package com.ustglobal.oneToOne;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

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
			VoterCard votercard = em.find(VoterCard.class, 1023);
			votercard.getPerson().getName();
			System.out.println("Saved");
			tx.commit();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			em.close();
		}

	}

}
