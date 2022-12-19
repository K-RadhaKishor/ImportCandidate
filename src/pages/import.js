import React from 'react'

function import_can() {

  return (
    <div className='container'>
      <div className='row'>
      <span className="content1"><h2> Import Candidates</h2></span>
        <div className='col-md-11 my-2 mx-auto text-right d-grid gap-2 d-md-flex justify-content-md-end'>
          <input type="submit" value="Download template" className="btn btn-primary" /> </div>
        {/* class="form-control" id="inputPassword" placeholder='Select File to Import Candidates' */}

        <div className="">
        <span>
         {/* <span> <h3>select file</h3></span> */}
         <b>Select File</b>
        <input id="file-input" className="content6" type="file" placeholder="Select File to import Candidates" />
          <label for="file-input" id="file-ip-label" className="col-sm-2 col-form-label fw-lighter ms-5">
          <div id="file-input-label">
                <span>Select File to import candidates </span>
            <div style={{ float: "right" }}>

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">

                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />

                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />

              </svg>

            </div>
            </div>
            </label>
            </span>

          {/* <div class="col-sm-3">
            <input type="submit" value="Select file to import Candidates " className="btn btn-seondary active"></input>
          </div>
          
          <div class="col-sm-4"><button class="btn btn-primary me-md-2" type="button">Upload File</button>
            <button class="btn btn-primary" type="button">Cancel</button>
          </div> */}

            <span className="content3"><button className="btn btn-primary btn-xl ">Upload File</button></span>
            <span>{'   '}</span> 
            <span className="content4"><button className="btn btn-primary btn-xl">Cancel</button></span>

        </div>
      </div>
    </div>
  )
}

export default import_can


