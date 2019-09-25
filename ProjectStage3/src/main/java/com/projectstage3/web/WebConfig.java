package com.projectstage3.web;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
@ComponentScan(basePackages = { "com.projectstage3" })
public class WebConfig {

	public static class MapWrapper {
		private Map<String, Session> tokensMap;

		public Map<String, Session> getTokensMap() {
			return tokensMap;
		}

		public void setTokensMap(Map<String, Session> tokensMap) {
			this.tokensMap = tokensMap;
		}

	}

	@Bean
	public Map<String, Session> tokensMap() {
		return new HashMap<>();

	}

	@Bean
	public MapWrapper mapWrapper() {
		return new MapWrapper();

	}

	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.any()).build();
	}
}
