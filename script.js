
const API_URL = "https://jsonplaceholder.typicode.com/users";
const form = document.getElementById("form");


const saveForm = form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const date = document.getElementById("date");

    const info = {
        name: name.value,
        surname: surname.value,
        date: date.value
    };
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(info),
    };

    fetch(API_URL, options)
        .then(data => {
            if (!data.ok) {
                throw Error(data.status);
            }
            return data.json();
        })
        .then(info => {
            console.log(info);
        })
        .catch(e => console.log(e));
});


