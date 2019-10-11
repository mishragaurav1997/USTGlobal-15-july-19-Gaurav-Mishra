package com.ustglobal.onetomany;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "pencil_box")
public class PencilBox {
	@Id
	@Column
	private int boxid;
	@Column
	private String bname;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "boxid",nullable = false)
	List<Pencils>pencil;
	


	public List<Pencils> getPencil() {
		return pencil;
	}


	public void setPencil(List<Pencils> pencil) {
		this.pencil = pencil;
	}


	@Override
	public String toString() {
		return "PencilBox [boxid=" + boxid + ", bname=" + bname + "]";
	}


	public int getBoxid() {
		return boxid;
	}


	public void setBoxid(int boxid) {
		this.boxid = boxid;
	}


	public String getBname() {
		return bname;
	}


	public void setBname(String bname) {
		this.bname = bname;
	}


	public static void main(String[] args) {

	}

}
