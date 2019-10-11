package com.ustglobal.mywebapp.dao;

import java.sql.Connection;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.ustglobal.mywebapp.dto.EmployeeInfoBean;

public class EmployeeDAOJpaImpl implements EmployeeDAO {

	@Override
	public EmployeeInfoBean searchEmployee(int id) {

		EntityManagerFactory emf = Persistence.createEntityManagerFactory("TestPersistence");
		EntityManager em = emf.createEntityManager();
		EmployeeInfoBean employInfoBean = null;
		try {
			employInfoBean = em.find(EmployeeInfoBean.class, id);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return employInfoBean;
	}

	@Override
	public EmployeeInfoBean login(int empId, String password) {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("TestPersistence");
		EntityManager em = emf.createEntityManager();
		EmployeeInfoBean employeeInfoBean = null;

		String jpaQuery = "from EmployeeInfoBean where empId = :id and password = :pwd ";
		Query query = em.createQuery(jpaQuery);
		query.setParameter("id", empId);
		query.setParameter("pwd", password);
		try {
			employeeInfoBean = (EmployeeInfoBean) query.getSingleResult();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return employeeInfoBean;
	}

	@Override
	public boolean addEmployee(EmployeeInfoBean bean) {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("TestPersistence");
		EntityManager em = emf.createEntityManager();
		EntityTransaction transaction = em.getTransaction();
		try {
			transaction.begin();
			em.persist(bean);
			transaction.commit();

		} catch (Exception e) {
			transaction.rollback();
			e.printStackTrace();
		} finally {
			em.close();
		}
		return true;
	}

	@Override
	public void deleteEmployee(int id) {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("TestPersistence");
		EntityManager em = emf.createEntityManager();
		EntityTransaction transaction = em.getTransaction();
		transaction.begin();
		EmployeeInfoBean bean = em.find(EmployeeInfoBean.class, id);
		em.remove(bean);
		transaction.commit();
	}

}
