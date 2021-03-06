package com.rest.webservice.restfulwebservice.jwtauth.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {
    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

    /**
     * {
     * "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTYwMjQyODg2NywiaWF0IjoxNjAxODI0MDY3fQ.4qNOsxcJsFM4VTMx-iix-xK9z_ISdOi55P6-c6AZiOeDnhKiVTQUKZLeTxmC7UDNc1Ulhixu-qawyufArCId0w"
     * }
     */

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
