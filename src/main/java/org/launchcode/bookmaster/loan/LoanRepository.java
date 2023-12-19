package org.launchcode.bookmaster.loan;

import org.springframework.data.repository.CrudRepository;

public interface LoanRepository extends CrudRepository<Loan,Integer> {
}
