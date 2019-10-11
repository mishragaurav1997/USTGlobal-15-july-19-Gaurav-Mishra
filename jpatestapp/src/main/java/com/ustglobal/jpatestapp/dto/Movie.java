package com.ustglobal.jpatestapp.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.Table;

@Entity
@Table(name = "movie")

public class Movie {
	@Id
	@Column
	private int id;
	@Column
	private String name;
	@Column 
	@JoinTable
	private String ratings;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRatings() {
		return ratings;
	}

	public void setRatings(String ratings) {
		this.ratings = ratings;
	}

	@Override
	public String toString() {
		return "Movie [id=" + id + ", name=" + name + ", ratings=" + ratings + "]";
	}

}
