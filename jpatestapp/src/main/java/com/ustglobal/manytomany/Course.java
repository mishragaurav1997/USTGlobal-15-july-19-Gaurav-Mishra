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
@Table(name ="course")
public class Course {
	@Id
	@Column
	private int cid;
	@Column
	private String cname;
	
	@ManyToMany(cascade = CascadeType.ALL,mappedBy = "course")
	@JoinTable(name= "students_courses",joinColumns= @JoinColumn(name= "cid"),inverseJoinColumns = @JoinColumn(name= "sid"))
	private List<Students> student;


	
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	@Override
	public String toString() {
		return "Course [cid=" + cid + ", cname=" + cname + "]";
	}
	

}
