import UserLoans from "../components/UserLoans";
import UserReviews from "../components/UserReviews";

const UserAccount = () => {

    return <div className="container mt-5">
        <h1>User Account</h1>
        <div>
            <UserLoans />
        </div>
        <div>
            <UserReviews />
        </div>
    </div>
};

export default UserAccount;