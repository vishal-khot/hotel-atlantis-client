import React from "react";
import { Helmet } from "react-helmet";
import "./css/contact.css";
export default function Contact() {
	return (
		<div>
			<Helmet>
				<title>Hotel Atlantis | Contact</title>
			</Helmet>
			<div className="parallax1-contact">
				<div className="overlayText-contact">
					<div className="justText-contact">Contact Us</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<hr color="#ffc800" />
			<div className="main">
				<div className="heading">
					<br />
					Contact Us
				</div>
				<br />
				<div style={{ fontSize: "20px" }}>
					Here are our contact details ;<br />
					<br />
					Phone : +91 22-27782183 <br />
					<br />
					Mail :{" "}
					<a
						style={{
							textDecoration: "none",
							color: "black",
							backgroundColor: "#ffc800",
							paddingLeft: "2px",
							paddingRight: "2px",
							paddingTop: "2px",
							paddingBottom: "2px",
						}}
						href="mailto:hotelatlantisproject@gmail.com"
					>
						hotelatlantisproject@gmail.com
					</a>
					<br />
					<br />
				</div>
			</div>
		</div>
	);
}
