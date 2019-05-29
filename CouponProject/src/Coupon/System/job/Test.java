package Coupon.System.job;

public class Test {
	public static void main(String[] args) {
		CouponExpirationDailyJob job = new CouponExpirationDailyJob();
		Thread t = new Thread(job, "job");
		job.setJobThread(t);
		t.start();
		try {
			Thread.sleep(35000);
		} catch (InterruptedException e) {

		}
		job.stop();
	}
}
