const axios = require("axios");

console.log("Starting the server...");

async function fetchData() {
    try {
        // Replace ":endpoint" with a valid endpoint, e.g., "users"
        const response = await axios.get("https://678e9ad5a64c82aeb120e292.mockapi.io/justtayyabkhan/todos");
        
        // Assuming response.data is an array, use .length
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

fetchData();
