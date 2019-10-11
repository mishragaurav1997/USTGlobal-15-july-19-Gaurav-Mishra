package com.ustglobal.oneToOne;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table (name = "person")
public class Person {
	@Id
	@Column
	
	private int id;
	
	@Column
	private String name;
	
	@Column
	private int age;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="v_id")
	private VoterCard votercard;
	
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getId() {
		return id;
	}
	public VoterCard getVotercard() {
		return votercard;
	}
	public void setVotercard(VoterCard votercard) {
		this.votercard = votercard;
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
	@Override
	public String toString() {
		return "Person [id=" + id + ", name=" + name + ", age=" + age + ", votercard=" + votercard + "]";
	}
	

}
