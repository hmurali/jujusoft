import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Login() {
	return (
		<div>
			<div className="container_text">
				<h4> Login </h4>
				<small className="text-muted">
					Not Signed Up? {' '}
					<NavLink style={{ textDecoration: 'none', color: '#0258AF' }} to="/signup">
						Sign Up
					</NavLink>
				</small>
			</div>
			<br />

			<form className="needs-validation" novalidate>
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
					Submit
				</button>
			</form>
		</div>
	);
}
