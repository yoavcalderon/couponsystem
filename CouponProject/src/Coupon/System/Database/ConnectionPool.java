package Coupon.System.Database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import Coupon.System.exceptions.CouponSystemException;
// ********************************************************************************************************************

public class ConnectionPool {
// singleton
	private Set<Connection> connections = new HashSet<>();
	private static ConnectionPool instance;
	private String url = "jdbc:derby://localhost:1527/ProjectDatabase";
	private int MAX_CONNECTIONS = 10;

	// ********************************************************************************************************************

	// constructor

	private ConnectionPool() throws SQLException {
		for (int i = 0; i < MAX_CONNECTIONS; i++) {
			Connection con = DriverManager.getConnection(url);
			connections.add(con);

		}
	}
	// ********************************************************************************************************************

	public static ConnectionPool getInstance() throws CouponSystemException {
		if (instance == null) {
			try {
				instance = new ConnectionPool();
			} catch (SQLException e) {
				throw new CouponSystemException(" connection pool failure ", e);

			}

		}
		return instance;
	}
	// ********************************************************************************************************************

	public synchronized Connection getConnection() {
		while (connections.isEmpty()) {

			try {
				wait();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		/**
		 * iterator is an object for getting elements from a collection (any collection)
		 */
		Iterator<Connection> it = connections.iterator();
		/**
		 * get a reference to a connection (the connection is still in the set)
		 */
		Connection con = it.next();
		/**
		 * remove the connection from the set
		 */
		it.remove();
		return con;

	}

	/**
	 * 
	 * puts refrence back in set, as long as it is not null, there are no duplicates
	 * in set
	 */
	// ********************************************************************************************************************
	public synchronized void restoreConnection(Connection con) {
		if (con != null) {
			connections.add(con);
			/**
			 * lets people know i am finished with the connection i refrenced it put it back
			 * in set if is not null and am now finished with connection
			 */
			notify();

			// ********************************************************************************************************************

		}

	}

	public void closeAllConnections() throws CouponSystemException {
		while (connections.size() < MAX_CONNECTIONS) {
			try {
				wait();
			} catch (InterruptedException e) {
			}
			for (Connection connection : connections) {
				try {

					connection.close();
				} catch (SQLException e) {
					throw new CouponSystemException("close all connections failed", e);
				}
				// ********************************************************************************************************************

			}
		}

	}
}
