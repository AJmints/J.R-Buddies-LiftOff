package org.launchcode.bookmaster.role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/role")
@CrossOrigin
public class RoleController {

    @Autowired
    private RoleRepository roleRepository;

    @PostMapping
    public Role saveRole(@RequestBody Role newRole) {
        return roleRepository.save(newRole);
    };

    @GetMapping
    public Iterable<Role> getAllRole(){
        return roleRepository.findAll();
    }

    @DeleteMapping("/{roleId}")
    public void deleteRole(@PathVariable Integer roleId) {
        roleRepository.deleteById(roleId);
    }


}

