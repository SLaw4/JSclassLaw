import {KEY} from "./key.js"

const options = new Headers({
    Headers: {
        'Authorization': 'Bearer',
        'Content-Type': 'application/json'
    }
})

fetch('https://api.openai.com/v1/completions', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))