import "./css/rooms.css";
import "./css/scrolling.css";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import $ from "jquery";
import load from "./img/loading.gif";

export default function DiningPayment() {
	let history = useHistory();
	var checkin = localStorage.getItem("checkinpre");
	var cod = localStorage.getItem("cod");
	var amt = localStorage.getItem("amt");
	var seats = localStorage.getItem("seatspre");
	var time = localStorage.getItem("timepre");
	var email = localStorage.getItem("email");
	var stringlist = localStorage.getItem("orderlist");
	const [user, setUser] = useState("");
	var res = { isAllowed: false };
	var order = JSON.parse(stringlist);

	async function check() {
		const params = {
			email: email,
			checkin: checkin.toString().slice(0, 10),
			seats: seats,
			time: time,
			order: order,
			token: localStorage.getItem("token"),
		};
		$(".loading").css("display", "block");
		await axios
			.post(
				"https://hotel-atlantis-project.herokuapp.com/indian_pre/add/",
				params
			)
			.then((response) => {
				$(".loading").css("display", "none");
				res = response.data;
				console.log(res);
			})
			.catch((error) => {
				$(".loading").css("display", "none");
				alert(error);
				console.log(error);
			});
	}
	async function handleSubmit(e) {
		e.preventDefault();

		res = { is: "a" };

		await check().then(() => {
			if (res.duplicate == 1) alert("Slot taken, Try another date ");
			if (res.done == 1) {
				localStorage.removeItem("checkinpre");
				localStorage.removeItem("cod");
				localStorage.removeItem("amt");
				localStorage.removeItem("seatspre");
				localStorage.removeItem("timepre");

				localStorage.removeItem("orderlist");
				history.push("/dining/confirm");
			}
		});
	}

	return (
		<div>
			<div class="loading" id="loading">
				<img class="load" src={load} />
			</div>
			<Helmet>
				<link rel="stylesheet" href="css/rooms.css" />
				<link rel="stylesheet" href="css/welcome.css" />
				<title>Hotel Atlantis | Payment</title>
			</Helmet>
			<div
				align="center"
				style={{
					fontFamily: "oxygen",
					marginLeft: "480px",
					maxWidth: "600px",
					paddingTop: "60px",
				}}
			>
				{" "}
				<br></br>
				<h2>Table available for reservation</h2>
				<br />
				<h3>Confirm your details</h3>
				<br />
				<hr />
				<p style={{ padding: "10px" }}>Email: {email}</p>
				<hr />
				<p style={{ backgroundColor: "#DCDCDC", padding: "10px" }}>
					Check-in date: <span id="Check_in">{checkin}</span>
				</p>
				<hr />
				<p style={{ padding: "10px" }}>Time: {time}</p>
				<hr />
				<p style={{ backgroundColor: "#DCDCDC", padding: "10px" }}>
					Seats : <span id="Seats">{seats}</span>
				</p>
				<hr />
				<hr />
				<p style={{ text: "bold", padding: "10px" }}>
					Amount payable: <span id="amount">{amt}</span>
				</p>
				<hr />
				<hr />
			</div>
			<br />
			<br />
			<div className="center-d" align="center">
				<form
					name="Payment"
					onSubmit={async (e) => {
						await handleSubmit(e);
					}}
				>
					<p style={{ display: "table-row" }}>
						<label>Card Number:</label>
						<input
							type="number"
							name="cardnumber"
							min="1000000000000000"
							max="9999999999999999"
							required
						/>
						&nbsp;
						<span id="cardno" />
						<br />
						<br />
					</p>
					<p style={{ display: "table-row" }}>
						<label>Card type:</label>
						Debit{" "}
						<input
							type="radio"
							name="card"
							defaultValue="debit"
							required
						/>
						Credit{" "}
						<input
							type="radio"
							name="card"
							defaultValue="credit"
							required
						/>
						<br />
						<br />
					</p>
					<p style={{ display: "table-row" }}>
						<label>CVV:</label>
						<input
							type="number"
							name="cvv"
							required
							min="000"
							max="999"
						/>
						<br />
						<br />
					</p>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<input
						type="submit"
						value="Confirm Payment"
						id="submitBtn-d"
						className="button"
						style={{
							width: "200px",
							height: "30px",
						}}
					/>
				</form>
				<br />
			</div>
		</div>
	);
}
