package org.launchcode.bookmaster.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

//controller added for testing

@Controller
public class HelloController {

    @GetMapping
    @ResponseBody
    public String hello() {
        return "Hello World!";
    }
}
