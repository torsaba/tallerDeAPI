const API_URL = "https://jsonplaceholder.typicode.com/users";

fetch(API_URL)
    .then(response => response.json)
    .then(data => console.log(data))