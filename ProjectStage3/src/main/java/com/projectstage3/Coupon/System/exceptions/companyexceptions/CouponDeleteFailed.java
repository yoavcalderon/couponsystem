package com.projectstage3.Coupon.System.exceptions.companyexceptions;

public class CouponDeleteFailed extends Exception {

	/**
	 * The serialVersionUID is a universal version identifier for a Serializable
	 * class. De-serialization uses this number to ensure that a loaded class
	 * corresponds exactly to a serialized object. If no match is found, then an
	 * InvalidClassException is thrown.
	 */
	private static final long serialVersionUID = 9L;

	public CouponDeleteFailed() {
		super();
	}

	public CouponDeleteFailed(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public CouponDeleteFailed(String message, Throwable cause) {
		super(message, cause);
	}

	public CouponDeleteFailed(String message) {
		super(message);
	}

	public CouponDeleteFailed(Throwable cause) {
		super(cause);

	}

}
