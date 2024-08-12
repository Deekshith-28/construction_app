import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faDraftingCompass, faCouch, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div className="App">
      <div className="main">
        <header className="header ">
          <h1>The Future of</h1>
          <h2>HOME CONSTRUCTION</h2>
          <h3>introducing</h3>
          <h1 className="highlight">COST-PLUS CONTRACT</h1>
          <div className="save-badge">SAVE UP TO 10%</div>
        </header>
        <div className="form-container first">
          <h3>Quick Enquiry</h3>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Mobile no." />
            <input type="email" placeholder="Email" />
            <select>
              <option value="" disabled selected>Select your city</option>
              {/* Add city options here */}
            </select>
            <input type="text" placeholder="Pincode" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="expertise">
        <div class="row justify-content-center m-2 second">
          <div class="col-md-4">
            <div class="card mt-5">
              <div class="card-body">
                <h5 class="card-title text-center">Quick Enquiry</h5>
                <form>
                  <div class="form-group m-3 ">

                    <input type="text" class="form-control p-2" id="name" placeholder="Name" />
                  </div>
                  <div class="form-group m-3">

                    <input type="tel" class="form-control p-2" id="mobile" placeholder="Mobile no." />
                  </div>
                  <div class="form-group m-3">

                    <input type="email" class="form-control p-2" id="email" placeholder="Email" />
                  </div>
                  <div class="form-group m-3">

                    <select class="form-control p-2" id="city">
                      <option>Select your city</option>
                      <option>City 1</option>
                      <option>City 2</option>
                      <option>City 3</option>
                    </select>
                  </div>
                  <div class="form-group m-3">

                    <input type="text" class="form-control p-2" id="pincode" placeholder="Pincode" />
                  </div>
                  <button type="submit" class="btn btn-warning btn-block btn-wide">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <h1 className='pb-5'>Our <span className="highlight">Expertise</span></h1>
        <div className="expertise-icons">
          <div className="expertise-item">
            <FontAwesomeIcon icon={faHouseChimney} className="fa-4x" />
            <p>HOME CONSTRUCTION</p>
          </div>
          <div className="expertise-item">
            <FontAwesomeIcon icon={faDraftingCompass} className="fa-4x" />
            <p>ARCHITECTURE & STRUCTURAL DESIGN</p>
          </div>

          <div className="expertise-item">
            <FontAwesomeIcon icon={faCouch} className="fa-4x" />
            <p>INTERIOR DESIGNING</p>
          </div>
          <div className="expertise-item">
            <FontAwesomeIcon icon={faProjectDiagram} className="fa-4x" />
            <p>PLANNING & MANAGEMENT</p>
          </div>
        </div>

      </div>
    </div>
  );
}


