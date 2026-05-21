package com.swp.exception;

public class EmailAlreadyExistException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public EmailAlreadyExistException() {
        super();
    }

    public EmailAlreadyExistException(String message) {
        super(message);
    }

    public EmailAlreadyExistException(String message, Throwable cause) {
        super(message, cause);
    }
}
