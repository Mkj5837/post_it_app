import user from "../Images/user.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const navigate = useNavigate();

  const email = useSelector((state) => state.users.user.email);
  const name = useSelector((state) => state.users.user.name);
  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, [email]);

  return (
    <div>
      <img src={user} className="userImage" />

      <p>
        {name}

        <br />
      </p>
    </div>
  );
};

export default Profile;
