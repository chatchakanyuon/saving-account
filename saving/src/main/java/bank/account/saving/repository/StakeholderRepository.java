package bank.account.saving.repository;

import bank.account.saving.model.Stakeholder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StakeholderRepository extends JpaRepository<Stakeholder, Long> {
    Optional<Stakeholder> findByName(String name);
}

