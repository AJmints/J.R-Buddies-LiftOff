import { useLocation } from "react-router-dom";
import UserLoans from "../components/UserLoans";
import UserReviews from "../components/UserReviews";

const UserAccount = () => {
    const location = useLocation();
    const userData = location.state;

    return <div className="container mt-5">
        <h1>User Account</h1>
        <div>
            <UserLoans userData={userData}/>
        </div>
        <div>
            <UserReviews userData={userData}/>
        </div>
    </div>
};

export default UserAccount;