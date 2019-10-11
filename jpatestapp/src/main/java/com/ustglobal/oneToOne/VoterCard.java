package com.ustglobal.oneToOne;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "card")
public class VoterCard {
	@Id
	@Column
	private int v_id;
	@Column
	private String vname;
	@OneToOne(mappedBy = "votercard")
	private Person person; 

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	public int getV_id() {
		return v_id;
	}

	public void setV_id(int v_id) {
		this.v_id = v_id;
	}

	public String getVname() {
		return vname;
	}

	public void setVname(String vname) {
		this.vname = vname;
	}

	@Override
	public String toString() {
		return "VoterCard [v_id=" + v_id + ", vname=" + vname + "]";
	}

}
