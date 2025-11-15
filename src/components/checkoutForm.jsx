import { useState } from "react";

export default function CheckoutForm(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.handleCheckOut(formData);
  }

  function handleChange(event) {
    const inputName = event.target.name;
    const value = event.target.value;

    const newFormData = { ...formData };
    newFormData[inputName] = value;
    setFormData(newFormData);
  }

  function restartForm() {
    setFormData({
      username: "",
      email: "",
      phone: "",
    });
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h4>Personal information</h4>

        <div style={{ display: "flex", flexWrap: "wrap", width: "420px" , justifyContent: "center", gap: "20px"}}>
          <label>
            Name
            <input
              onChange={handleChange}
              name="username"
              required
              type="text"
              placeholder="name"
            />
          </label>

          <label>
            Phone
            <input
              onChange={handleChange}
              name="phone"
              required
              type="tel"
              placeholder="Phone number"
            />
          </label>

          <label>
            Email
            <input
              onChange={handleChange}
              name="email"
              required
              type="email"
              placeholder="Email@email.com"
            />
          </label>
        </div>

        <button type="submit">Confirm</button>
        <hr/>
        <button onClick={restartForm} type="button">
          Restart
        </button>
      </form>
    </section>
  );
}
