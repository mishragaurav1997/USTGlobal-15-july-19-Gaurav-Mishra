package com.ustglobal.hotel.management.jpql;

import java.util.List;
import java.util.Scanner;

import javax.persistence.EntityManager;
import javax.persistence.Query;


import com.ustglobal.hotel.dto.Hotel;

public class HotelImpl implements HotelInter {

	static Hotel hotel = new Hotel();
	Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		HotelImpl hi = new HotelImpl();

	}

	public boolean insert() {

		EntityManager entityManager = ConnEstablish.getConnection();
		ConnEstablish.transaction = ConnEstablish.entityManager.getTransaction();
		ConnEstablish.transaction.begin();

		try {
			System.out.println("enter food code");
			int code = Integer.parseInt(sc.nextLine());
			while (code != 0) {

				System.out.println("enter same food code");
				hotel.setItem_code(Integer.parseInt(sc.nextLine()));

				System.out.println("enter food name");
				hotel.setFood_name(sc.nextLine());

				System.out.println("enter price");
				hotel.setPrice(sc.nextDouble());

				entityManager.persist(hotel);
				ConnEstablish.transaction.commit();
				System.out.println("data is inserted");

			}
			System.out.println("don't press 0 until order finish");

		} catch (Exception e) {
			ConnEstablish.transaction.rollback();
			e.printStackTrace();
		}

		return true;
	}

	public Hotel getData(int id) {
		EntityManager entityManager = ConnEstablish.getConnection();

		System.out.println("enter food code to get data");
		int id1 = Integer.parseInt(sc.nextLine());

		Hotel h = entityManager.find(Hotel.class, id1);
		System.out.println(h.getItem_code());
		System.out.println(h.getFood_name());
		System.out.println(h.getPrice());
		System.out.println("********************");

		return h;
	}

	public boolean update() {
		EntityManager entityManager = ConnEstablish.getConnection();
		ConnEstablish.transaction = entityManager.getTransaction();
		ConnEstablish.transaction.begin();

		try {
			String jpql = "update Hotel set food_name = :nm where item_code= :mid";
			Query query = entityManager.createQuery(jpql);
			System.out.println("enter food name to change");
			String name = sc.nextLine();
			System.out.println("enter food code");
			int id = Integer.parseInt(sc.nextLine());

			query.setParameter("nm", name);
			query.setParameter("mid", id);
			query.executeUpdate();
			System.out.println("updated...");
			ConnEstablish.transaction.commit();
		} catch (Exception e) {
			ConnEstablish.transaction.rollback();
			e.printStackTrace();
		}

		return true;
	}

	public boolean deleteData() {

		try {
			EntityManager entityManager = ConnEstablish.getConnection();
			ConnEstablish.transaction = entityManager.getTransaction();
			ConnEstablish.transaction.begin();

			String jpql1 = "delete from Hotel where item_code= : id";
			Query query = entityManager.createQuery(jpql1);
			System.out.println("enter the hotel item_code to delete");
			Scanner sc = new Scanner(System.in);
			int mId = Integer.parseInt(sc.nextLine());
			query.setParameter("id", mId);

			int count = query.executeUpdate();
			if (count > 0) {
				System.out.println("record deleted....");
			} else {
				System.out.println("not deleted");
			}

			ConnEstablish.transaction.commit();
		} catch (Exception e) {
			ConnEstablish.transaction.rollback();
			e.printStackTrace();
		}

		return true;
	}

	public List<Hotel> getAllData() {

		EntityManager entityManager = ConnEstablish.getConnection();
		String jpql = "from Hotel";
		Query query = entityManager.createQuery(jpql);
		List<Hotel> resultList = query.getResultList();
		for (Hotel hotell : resultList) {
			System.out.println(hotell.getItem_code());
			System.out.println(hotell.getFood_name());
			System.out.println(hotell.getPrice());
			System.out.println("************************");

		}

		return resultList;
	}

	public List<Hotel> getnInsert() {

		EntityManager entityManager = ConnEstablish.getConnection();
		String jpql = "from Hotel";
		Query query = entityManager.createQuery(jpql);
		List<Hotel> resultList = query.getResultList();
		for (Hotel hotell : resultList) {
			System.out.println(hotell.getItem_code());
			System.out.println(hotell.getFood_name());
			System.out.println(hotell.getPrice());
			System.out.println("************************");

		}

		System.out.println("enter food code");
		int code = Integer.parseInt(sc.nextLine());
		while (code != 0) {

			hotel.setItem_code(Integer.parseInt(sc.nextLine()));

			System.out.println("enter food name");
			hotel.setFood_name(sc.nextLine());

			System.out.println("enter price");
			hotel.setPrice(sc.nextDouble());

			entityManager.persist(hotel);
			ConnEstablish.transaction.commit();
			System.out.println("data is inserted");

		}
		System.out.println("don't press 0 until order finish");

		return resultList;
	}

	public int bill() {
		EntityManager entityManager = ConnEstablish.getConnection();
		ConnEstablish.transaction = entityManager.getTransaction();
		ConnEstablish.transaction.begin();
		
		String jpql1 = "select sum(price) from Hotel ";
		Query query = entityManager.createQuery(jpql1);
		
		int bill = query.executeUpdate();
		
		
		return bill;
	}

}
