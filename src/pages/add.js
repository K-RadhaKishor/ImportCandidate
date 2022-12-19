import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import PhoneInput from "react-phone-number-input";

const Add = () => {
  const [value, setValue] = useState();
  // const phone = (
  //   <div>
  //     <PhoneInput
  //       placeholder="Enter phone number"
  //       value={value}
  //       onChange={setValue}
  //     />
  //   </div>
  // );

  return (
    
    <div className="container">
     {/* <div className="row">
       <h1 className="display-3 my-5 text-center">Add Candidate</h1> */}
       <div className=' mx-auto my-auto mt-5'>
                <h1>Add Candidate</h1>
            </div>
            <div> </div>
            <div class="row">
              <table>
              <tbody>
    <tr>
      <td> <div> </div></td>
      <td>Candidate Name</td>
      <td><input type="text" placeholder="Enter Name" className="form-control" />
</td>
<td> <div> </div></td>
<div> </div>
<td>Email</td>
      <td><div className="form-group mb-auto">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
</td></tr>
<tr>
      <td> <div> </div></td>
      <td>Contact</td>
      <td><input type="text" placeholder="Enter Phone" className="form-control" />
</td>
      
<td> <div> </div></td>
<div> </div>

<td>Role</td>
      {/* <td><div className="form-group mb-auto">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
</td> */}
<td>
<select class="form-select" aria-label="Default select example">
<option selected>Select Role</option>
<option value="1">TA</option>
<option value="2">PH</option>
<option value="3">Panel</option>
</select>
</td>
</tr>
<tr>
      <td> <div> </div></td>
      <td>PAN</td>
      <td><input type="text" placeholder="Enter PAN" className="form-control" />
</td>
<td> <div> </div></td>
<div> </div>

<td>Experience</td>
<td><input type="text" placeholder="Enter number of years" className="form-control" /></td>
</tr>
</tbody>
              </table>
              <div >  <button class="btn btn-primary me-2 mt-20" type="button">Submit</button>  <button class="btn btn-primary" type="button">Cancel</button></div>
        </div>
      </div>

  );
};

export default Add;
