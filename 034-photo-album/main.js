async function fetchImage() {
    const image = await fetch('https://jsonplaceholder.typicode.com/photos')
    const output = await image.json()
    output.forEach(function(obj) {
        output.push(obj.url)
        console.log(obj.url)
    })
    const imgUrl = obj.url
    const imgEl = document.createElement("img")
    imgEl.setAttribute('src', `${imgUrl}`)
    imgEl.classList.add('showcase')
    const imgDiv = document.querySelector(".imgDiv")
    imgDiv.appendChild(imgEl)
    //const getUrl = output.map(({url}) => url)
    //console.log(getUrl)
    // console.log(output[1].url)
    //document.getElementById("output").innerHTML= getUrl
}


// function renderImage() {
//     const imgUrl = output[1].url
//     const imgEl = document.createElement("img")
//     imgEl.setAttribute('src', `${imgUrl}`)
//     imgEl.classList.add('showcase')
//     const imgDiv = document.querySelector(".imgDiv")
//     imgDiv.appendChild(imgEl)
// }


// function fetchImage() {
//     fetch('')
//         .then(res=> res.json())
//         .then(result => {
//             console.log(result)
//             image.src = result.message
//         })
//         .catch(err=>console.log(err ))
// }


fetchImage()