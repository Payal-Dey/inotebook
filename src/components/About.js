import React from 'react';

const About = () => {
  return (
    <div>
      <h2 className='text-center my-3'>About iNotebook</h2>
      <div className="card">
        <div className="card-body fst-italic">
        <b className='fs-5'>iNotebook</b> is a MERN Stack Application for managing personal notes on the cloud. Create your account and get started. Create your own notes and save them to iNotebook. Quickly and easily manage your personal notes on the cloud. It's totally safe and secure because you must log in using a valid email to access your notes. We do not share your personal information with any third party.
        </div>
      </div>
      <h5 className='text-center my-3 fst-italic'>Feature of iNotebook</h5>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Easy to use
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>iNotebook</strong> is really simple and easy to use. User can access their notes anytime and anywhere using their valid email and password. User have to create an account in the app first to get started. And then Login into your account and add, update, delete notes in the <i>iNotebook</i> app. It is your go to app to save your notes safe and securely in the cloud on the go. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Secure and Free
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <strong>iNotebook</strong> is a notebook in the cloud which is free to use. It is completely free to use. User can create an account in the app for free and use the app completely free of cost. The app requires an new user to signup first to use the app. And an existing user can log into their account to access their notes. That means it is completely secured from third party access.
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center fixed-bottom text-muted">
        Made by PAYAL DEY
      </div>
    </div>
  )
}

export default About
