package bank.account.saving.model.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class RegistrationRequest {
    @Email
    @NotEmpty(message = "Email is required")
    @NotBlank(message = "Email is required")
    private String email;

    @NotEmpty(message = "Password is required")
    @NotBlank(message = "Password is required")
    private String password;

    @NotEmpty(message = "ID is required")
    @NotBlank(message = "ID is required")
    private String cid;

    @NotEmpty(message = "Thai Name is required")
    @NotBlank(message = "Thai Name is required")
    private String thaiName;

    @NotEmpty(message = "English Name is required")
    @NotBlank(message = "English Name is required")
    private String englishName;

    @NotEmpty(message = "PIN is required")
    @NotBlank(message = "PIN is required")
    @Size(min = 6, max = 6, message = "PIN must be 6 characters")
    private String pin;
}
