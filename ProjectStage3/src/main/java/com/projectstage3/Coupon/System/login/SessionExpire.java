package com.projectstage3.Coupon.System.login;

import java.util.Map;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.projectstage3.web.LoginService;
import com.projectstage3.web.Session;

@Component
public class SessionExpire implements Runnable {

	public SessionExpire(Map<String, Session> tokensMap) {
		super();
		this.tokensMap = tokensMap;
	}

	private boolean quit = false;
//	@Autowired
	private Map<String, Session> tokensMap;

	@Autowired
	private LoginService login;

	@PostConstruct
	public void start() {
		SessionExpire exJob = new SessionExpire(tokensMap);
		Thread t1 = new Thread(exJob, "exJob");
		t1.start();
	}

	@Override
	public void run() {

		long currTime = System.currentTimeMillis();
		System.out.println("session: thread running");
		System.out.println("-----" + tokensMap);
		while (!quit) {
			System.out.println("session: iteration renewd");
			long halfHour = 1000 * 60 * 30;
//			long halfHour = 1000 * 5; // test only
			System.out.println(tokensMap);
			tokensMap.forEach((k, v) -> {
				System.out.println(k + "key");
				System.out.println(v + "value");
				if (v.getLastAcssesed() + halfHour < currTime)
					login.logout(k);
				System.out.println("logged out: " + k);

			});
			try {
				Thread.sleep(halfHour);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}

	@PreDestroy
	public void stop() {
		quit = true;
	}

}
