package com.assalielmehdi.h2h.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {
  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry
      .addResourceHandler("/**/*.css", "/**/*.html", "/**/*.js")
      .setCachePeriod(0)
      .addResourceLocations("classpath:/public/");

    registry.addResourceHandler("/", "/**")
      .setCachePeriod(0)
      .addResourceLocations("classpath:/public/index.html")
      .resourceChain(true)
      .addResolver(new PathResourceResolver() {
        @Override
        protected Resource getResource(String resourcePath, Resource location) {
          return location.exists() && location.isReadable() ? location : null;
        }
      });
  }
}