package com.projectstage3.Coupon.System.job;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.projectstage3.Coupon.System.beans.Coupon;
import com.projectstage3.Coupon.System.dbdao.CouponsDBDAO;
import com.projectstage3.Coupon.System.exceptions.CouponSystemException;

@Component
@Scope("singleton")
public class CouponExpirationDailyJob implements Runnable {

	@Autowired
	private CouponsDBDAO couponDBDAO;
	private boolean quit;

	@PostConstruct
	public void start() {
		CouponExpirationDailyJob job = new CouponExpirationDailyJob();
		Thread t = new Thread(job, "job");
		t.start();
	}

	@Override
	public void run() {
		System.out.println(" job started ");

		while (!quit) {
			try {

				// Thread.sleep(1000 * 60 * 60 * 24);// 24HRS==> currently disabled for test
				// Convenience
				Thread.sleep(1000 * 10);// minute- for test only
				System.out.println(" job starts deleting coupons cycle");

				Date c = new Date(Calendar.getInstance().getTimeInMillis());
				List<Coupon> coupons = couponDBDAO.getAllCoupouns();
				for (Coupon coupon : coupons) {
					if (c.after(coupon.getEndDate())) {
						couponDBDAO.deleteCoupon(coupon.getId());
						System.out.println("coupon has been deleted" + coupon);

					}

				}

			} catch (CouponSystemException e) {
				e.printStackTrace();
			} // 24HRS
			catch (InterruptedException e) {
				System.out.println(" job thread interrupted ");
				break;
			}
		}

		System.out.println(" job ended ");

	}

	@PreDestroy
	public void stop() {
		this.quit = true;
	}

}
