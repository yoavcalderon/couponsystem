package com.projectstage3.Coupon.System.exceptions.companyexceptions;

public class CouponNotFoundException extends Exception {

	/**
	 * The serialVersionUID is a universal version identifier for a Serializable
	 * class. De-serialization uses this number to ensure that a loaded class
	 * corresponds exactly to a serialized object. If no match is found, then an
	 * InvalidClassException is thrown.
	 */
	private static final long serialVersionUID = 8L;

	public CouponNotFoundException() {
		super();
	}

	public CouponNotFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public CouponNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public CouponNotFoundException(String message) {
		super(message);
	}

	public CouponNotFoundException(Throwable cause) {
		super(cause);

	}

}
