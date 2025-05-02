package com.example.helloworld_api;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HelloWorldController {

    @GetMapping("/hello")
    public String SayHello(){
       return "Hello World!";
    }
}
