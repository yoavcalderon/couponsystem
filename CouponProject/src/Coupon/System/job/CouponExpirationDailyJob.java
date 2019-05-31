package Coupon.System.job;

import Coupon.System.dao.CouponDAO;
import Coupon.System.daodb.CouponDBDAO;
import Coupon.System.exceptions.CouponSystemException;

public class CouponExpirationDailyJob implements Runnable {

	private CouponDAO couponDAO = new CouponDBDAO();
	private boolean quit;
	private Thread jobThread;

	/**
	 * 
	 * @param jobThread the reference for the thread containing this runnable (
	 *                  needed for interruption purpose)
	 */
	public void setJobThread(Thread jobThread) {
		this.jobThread = jobThread;
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
				// get ids of expired coupons
				Integer[] ids = couponDAO.getExpiredCouponsIds();
				// delete all instances of expired coupons from customer-coupon
				couponDAO.deleteCouponPurchase(ids);
				// delete all coupons of the ids array
				for (Integer currCouponID : ids) {
					couponDAO.deleteCoupon(currCouponID);

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

	public void stop() {
		this.quit = true;
		jobThread.interrupt();
	}
}
