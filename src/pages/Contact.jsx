
import "./Contact.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";




const Contact = () => {

      const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rjncig6",   // 🔹 Replace with EmailJS Service ID
        "template_thy9evg",  // 🔹 Replace with EmailJS Template ID
        formData,
        "HcDBlEchXIK_j0GMt"    // 🔹 Replace with EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("❌ Something went wrong. Try again!");
        }
      );

    setFormData({
      name: "",
      email: "",
      phone: "",
      state: "",
      message: "",
    });
  };

  return (
    <div className="contact-main">
      <div className="contact-page">
      <div className="contact-left">
        <h1>Get In Touch</h1>
        <p>
          Reach out to our dedicated team — we’re just a message away. <br />
          You can also call us on:
        </p>
        <p>
          <b>For Product Enquiry</b> - <a href="tel:08043628278">08043628278</a>
        </p>
        <p>
          <b>For Service Enquiry</b> - <a href="tel:08043628277">08043628277</a>
        </p>
        <p>Available Mon - Sat between 9:30 AM to 6:30 PM</p>

        <h2>Need Further Support?</h2>
        <p>
          Not happy with how things turned out? Feel free to escalate
          the matter to our founder at <a href="mailto:ekv@beyondappliances.in">ekv@beyondappliances.in</a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>State</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="">Select a state</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Ladakh">Ladakh</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Puducherry">Puducherry</option>
        </select>

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Mobile Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        />

        <button type="submit">SUBMIT ➤</button>
      </form>
    </div>
    </div>
  )
}

export default Contact