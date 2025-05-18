package bank.account.saving.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.security.Principal;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Table(name = "customers")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Customer implements UserDetails, Principal {
    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;
    private String password;
    private String cid;
    private String thaiName;
    private String englishName;
    private String pin;

    @ManyToMany(fetch = FetchType.EAGER)
    private List<Stakeholder> stakeholders;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.stakeholders
                .stream()
                .map(s -> new SimpleGrantedAuthority(s.getName()))
                .collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public String getName() {
        return englishName;
    }
}
