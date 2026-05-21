package com.swp.exception;

public class PackageAlreadyExistException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public PackageAlreadyExistException() {
        super();
    }

    public PackageAlreadyExistException(String message) {
        super(message);
    }

    public PackageAlreadyExistException(String message, Throwable cause) {
        super(message, cause);
    }
}
