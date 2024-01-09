package org.launchcode.bookmaster.user;

import java.util.Date;

public class UserLoanDTO {

    private Date loanDateOut;
    private Date loanDateIn;
    private User user;

    public UserLoanDTO(Date loanDateOut, Date loanDateIn, User user) {
        this.loanDateOut = loanDateOut;
        this.loanDateIn = loanDateIn;
        this.user = user;
    }

    public Date getLoanDateOut() {
        return loanDateOut;
    }

    public void setLoanDateOut(Date loanDateOut) {
        this.loanDateOut = loanDateOut;
    }

    public Date getLoanDateIn() {
        return loanDateIn;
    }

    public void setLoanDateIn(Date loanDateIn) {
        loanDateIn = loanDateIn;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
