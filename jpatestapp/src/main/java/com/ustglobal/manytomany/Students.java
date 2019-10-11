package com.ustglobal.manytomany;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "students")

public class Students {
	
	@Id
	@Column
	private int sid;
	@Column
	private String sname;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name= "students_courses",joinColumns= @JoinColumn(name= "sid"),inverseJoinColumns = @JoinColumn(name= "cid"))
	private List<Course> course;
	private List<Students> student;
	@ManyToMany(mappedBy = "student")
	
	

	
	public List<Course> getCourse() {
		return course;
	}
	public void setCourse(List<Course> course) {
		this.course = course;
	}

	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	

}
