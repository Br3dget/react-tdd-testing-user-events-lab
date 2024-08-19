import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setInterests((prevInterests) =>
      checked ? [...prevInterests, value] : prevInterests.filter((interest) => interest !== value)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      {/* Newsletter Signup Form */}
      <h2>Newsletter Signup</h2>
      {submitted && (
        <div>
          <p>Thank you for signing up, {name}!</p>
          {interests.length > 0 && (
            <p>Your interests: {interests.join(', ')}</p>
          )}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
        </label>
        <fieldset>
          <legend>Select your interests:</legend>
          <label>
            <input
              type="checkbox"
              value="Technology"
              onChange={handleCheckboxChange}
            />
            Technology
          </label>
          <label>
            <input
              type="checkbox"
              value="Science"
              onChange={handleCheckboxChange}
            />
            Science
          </label>
          <label>
            <input
              type="checkbox"
              value="Art"
              onChange={handleCheckboxChange}
            />
            Art
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;

