package com.ustglobal.oneToOne;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class OneToOneTest {

	public static void main(String[] args) {
		Person person = new Person();
		person.setId(102);
		person.setName("ABCD");
		person.setAge(22);
		VoterCard vc = new VoterCard();
		vc.setV_id(1023);
		vc.setVname("XYZ");
		person.setVotercard(vc);
		EntityManagerFactory emf = null;
		EntityManager em = null;
		EntityTransaction tx = null;

		try {
			emf = Persistence.createEntityManagerFactory("TestPersistence");
			em = emf.createEntityManager();
			tx= em.getTransaction();
			tx.begin();
			em.persist(person);
			System.out.println("Saved");
			tx.commit();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(em != null ) {
				em.close();
			}
			
		}




	}

}
