package bank.account.saving;

import bank.account.saving.model.Stakeholder;
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
	public CommandLineRunner commandLineRunner(StakeholderRepository stakeholderRepository) {
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
		};
	}
}
