import { BiLock, BiUserCircle } from "react-icons/bi";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useLogin } from "../../context/hook";
import { AppLoginReducerActionTypes } from "../../context/reducer";
import { FormLogin } from "./styles";

export function LoginForm() {
  const { state, handleChangeLogin, handleSubmitLogin } = useLogin();

  return (
    <FormLogin autoComplete="off" onSubmit={handleSubmitLogin}>
      <div className="form-login_input">
        <span>
          <BiUserCircle />
        </span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={(e) =>
            handleChangeLogin(
              e.target.value,
              AppLoginReducerActionTypes.SET_EMAIL
            )
          }
        />
      </div>
      <div className="form-login_input">
        <span>
          <BiLock />
        </span>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={state.password}
          onChange={(e) =>
            handleChangeLogin(
              e.target.value,
              AppLoginReducerActionTypes.SET_PASSWORD
            )
          }
        />
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
