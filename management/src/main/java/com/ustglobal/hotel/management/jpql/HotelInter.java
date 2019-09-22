package com.ustglobal.hotel.management.jpql;

import java.util.List;

import com.ustglobal.hotel.dto.Hotel;

public interface HotelInter {

		public boolean insert();
		
		public Hotel getData(int id);
		
		public boolean update();
		
		public boolean deleteData();
		
		public List<Hotel> getAllData();
		
		public List<Hotel> getnInsert();
		
		public int bill(); 
		
	}

