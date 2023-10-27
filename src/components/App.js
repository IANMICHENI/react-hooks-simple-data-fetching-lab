// create your App component here
import React, { useState, useEffect } from "react";

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogImage(data.message);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that useEffect runs once after the initial render

  return (
    <div>
      {loading && <p>Loading...</p>}
      {dogImage && !loading && (
        <img src={dogImage} alt="A Random Dog" style={{ width: "300px" }} />
      )}
    </div>
  );
};

export default App;

