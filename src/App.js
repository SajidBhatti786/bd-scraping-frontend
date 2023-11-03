import { useEffect, useState } from "react";

function App() {
  const [appStatus, setAppStatus] = useState("None");
  // const getData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/api/books");
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //     } else {
  //       console.error("Failed to fetch data:", response.status);
  //     }
  //   } catch (error) {
  //     console.error("Failed to fetch data:", error);
  //   }
  // };

  const handleStart = async () => {
    try {
      const response = await fetch("https://bd-scraping-backend-production.up.railway.app/api/scrape/start", {
        method: "POST",
      });
      if (response.ok) {
        setAppStatus("Started successfully");
      } else {
        console.error("Failed to start scraping:", response.status);
        setAppStatus("Failed to start scraping");
      }
    } catch (error) {
      console.error("Failed to start scraping:", error);
      setAppStatus("Failed to start scraping");
    }
  };

  const handleStop = async () => {
    try {
      const response = await fetch("https://bd-scraping-backend-production.up.railway.app/api/scrape/stop", {
        method: "POST",
      });
      if (response.ok) {
        setAppStatus("Stopped successfully");
      } else {
        console.error("Failed to stop scraping:", response.status);
        setAppStatus("Failed to stop scraping");
      }
    } catch (error) {
      console.error("Failed to stop scraping:", error);
      setAppStatus("Failed to stop scraping");
    }
  };

  const handleGetData = async () => {
    try {
      const response = await fetch("https://bd-scraping-backend-production.up.railway.app/api/scrape/data");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setAppStatus(JSON.stringify(data)); // Set the data as a string in the status
      } else {
        console.error("Failed to get scraped data:", response.status);
        setAppStatus("Failed to get scraped data");
      }
    } catch (error) {
      console.error("Failed to get scraped data:", error);
      setAppStatus("Failed to get scraped data");
    }
  };

  useEffect(() => {
    // getData();
  }, []);

  return (
    <div className="App">
      <h1>Bookdepot.com Scraper</h1>
      <h2>Status: {appStatus}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleGetData}>Get Data</button>
    </div>
  );
}

export default App;
