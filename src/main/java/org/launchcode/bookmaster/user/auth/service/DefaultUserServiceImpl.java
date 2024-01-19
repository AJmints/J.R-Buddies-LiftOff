package org.launchcode.bookmaster.user.auth.service;


import org.launchcode.bookmaster.role.Role;
import org.launchcode.bookmaster.role.RoleRepository;
import org.launchcode.bookmaster.user.User;
import org.launchcode.bookmaster.user.UserRepository;
import org.launchcode.bookmaster.user.auth.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class DefaultUserServiceImpl implements DefaultUserService{

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepo;

	private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		 User user = userRepository.findByEmail(username);
	     return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), mapRolesToAuthorities(user.getRole()));
	}

	public Collection<? extends GrantedAuthority> mapRolesToAuthorities(Set<Role> roles){
		return roles.stream().map(role -> new SimpleGrantedAuthority(role.getRole())).collect(Collectors.toList());
	}

	@Override
	public User save(RegisterRequest registerRequest) {
		Role role = new Role();
		 role = roleRepo.findByRole(registerRequest.getRole());
		Set<Role> roles = new HashSet<Role>() ;
		roles.add(role);
		User user = new User();
		user.setFirstName(registerRequest.getFirstName());
		user.setLastName(registerRequest.getLastName());
		user.setPhone(registerRequest.getPhone());
		user.setEmail(registerRequest.getEmail());
		user.setAddress(registerRequest.getAddress());
		user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
		user.setRole(roles);

		return userRepository.save(user);
	}
}
