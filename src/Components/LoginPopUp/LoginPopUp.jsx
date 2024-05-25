import React, { useContext, useEffect, useState } from "react";
import Cross_Icon_For_Login from "../../assets/Cross_Icon_For_Login.png";
import "./LoginPopUp.css";
import { ItemContext } from "../../Context/ItemContext";
import axios from "axios"
import { toast } from "react-toastify";

const LoginPopUp = ({ setShowLogin }) => {

  const{url,setToken} = useContext(ItemContext)

  const [currentState, setCurrentState] = useState("Login");
  const [currentLoginState, setCurrentLoginState] = useState("Login");

  // const [selectedSchool, setSelectedSchool] = useState("");
  // const [selectedCource, setSelectedCource] = useState("");
  // const [selectedBranch, setSelectedBranch] = useState("");
  // const [selectedSection, setSelectedSection] = useState("");
  // const [selectedDesignation, setSelectedDesignation] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    school: "",
    course: "",
    branch: "",
    section: "",
    designation: "",
    phonenumber: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  
  
  // When ever the data is updated this fuction will be excueted
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  
  // For user login we create function
  const onLogin = async (event) => {
    event.preventDefault()

    //now we create the logic to call the apis
    // to call the api we need axios support in frontend
    // create instance or the url
    let newUrl =url;
    if(currentState === "Login") {
      newUrl += "/api/user/login"
    } else{
      newUrl += "/api/user/register"
    }

    // call the api
    // this url works in any situation like login or register
    const response = await axios.post(newUrl, data)

    if (response.data.success) {
      // if it comes to here it means we logged in or registered in 
      // we will get one token 
      setToken(response.data.token)
      // save this token in local storage 

      toast.success("Logged In Successfully");
      localStorage.setItem("token", response.data.token)
      setShowLogin(false)
    } else {
      toast.error(response.data.message);
    }
  } 



  // Details of Customer Profession
  const Schools = [
    { label: "Select the School", value: "select" },
    { label: "School Of Engineering", value: "SOE" },
    { label: "School Of Sciences", value: "SOS" },
    { label: "School Of Allied Healthcare Sciences", value: "SOAHS" },
    { label: "School Of Management", value: "SOM" },
  ];

  const cources = {
    SOE: ["Select the Cource", "B_Tech", "M_Tech", "Ph_D"],
    SOS: [
      "Select the Cource",
      "Science_UG_Programs",
      "Science_PG_Programs",
      "Ph_D",
    ],
    SOAHS: [
      "Select the Cource",
      "Allied_Health_Sciences_UG",
      "Physiotherapy_Cources_UG",
      "M_Sc_Cources_PG",
    ],
    SOM: ["Select the Cource", "BBA_Programs", "MBA_Programs"],
  };
  const branches = {
    B_Tech: [
      "Select the Branch",
      "CSE",
      "CSE_AIML",
      "CSE_DS",
      "CSE_CS",
      "CSE_IOT",
      "IT",
    ],
    M_Tech: [
      "Select the Branch",
      "Computer Science & Engineering",
      "Machine Learning & Deep Learning",
      "Big Data Analytics",
      "Cloud Computing",
      "Embedded Systems",
    ],
    Ph_D: ["Select the Branch", "Upcoming"],
    Science_UG_Programs: [
      "Select the Branch",
      "B.Sc - Computer Science",
      "B.Sc - Data Science",
      "B.Sc - Data Analytics",
      "B.Sc - Maths Statistics Computers",
      "B.Sc - Cyber Security",
      "B.Sc - Digital Forensics",
      "B.Sc - AI & ML",
      "B.Sc - Multimedia & Animation",
      "B.Sc - Visual Communication",
    ],
    Science_PG_Programs: ["Select the Branch", "Guadalajara"],
    Allied_Health_Sciences_UG: ["Select the Branch", "Guadalajara"],
    Physiotherapy_Cources_UG: ["Select the Branch", "Guadalajara"],
    M_Sc_Cources_PG: ["Select the Branch", "Guadalajara"],
    BBA_Programs: ["Select the Branch", "Guadalajara"],
    MBA_Programs: ["Select the Branch", "Guadalajara"],
  };

  const sections = {
    CSE: ["Select the Section", "Alpha", "Beta", "Gamma", "Delta"],
  };

  const designation = [
    { label: "Select Designation" },
    { label: "Student" },
    { label: "Faculty" },
  ];

  //Details of Customer profession event handlers
  // const handleSchoolChange = (event) => {
  //   setSelectedSchool(event.target.value);
  // };

  // const handleCourceChange = (event) => {
  //   setSelectedCource(event.target.value);
  // };

  // const handleBranchChange = (event) => {
  //   setSelectedBranch(event.target.value);
  // };
  // const handleSectionChange = (event) => {
  //   setSelectedSection(event.target.value);
  // };
  // const handleDesignationChange = (event) => {
  //   setSelectedDesignation(event.target.value);
  // };
  console.log(currentLoginState + " currentLoginState");
  console.log(currentState + " currentState");
  return (
    <div className="login-popup">
      <form
        onSubmit={onLogin}
        className="login-popup-container border border-dark border-4"
      >
        <div className="position-relative">
          <h1>{currentState}</h1>

          <img
            className="position-absolute top-0 end-0 hovermanual p-2"
            width="48"
            src={Cross_Icon_For_Login}
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div>
          {currentState === "Sign Up" || currentState === "Business Sign Up" ? (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              className="form-control  mb-2"
              placeholder="Your Name"
              required
            />
          ) : (
            <></>
          )}
          <div className="input-group mb-2">
            <input
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              className="form-control"
              placeholder="College Mail Id"
            />
            <span className="input-group-text rounded-end-2" id="basic-addon2">
              @mallareddyuniversity.ac.in
            </span>
{/*             <div id="emailHelp" className="form-text ms-1">
              We'll never share your email with anyone else.
            </div> */}
          </div>
          {currentState === "Sign Up" ? (
            <div className="bg-secondary bg-opacity-25 rounded p-1 mb-2">
              <select
                name="school"
                onChange={onChangeHandler}
                value={data.school}
                className="form-select mb-2"
                aria-label="Default select example"
              >
                {Schools.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              <div>
                {data.school != "" ? (
                  <select
                    name="course"
                    onChange={onChangeHandler}
                    value={data.course}
                    className="form-select mb-2"
                    aria-label="Default select example"
                  >
                    {cources[data.school] &&
                      cources[data.school].map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                  </select>
                ) : (
                  <></>
                )}
              </div>
              <div className="">
                {data.course != "" ? (
                  <select
                    name="branch"
                    onChange={onChangeHandler}
                    value={data.branch}
                    className="form-select mb-2"
                    aria-label="Default select example"
                  >
                    {branches[data.course] &&
                      branches[data.course].map((branch) => (
                        <option key={branch} value={branch}>
                          {branch}
                        </option>
                      ))}
                  </select>
                ) : (
                  <></>
                )}
              </div>
              <div className="">
                {data.branch != "" ? (
                  <select
                    name="section"
                    onChange={onChangeHandler}
                    value={data.section}
                    className="form-select mb-2"
                    aria-label="Default select example"
                  >
                    {sections[data.branch] &&
                      sections[data.branch].map((branch) => (
                        <option key={branch} value={branch}>
                          {branch}
                        </option>
                      ))}
                  </select>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="">
            <div className=" mb-2">
              <input
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Password"
                aria-describedby="emailHelp"
                required
              />
            </div>
            {currentState === "Sign Up" ||
            currentState === "Business Sign Up" ? (
              <div className="mb-2">
                <input
                  name="confirmpassword"
                  onChange={onChangeHandler}
                  value={data.confirmpassword}
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          {currentState === "Sign Up" ? (
            <div className="">
              <select
                name="designation"
                onChange={onChangeHandler}
                value={data.designation}
                className="form-select mb-2"
                aria-label="Default select example"
              >
                {designation.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <></>
          )}
          {currentState === "Sign Up" || currentState === "Business Sign Up" ? (
            <div className="">
              <input
                name="phonenumber"
                type="number"
                onChange={onChangeHandler}
                value={data.phonenumber}
                className="form-control mb-2"
                placeholder="Enter Phone Number"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <button type="submit" className="btn btn-outline-danger fw-bold fs-6">
          {currentState === "Sign Up" ? "Create An Account" : "Login"}
        </button>
        <div className="hstack from-group">
          <input type="checkbox" className="p-5" required></input>
          <p className="m-2">Accept terms and conditions</p>
        </div>
        {currentState === "Login" || currentState === "Business Login" ? (
          <p>
            Create a new account?{" "}
            <span
              className="text-danger fw-bold fs-6 text-decoration-underline"
              onClick={() => {
                setCurrentState("Sign Up");
                setCurrentLoginState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <></>
        )}
        {currentState === "Sign Up" || currentState === "Business Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              className="text-danger fw-bold fs-6 text-decoration-underline"
              onClick={() => {
                setCurrentState("Login");
                setCurrentLoginState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <></>
        )}
        {currentState === "Login" && currentLoginState === "Login" ? (
          <p>
            Login to Business account?{" "}
            <span
              className="text-danger fw-bold fs-6 text-decoration-underline"
              onClick={() => {
                setCurrentLoginState("Business Login");
                setCurrentState("Business Login");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <></>
        )}
        {currentState === "Business Login" &&
        currentLoginState === "Business Login" ? (
          <p>
            Login to User account?{" "}
            <span
              className="text-danger fw-bold fs-6 text-decoration-underline"
              onClick={() => {
                setCurrentLoginState("Login");
                setCurrentState("Login");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <></>
        )}

        {currentState === "Sign Up" && currentLoginState === "Sign Up" ? (
          <p>
            Sign Up to Business account?{" "}
            <span
              className="text-danger fw-bold fs-6 text-decoration-underline"
              onClick={() => {
                setCurrentLoginState("Business Sign Up");
                setCurrentState("Business Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <></>
        )}
        {currentState === "Business Sign Up" &&
        currentLoginState === "Business Sign Up" ? (
          <p>
            Sign up to User account?{" "}
            <span
              className="text-danger fw-bold fs-6 text-decoration-underline"
              onClick={() => {
                setCurrentLoginState("Sign Up");
                setCurrentState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
