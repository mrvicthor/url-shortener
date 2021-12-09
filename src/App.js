import axios from "axios";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import SignUp from "./components/signUp";

function App() {
  const [newUrl, setNewUrl] = useState("");
  const [items, setItems] = useState([]);
  const [errors, setError] = useState({});

  const validate = () => {
    const errors = {};

    if (newUrl.trim() === "") errors.link = "URL is required...";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  const addUrl = (shrtLink, longLink) => {
    // check if the items array is empty, increase the id or not
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    //the new object to be added to the array
    const newItem = { id, shrtLink, longLink };
    // create a new array that contains both old and new objects
    const listUrls = [...items, newItem];
    // update the state
    setItems(listUrls);
  };

  const handleChange = (e) => {
    setNewUrl(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if it is empty do nothing
    const errors = validate();
    console.log(errors);
    setError({ errors: errors || {} });
    if (errors) return;
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${newUrl}`)
      .then((res) => {
        const { original_link, short_link } = res.data.result;
        addUrl(short_link, original_link);
        setNewUrl("");
        console.log(res);
      })
      .catch((err) => {
        alert(`You may have typed a wrong URL${err.message}`);
      });
  };

  const copyToClipboard = (id) => {
    const shortLink = items.find((item) => item.id === id);
    navigator.clipboard.writeText(shortLink.shrtLink);
    console.log(shortLink);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route
          exact
          path="/"
          element={
            <Home
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              newUrl={newUrl}
              items={items}
              errors={errors}
              handleClick={copyToClipboard}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
