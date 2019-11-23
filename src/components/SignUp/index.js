import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Signup() {
	return (
		<div>
			<div className="container_text">
				<h4> Sign Up </h4>
				<small className="text-muted">
					{/* Returning User? <a href="/login">Login</a> */}
					Returning User? {' '}
					<NavLink style={{ textDecoration: 'none', color: '#0258AF' }} to="/login">
						Login
					</NavLink>
				</small>
			</div>
			<br />

			<form className="needs-validation" novalidate>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						id="exampleFirstName"
						placeholder="First Name"
						required
					/>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" id="exampleLastName" placeholder="Last Name" required />
				</div>
				<div className="form-group">
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Email Address"
						required
					/>
					<small id="emailHelp" className="form-text text-muted">
						We'll never share your email with anyone else.
					</small>
				</div>
				<div className="form-group">
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Password"
						required
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					<NavLink style={{ textDecoration: 'none', color: '#fff' }} to="/results">
						Submit
					</NavLink>
				</button>
			</form>
			{/* 
    <script>
   
        (function () {
            'use strict';
            window.addEventListener('load', function () {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        })();
    </script> */}
		</div>
	);
}
