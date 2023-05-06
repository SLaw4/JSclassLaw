import {KEY} from "./key.js"

const options = {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${KEY}`,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        'model': 'gpt-3.5-turbo',
        'messages': [{'role': 'user', 'content': 'Can you teach me JS?'}]
    })
}

fetch('https://api.openai.com/v1/completions', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))