import { useState } from "react";
import { useImmerReducer } from "use-immer";
import { CSSTransition } from "react-transition-group";
import { validEmail } from "./utility/Regex";

function LoginForm() {
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);

  // function validation(e) {
  //   e.preventDefault();
  //   if (email === null || email === "") {
  //     window.alert("please fill your Email!");
  //   }
  //   if (password === null || password === "") {
  //     window.alert("please fill your Password!");
  //   }
  // }
  const initialState = {
    email: {
      value: "",
      message: "",
      error: false,
    },
    password: {
      value: "",
      message: "",
      error: false,
    },
    summerError: {
      message: "",
    },
    count: 0,
  };

  function reducFunction(draft, action) {
    switch (action.type) {
      case "emailRequired": {
        console.log(action.value == "" || action.value == null);
        if (action.value == "" || action.value == null) {
          draft.email.error = true;
          draft.email.message = "Please enter your email!";
        } else {
          draft.email.error = false;
          // draft.email.message = ""
        }
        return;
      }

      case "validEmail": {
        if (
          action.value != "" &&
          action.value != null &&
          !validEmail.test(action.value)
        ) {
          draft.email.error = true;
          draft.email.message = "Please enter a valid email!";
        } else if (action.value != "" && action.value != null) {
          draft.email.error = false;
        }
        return;
      }
      case "passwordRequired": {
        if (action.value == "" || action.value == null) {
          draft.password.message = "Please enter your password!";
          draft.password.error = true;
        } else {
          draft.password.error = false;
          // draft.password.message = ""
        }
        return;
      }
      case "validationLogin": {
        if (draft.email.error || draft.password.error) {
          draft.summerError.message = "please enter  all required inputs";
        } else {
          draft.summerError.message = "";
          draft.summerError.count++;
        }

        return;
      }
    }
  }

  const [state, dispatch] = useImmerReducer(reducFunction, initialState);

  function validate(e) {
    e.preventDefault();
    console.log(e.target[0].value);

    dispatch({ type: "emailRequired", value: e.target[0].value });
    dispatch({ type: "validEmail", value: e.target[0].value });
    dispatch({ type: "passwordRequired", value: e.target[1].value });
    // console.log(e.target[1]);
    // dispatch({ type: "validationLogin" });
    // console.log("ali");
    // window.alert("ali ");
  }
  function onKeyDownEmail(e) {
    // if (e.key === "Tab") {
    //   // e.preventDefault()
    dispatch({ type: "emailRequired", value: e.target.value });
    dispatch({ type: "validEmail", value: e.target.value });
    // }
  }
  function onKeyDownPassword(e) {
    // if (e.key === "Tab") {
    // e.preventDefault()
    dispatch({ type: "passwordRequired", value: e.target.value });
    // }
  }
  return (
    <div className="dma-login text-black text-center  w-100 ">
      <h3>Please Login</h3>
      <form onSubmit={validate} className="dma-login-form">
        <div className="dma-form-group mt-md-4 d-flex flex-column">
          <input
            // onChange={(e) => {
            //   dispatch({ type: "emailRequired", value: e.target.value })
            // }}
            tabIndex="1"
            onBlur={onKeyDownEmail}
            type="text"
            placeholder="Email"
          />
          <CSSTransition
            in={state.email.error}
            classNames="formErrorMessage"
            timeout={330}
            unmountOnExit
          >
            <div className="alert alert-danger small formErrorMessage">
              {state.email.message}
            </div>
          </CSSTransition>
        </div>
        <div className="dma-form-group mt-md-4 d-flex flex-column">
          <input
            tabIndex="2"
            // onChange={(e) => {
            //   dispatch({ type: "passwordRequired", value: e.target.value })
            // }}
            onBlur={onKeyDownPassword}
            type="password"
            placeholder="Password"
          />
          <CSSTransition
            in={state.password.error}
            classNames="formErrorMessage"
            timeout={330}
            unmountOnExit
          >
            <div className="alert alert-danger small formErrorMessage">
              {state.password.message}
            </div>
          </CSSTransition>
        </div>

        <button
          tabIndex="3"
          type="submit"
          className="mt-4 dma-btn dma-btn__bg-yellow"
        >
          Login
        </button>
        {/* <p>{state.summerError.message}</p> */}
      </form>
    </div>
  );
}
export default LoginForm;
