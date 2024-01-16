package org.launchcode.bookmaster.user;

import java.util.Date;

public class UserLoanDTO {

    private Integer id;
    private Date loanDateOut;
    private Date loanDateIn;
    private User user;

    public UserLoanDTO(Integer id, Date loanDateOut, Date loanDateIn, User user) {
        this.id = id;
        this.loanDateOut = loanDateOut;
        this.loanDateIn = loanDateIn;
        this.user = user;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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
        this.loanDateIn = loanDateIn;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
