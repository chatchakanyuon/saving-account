package bank.account.saving.service;

import bank.account.saving.model.Customer;
import bank.account.saving.model.request.AuthenticationRequest;
import bank.account.saving.model.request.RegistrationRequest;
import bank.account.saving.model.response.AuthenticationResponse;
import bank.account.saving.repository.CustomerRepository;
import bank.account.saving.repository.StakeholderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final StakeholderRepository stakeholderRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomerRepository customerRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public void register(RegistrationRequest registrationRequest) {
        var customerStakeholder = stakeholderRepository.findByName("CUSTOMER")
                .orElseThrow(() -> new IllegalArgumentException("Stakeholder not found"));
        var customer = Customer.builder()
                .email(registrationRequest.getEmail())
                .password(passwordEncoder.encode(registrationRequest.getPassword()))
                .cid(registrationRequest.getCid())
                .thaiName(registrationRequest.getThaiName())
                .englishName(registrationRequest.getEnglishName())
                .pin(registrationRequest.getPin())
                .stakeholders(List.of(customerStakeholder))
                .build();
        customerRepository.save(customer);
    }

    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
        var authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getEmail(),
                        authenticationRequest.getPassword()
                )
        );

        var claims = new HashMap<String, Object>();
        var customer = ((Customer)authentication.getPrincipal());

        claims.put("email", customer.getEmail());

        var jwtToken = jwtService.generateToken(claims, customer);

        return AuthenticationResponse.builder().token(jwtToken).build();
    }
}
