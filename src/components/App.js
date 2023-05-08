// create your App component here
// create your App component here
import React, { useState, useEffect } from "react";

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Set loading state to true while fetching data
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const jsonData = await response.json();
        setDogImage(jsonData.message); // Update state with the fetched dog image
        setIsLoading(false); // Set loading state to false after receiving data
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading state to false in case of error
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  return (
    <div>
      {isLoading ? ( // Render "Loading..." when data is being fetched
        <p>Loading...</p>
      ) : (
        // Render dog image when data is received
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;