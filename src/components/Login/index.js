import React from 'react';

export default function Login() {
	return (
		<div>
			<div className="container_text">
				<h4> Login </h4>
				<small className="text-muted">
					Not Signed Up? <a href="signup.html">Sign Up</a>
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
