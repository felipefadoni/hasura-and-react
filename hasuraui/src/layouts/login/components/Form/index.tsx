import { BiLock, BiUserCircle } from "react-icons/bi";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FormLogin } from "./styles";

export function LoginForm() {
  return (
    <FormLogin>
      <div className="form-login_input">
        <span>
          <BiUserCircle />
        </span>
        <input type="email" placeholder="Email" />
      </div>
      <div className="form-login_input">
        <span>
          <BiLock />
        </span>
        <input type="password" placeholder="Password" />
      </div>
      <div className="form-login_button">
        <button>log in</button>
      </div>
      <div className="form-login_new-user">
        <h4>Not a member?</h4>
        <Link to="sign-up-now">Sign up now</Link>
        <span>
          <BsArrowRightSquareFill />
        </span>
      </div>
    </FormLogin>
  );
}
