import { Link } from "react-router-dom";


const TermsAndConditions = () => {
    return (
        <div>
            <h3>This is our terms and conditions</h3>
            <p>Go back to <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default TermsAndConditions;