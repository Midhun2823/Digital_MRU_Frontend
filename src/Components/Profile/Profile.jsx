import React from "react";
import { useContext } from "react";
import { ItemContext } from "../../Context/ItemContext";

const Profile = () => {
  const { userdetails } = useContext(ItemContext);
  return (
    <div className="">
      <h1 className="text-center text-decoration-underline bg-danger p-3 border border-black">
        Profile
      </h1>
      <div className=" mx-5 px-5">
        {" "}
        <table className="table table-hover border border-dark">
          <tbody>
            <tr class="table-primary">
              <td className="fs-3 fw-bold">Name :</td>
              <td className=" fs-3">{userdetails.name}</td>
            </tr>
            <tr class="table-success">
              <td className="fs-3 fw-bold">Email :</td>
              <td className="fs-3">{userdetails.email}</td>
            </tr>
            <tr class="table-danger">
              <td className="col-md-6 fs-3 fw-bold">School :</td>
              <td className="col-md-4 fs-4">{userdetails.school}</td>
            </tr>
            <tr class="table-warning">
              <td className="col-md-6 fs-3 fw-bold">Course :</td>
              <td className="col-md-4 fs-4">{userdetails.course}</td>
            </tr>
            <tr class="table-info">
              <td className="col-md-6 fs-3 fw-bold">Branch :</td>
              <td className="col-md-4 fs-4">{userdetails.branch}</td>
            </tr>
            <tr class="table-light">
              <td className="col-md-6 fs-3 fw-bold">Designation :</td>
              <td className="col-md-4 fs-4">{userdetails.designation}</td>
            </tr>
            <tr class="table-dark">
              <td className="col-md-6 fs-3 fw-bold">Phonenumber : </td>
              <td className="col-md-4 fs-4">{userdetails.phonenumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
