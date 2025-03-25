import React from "react";



const LoginSignup = () => {
  return(
<section className="login-full-page">
        <div className="container">
        <div className="row">
        <div className="offset-md-4 col-md-5 w36">
        <div className="form-main-inner-box">
        	<div className="logo-box text-center">
  
                <h5 className="h4">Welcome Back</h5>
                <p>Sign In to Access Your Account</p>
            </div>
            <div className="social-box">
            <button className="social-login google"><img src="https://cdn.freebiesupply.com/logos/large/2x/google-icon-logo-png-transparent.png" alt="forge" /> Sign in with Google</button>
            

            <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">By accessing the site, I attest that I am at least 18 years old and agree to theTerms of Service.</label>
</div>           


            </div>
            <div className="lineory">
            <div class="line"></div>
            <p className="or"> or </p>
            <div class="line"></div>
            </div>

			<div className="box ">           
             <div className="form-group">
            <label>Email * </label>
            <input type="text" className="form-control" />
            </div>
             <div className="form-group">
            <label>Password * </label>
            <input type="text" className="form-control" />
            </div>
            <div className="forgpas">
            <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
  Remember me
  </label>
</div>
            <a className="passfor" href="/">Forgot password?</a>
            </div>
            <div className="form-group text-center">
				<button className="login-btn">  Login</button>
        <p className="pt-3 d-flex text-center">Don't have an account? <a href="/"> Register </a> </p>
     
            </div>
        
            
            </div>
            </div>
        </div>
        </div>
        
        
        
        </div>
    </section>
  );
};

export default LoginSignup;
