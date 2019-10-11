package com.ustglobal.onetomany;

import java.util.ArrayList;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class TestOneToMany {

	public static void main(String[] args) {

		EntityManagerFactory emf = null;
		EntityManager em = null;
		EntityTransaction tx = null;

		Pencils p = new Pencils();
		p.setPid(22);
		p.setPname("xyz");

		Pencils p1 = new Pencils();
		p1.setPid(34);
		p1.setPname("abc");
		ArrayList<Pencils> ape = new ArrayList<Pencils>();
		ape.add(p);
		ape.add(p1);

		PencilBox box = new PencilBox();
		box.setBoxid(90);
		box.setBname("Natraj Box");
		box.setPencil(ape);

		try {
			emf = Persistence.createEntityManagerFactory("TestPersistence");
			em = emf.createEntityManager();
			tx= em.getTransaction();
			tx.begin();
			em.persist(box);
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

