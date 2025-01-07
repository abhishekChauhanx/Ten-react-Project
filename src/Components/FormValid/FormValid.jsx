
import { useState } from "react";
import "./style.css";
const FormValid = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [userNameColor, setUserNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();
    if (userName.length > 8) {
      setUserNameError("");
      setUserNameColor("blue");
    } else {
      setUserNameError("UserName Must be 8 Letter Long!!");
      setUserNameColor("red");
    }

    if(email.includes("@gmail.com")){
        setEmailError("")
        setEmailColor("blue")
    }
    else{
        setEmailError("Please Give Gmail Email Id!!")
        setEmailColor("red")
    }

    if(password.length > 8 )
    {
        setPasswordError("")
        setPasswordColor("blue")
    }
    else{
        setPasswordError("Please Submit 8 Length of Password !!")
        setPasswordColor("red")
    }
    if( password != "" && confirmPassword === password){
        setConfirmPasswordError("")
        setConfirmPasswordColor("blue")
    }
    else{
        setConfirmPasswordError("Password is not Matched")
        setConfirmPasswordColor("red")
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <form>
          <input
            type="text"
            placeholder="Enter UserName • • "
            style={{ borderColor: userNameColor }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p className="erro">{userNameError}</p>

          <input
            type="email"
            placeholder="Email Email • • "
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="erro">{emailError}</p>

          <input
            type="password"
            placeholder="Enter Password • • "
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="erro">{passwordError}</p>

          <input
            type="password"
            placeholder="Enter Confirm Password • • "
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="erro">{confirmPasswordError}</p>

          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormValid;
