//SOLUTION
async function renderPhotos(photos) {
    photos.forEach(img => {
        const imgEl = document.createElement('img')
        imgEl.setAttribute('src', img.thumbnailUrl)
        document.getElementById('output').appendChild(imgEl)
    })
}

async function getPhotos() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos')
        return await data.json()
    } catch(error) {
        console.log(`ERROR ${error}`)
    }
    
    
}

async function start() {
    const photos = await getPhotos()
    await renderPhotos(photos)
}

start()
//MY CODE
// async function fetchImage() {
//     const image = await fetch('https://jsonplaceholder.typicode.com/photos')
//     const output = await image.json()
//     output.forEach(function(obj) {
//         output.push(obj.url)
//         console.log(obj.url)
//     })
//     const imgUrl = obj.url
//     const imgEl = document.createElement("img")
//     imgEl.setAttribute('src', `${imgUrl}`)
//     imgEl.classList.add('showcase')
//     const imgDiv = document.querySelector(".imgDiv")
//     imgDiv.appendChild(imgEl)
//     //const getUrl = output.map(({url}) => url)
//     //console.log(getUrl)
//     // console.log(output[1].url)
//     //document.getElementById("output").innerHTML= getUrl
// }


// // function renderImage() {
// //     const imgUrl = output[1].url
// //     const imgEl = document.createElement("img")
// //     imgEl.setAttribute('src', `${imgUrl}`)
// //     imgEl.classList.add('showcase')
// //     const imgDiv = document.querySelector(".imgDiv")
// //     imgDiv.appendChild(imgEl)
// // }


// // function fetchImage() {
// //     fetch('')
// //         .then(res=> res.json())
// //         .then(result => {
// //             console.log(result)
// //             image.src = result.message
// //         })
// //         .catch(err=>console.log(err ))
// // }


// fetchImage()