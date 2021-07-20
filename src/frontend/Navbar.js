import React, { useState } from "react";
import "./css/style.css";
import logo from "./css/img/logo1.png";
import "./css/welcome1.css";
import scrolling from "./js/scrolling.js";
function Navbar() {
	scrolling();
	return (
		<div className="navbar" id="navbar">
			<hr style={{ width: "100%", height: "2px" }} />
			<a href="/" className="img">
				<img
					src={logo}
					alt="Home"
					title="Home"
					style={{ width: "118px", height: "52px", float: "left" }}
				/>
			</a>
			<a href="/profile" className="button1" style={{ width: "100px" }}>
				<span>Profile</span>
			</a>
			<a href="/rooms" className="button1" style={{ width: "160px" }}>
				<span>Book a Room</span>
			</a>
			<a href="/contact" className="button2" style={{ width: "130px" }}>
				<span>Contact Us</span>
			</a>
			<a href="/dining" className="button1" style={{ width: "90px" }}>
				<span>Dining</span>
			</a>
			<a href="/feedback" className="button1" style={{ width: "120px" }}>
				<span>Feedback</span>
			</a>
			<a href="/event" className="button2" style={{ width: "90px" }}>
				<span>Events</span>
			</a>
			<a href="/private" className="button1" style={{ width: "150px" }}>
				<span>Private Events</span>
			</a>
			<a href="/gallery" className="button2" style={{ width: "100px" }}>
				<span>Gallery</span>
			</a>

			<hr style={{ width: "100%", height: "2px" }} />
		</div>
	);
}

export default Navbar;
