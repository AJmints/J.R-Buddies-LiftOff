package org.launchcode.bookmaster.user;

import java.util.Date;

public class UserLoanDTO {

    private Date loanDateOut;
    private Date LoanDateIn;
    private User user;

    public UserLoanDTO(Date loanDateOut, Date loanDateIn, User user) {
        this.loanDateOut = loanDateOut;
        LoanDateIn = loanDateIn;
        this.user = user;
    }

    public Date getLoanDateOut() {
        return loanDateOut;
    }

    public void setLoanDateOut(Date loanDateOut) {
        this.loanDateOut = loanDateOut;
    }

    public Date getLoanDateIn() {
        return LoanDateIn;
    }

    public void setLoanDateIn(Date loanDateIn) {
        LoanDateIn = loanDateIn;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
