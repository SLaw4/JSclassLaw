const url = 'https://www.thenewsapi.com/v1/news/top?'
api_token = 


async function getData() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

getData()