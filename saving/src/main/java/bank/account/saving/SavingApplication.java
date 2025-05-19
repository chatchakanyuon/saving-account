package bank.account.saving;

import bank.account.saving.model.Customer;
import bank.account.saving.model.Stakeholder;
import bank.account.saving.repository.CustomerRepository;
import bank.account.saving.repository.StakeholderRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SavingApplication {

    public static void main(String[] args) {
        SpringApplication.run(SavingApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(
            StakeholderRepository stakeholderRepository,
            CustomerRepository customerRepository
    ) {
        return args -> {
            if (stakeholderRepository.findByName("CUSTOMER").isEmpty()) {
                stakeholderRepository.save(Stakeholder.builder()
                        .name("CUSTOMER")
                        .build());
            }

            if (stakeholderRepository.findByName("TELLER").isEmpty()) {
                stakeholderRepository.save(Stakeholder.builder()
                        .name("TELLER")
                        .build());
            }

            if (customerRepository.findByEmail("teller@mail.com").isEmpty()) {
                customerRepository.save(Customer.builder()
                        .email("teller@mail.com")
                        .password("teller_password")
                        .cid("111111111111")
                        .thaiName("เทลเลอร์")
                        .englishName("Teller")
                        .pin("111111")
                        .build());
            }
        };
    }
}
