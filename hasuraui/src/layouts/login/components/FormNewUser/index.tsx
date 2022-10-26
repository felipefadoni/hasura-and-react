import { AiOutlineRightCircle } from "react-icons/ai";
import { BiLock, BiUserCircle } from "react-icons/bi";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useLogin } from "../../context/hook";
import { AppLoginReducerActionTypes } from "../../context/reducer";
import { FormLogin } from "./styles";

export function FormNewUser() {
  const { state, handleChangeNewUser, handleSubmit } = useLogin();

  return (
    <FormLogin onSubmit={handleSubmit} autoComplete="off">
      <div className="form-login_input">
        <span>
          <AiOutlineRightCircle />
        </span>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          value={state.newUser.firstName}
          onChange={(e) =>
            handleChangeNewUser(
              e.target.value,
              AppLoginReducerActionTypes.NEW_USER_SET_FIRST_NAME
            )
          }
        />
      </div>
      <div className="form-login_input">
        <span>
          <AiOutlineRightCircle />
        </span>
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          value={state.newUser.lastName}
          onChange={(e) =>
            handleChangeNewUser(
              e.target.value,
              AppLoginReducerActionTypes.NEW_USER_SET_LAST_NAME
            )
          }
        />
      </div>
      <div className="form-login_input">
        <span>
          <BiUserCircle />
        </span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.newUser.email}
          onChange={(e) =>
            handleChangeNewUser(
              e.target.value,
              AppLoginReducerActionTypes.NEW_USER_SET_EMAIL
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
          value={state.newUser.password}
          onChange={(e) =>
            handleChangeNewUser(
              e.target.value,
              AppLoginReducerActionTypes.NEW_USER_SET_PASSWORD
            )
          }
        />
      </div>
      <div className="form-login_button">
        <button type="submit">create account</button>
      </div>
      <div className="form-login_new-user">
        <h4>Not a member?</h4>
        <Link to="/">Login</Link>
        <span>
          <BsArrowRightSquareFill />
        </span>
      </div>
    </FormLogin>
  );
}
