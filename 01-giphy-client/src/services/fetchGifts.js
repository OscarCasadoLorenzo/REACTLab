export default function fetchGifts(){
    const apiKey = 'xgh6ixGMJ4L1Ze1vWRBwWQChTUGKGyul'
    const apiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`

    return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
        const {data} = response
        const gifts = data.map(image =>
            image.images.original.webp
        )

        console.log(gifts)
        return gifts
    })
    .catch(error => document.body.appendChild = error)
}