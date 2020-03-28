import React from 'react';
import './Contact.css';

function Contact(props) {
	const data = props.contact;
	const location = props.contact.location;
	return (
		<div className="Contact">
			<h2>Contact</h2>
			<p>
				{data.email} <strong>| Email</strong>
			</p>
			<p>
				{data.phone} <strong>| Phone</strong>
			</p>
			<p>
				{data.website} <strong>| Website</strong>
			</p>
			<p>
				<strong>| Address</strong>
				<br />
				{location.address}
				<br />
				{location.postalCode}, {location.city}
				<br />
				{location.region}, {location.countryCode}
			</p>
		</div>
	);
}

export default Contact;
