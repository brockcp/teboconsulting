import React from 'react';

function Body() {
  return (
    <div className="main">

       <div className="specializing">
          <h3>Specializing in:</h3>
          <div className="row">

            <div className="col-sm-6">
              <ul className="special1">
                <li>Environmental Impact Reports</li>
                <li>Initial Studies</li>
                <li>Negative Declarations</li>
              </ul>
            </div>

            <div className="col-sm-6">
             <ul className="special1">
               <li>NEPA Documentation</li>
               <li>Staff Reports</li>
               <li>Strategic Environmental Planning</li>
            </ul>
          </div>

       </div>
      </div>


      <div className="statement">
        <p>Susan has over 30 years of professional experience
         in environmental review, resource management, and land use planning.</p><p>
         She has prepared and managed environmental documents in compliance with
         the California Environmental Quality Act (CEQA).</p><p>Susan's responsibilities
         include preparation of environmental documents (EIRs, Initial Studies,
         NOPs, NOCs etc), agency consultation, project scheduling, budget
         supervision and control, subconsultant coordination, client contacts,
         and presentation and testimony before public agencies and private
         groups.</p><p> Susan worked in the public sector as a planner for over 11
         years which gives her a unique perspective on public-private client
         relationships.
        </p>
      </div>

      <div className="projects">
                  <h3>Noted Projects:</h3>
        <div className="row">

        <div className="col-md-6">
          <ul className="projects1">
            <li>Landmark Village EIR, Newhall Ranch, LA County</li>
            <li>Robinsons-May, Beverly Hills, CA</li>
            <li>Beverly Hilton, Beverly Hills, CA</li>
            <li>Mission Village EIR, Newhall Ranch, LA County</li>
            <li>Vista Canyon Specific Plan TOD, Santa Clarita, CA</li>
         </ul>
       </div>


       <div className="col-md-6">
        <ul className="projects1">
          <li>The Grove, Ventura, CA</li>
          <li>Kaiser Permanente, Ventura, CA</li>
          <li>Yorba Linda Town Center, Specific Plan EIR, Yorba Linda, CA</li>
          <li>North Valencia Annexation EIR, Santa Clarita, CA</li>
          <li>Azusa TOD Specific Plan EIR, Azusa, CA</li>
       </ul>
      </div>

    </div>
    </div>




  </div>
  );
}
export default Body;
