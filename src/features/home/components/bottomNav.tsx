import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BottomNav = () => (
	<div className="bottom_nav_container">
        <div className="login_container">
            <Link to="/login"><a className="login_btn">Login</a></Link>
        </div>
        <div className="top_btn_nav">
            <Link to="#top"><a className="top_btn"><FontAwesomeIcon icon={faArrowUp} /></a></Link>
        </div>
	</div>
);
export default BottomNav;