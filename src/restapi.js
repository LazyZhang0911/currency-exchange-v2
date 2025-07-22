import fetch from "node-fetch";

export function fetchData(url) {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log("Got data from API:" + data);
            for (const key in data) {
                console.log(`${key}: ${data[key]}`);
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
        
}

