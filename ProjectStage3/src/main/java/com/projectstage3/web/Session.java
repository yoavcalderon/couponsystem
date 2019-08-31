package com.projectstage3.web;

import com.projectstage3.Coupon.System.Facade.Facade;

public class Session {
	private Facade facade;
	private long lastAcssesed;

	public Facade getFacade() {
		return facade;
	}

	public void setFacade(Facade facade) {
		this.facade = facade;
	}

	public long getLastAcssesed() {
		return lastAcssesed;
	}

	public void setLastAcssesed(long lastAcssesed) {
		this.lastAcssesed = lastAcssesed;
	}

}
