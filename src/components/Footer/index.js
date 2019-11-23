import React from 'react';

const divStyle = {
	backgroundColor: '#e9ecef'
};

export default function Footer() {
	return (
		<div style={divStyle}>
			<footer id="sticky-footer" className="py-4 text-blue-50" data-component="Footer">
				<div className="container text-center">
					<small>Copyright 2019 &copy; Jujusoft</small>
				</div>
			</footer>
		</div>
	);
}
