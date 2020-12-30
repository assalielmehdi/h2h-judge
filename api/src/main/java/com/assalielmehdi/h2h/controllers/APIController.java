package com.assalielmehdi.h2h.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class APIController {
  @GetMapping(path = "/test")
  public ResponseEntity<String> test() {
    return ResponseEntity.ok("test");
  }
}
