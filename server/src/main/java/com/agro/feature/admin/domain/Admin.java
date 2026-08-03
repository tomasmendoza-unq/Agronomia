package com.agro.feature.admin.domain;

import com.agro.feature.user.domain.User;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "admins")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@EqualsAndHashCode(callSuper = true)
public class Admin extends User {
}
