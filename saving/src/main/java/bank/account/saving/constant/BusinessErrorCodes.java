package bank.account.saving.constant;

import lombok.Getter;
import org.springframework.http.HttpStatus;

public enum BusinessErrorCodes {
    // 1000 - 1999: General Errors
    INVALID_REQUEST(1000, "Invalid request", HttpStatus.BAD_REQUEST),
    UNAUTHORIZED(1001, "Unauthorized", HttpStatus.UNAUTHORIZED),
    FORBIDDEN(1002, "Forbidden", HttpStatus.FORBIDDEN),
    NOT_FOUND(1003, "Not found", HttpStatus.NOT_FOUND),
    INTERNAL_SERVER_ERROR(1004, "Internal server error", HttpStatus.INTERNAL_SERVER_ERROR),

    // 2000 - 2999: User Errors
    USER_NOT_FOUND(2000, "User not found", HttpStatus.NOT_FOUND),
    USER_ALREADY_EXISTS(2001, "User already exists", HttpStatus.CONFLICT),
    USERNAME_NOT_FOUND(2002, "Username not found", HttpStatus.NOT_FOUND),
    USERNAME_ALREADY_EXISTS(2003, "Username already exists", HttpStatus.CONFLICT),
    INVALID_CREDENTIALS(2004, "Invalid credentials", HttpStatus.UNAUTHORIZED),
    ACCOUNT_LOCKED(2005, "Account locked", HttpStatus.LOCKED),
    ACCOUNT_DISABLED(2006, "Account disabled", HttpStatus.FORBIDDEN),
    PASSWORD_EXPIRED(2007, "Password expired", HttpStatus.UNAUTHORIZED),

    // 3000 - 3999: Account Errors
    ACCOUNT_NOT_FOUND(3000, "Account not found", HttpStatus.NOT_FOUND),
    ACCOUNT_ALREADY_EXISTS(3001, "Account already exists", HttpStatus.CONFLICT),
    ACCOUNT_NOT_ACTIVE(3002, "Account not active", HttpStatus.FORBIDDEN),
    ACCOUNT_NOT_AUTHORIZED(3003, "Account not authorized", HttpStatus.UNAUTHORIZED),
    ACCOUNT_BALANCE_INSUFFICIENT(3004, "Account balance insufficient", HttpStatus.BAD_REQUEST),
    ACCOUNT_TRANSACTION_LIMIT_EXCEEDED(3005, "Account transaction limit exceeded", HttpStatus.BAD_REQUEST),
    ACCOUNT_TRANSACTION_NOT_FOUND(3006, "Account transaction not found", HttpStatus.NOT_FOUND),
    ACCOUNT_TRANSACTION_ALREADY_EXISTS(3007, "Account transaction already exists", HttpStatus.CONFLICT),

    // 4000 - 4999: Transaction Errors
    TRANSACTION_NOT_FOUND(4000, "Transaction not found", HttpStatus.NOT_FOUND),
    TRANSACTION_ALREADY_EXISTS(4001, "Transaction already exists", HttpStatus.CONFLICT),
    TRANSACTION_NOT_AUTHORIZED(4002, "Transaction not authorized", HttpStatus.UNAUTHORIZED),
    TRANSACTION_AMOUNT_INVALID(4003, "Transaction amount invalid", HttpStatus.BAD_REQUEST),
    TRANSACTION_TYPE_INVALID(4004, "Transaction type invalid", HttpStatus.BAD_REQUEST),
    TRANSACTION_DATE_INVALID(4005, "Transaction date invalid", HttpStatus.BAD_REQUEST),
    TRANSACTION_STATUS_INVALID(4006, "Transaction status invalid", HttpStatus.BAD_REQUEST),;

    @Getter
    private final int code;

    @Getter
    private final String description;

    @Getter
    private final HttpStatus httpStatus;

    BusinessErrorCodes(int code, String description, HttpStatus httpStatus) {
        this.code = code;
        this.description = description;
        this.httpStatus = httpStatus;
    }
}
