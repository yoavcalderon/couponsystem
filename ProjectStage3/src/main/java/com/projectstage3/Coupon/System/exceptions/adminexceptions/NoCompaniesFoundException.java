package com.projectstage3.Coupon.System.exceptions.adminexceptions;

public class NoCompaniesFoundException extends Exception {

	/**
	 * The serialVersionUID is a universal version identifier for a Serializable
	 * class. De-serialization uses this number to ensure that a loaded class
	 * corresponds exactly to a serialized object. If no match is found, then an
	 * InvalidClassException is thrown.
	 */
	private static final long serialVersionUID = 6L;

	public NoCompaniesFoundException() {
		super();
	}

	public NoCompaniesFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public NoCompaniesFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public NoCompaniesFoundException(String message) {
		super(message);
	}

	public NoCompaniesFoundException(Throwable cause) {
		super(cause);

	}

}
