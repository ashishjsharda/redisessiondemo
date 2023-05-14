package com.example.backend;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RedisController {

    @GetMapping("/session-value")
    public String getSessionValue(HttpSession session) {
        session.setAttribute("key", "value");
        String value = (String) session.getAttribute("key");
        return value;
    }
}
