package Temp1;

import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Enumeration;

public class Drivers {

	public static void main(String[] args) {

		String driverName, dburl;
		driverName = "org.apache.derby.jdbc.ClientDriver";
		dburl = "jdbc:derby://localhost:1527/ProjectDatabase";

		Enumeration<Driver> drivers = DriverManager.getDrivers();
		while (drivers.hasMoreElements()) {
			System.out.println(drivers.nextElement().getClass());
		}

		try {
			Class.forName(driverName);
		} catch (ClassNotFoundException e) {
		}
		System.out.println("driver loaded");
		try {
			Connection con = DriverManager.getConnection(dburl);
			System.out.println(" connected ");
			con.close();
			System.out.println("disconnected");
		} catch (SQLException e) {

		}

	}
}
