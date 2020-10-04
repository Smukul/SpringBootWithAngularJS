package com.rest.webservice.restfulwebservice;

import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

    @Test
    public void testEncoder(){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encoded = encoder.encode("password@1234");
        System.out.println(encoded);
        encoded = encoder.encode("password");
        System.out.println(encoded);
    }
}
