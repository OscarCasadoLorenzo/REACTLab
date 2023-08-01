export default function fetchGifs(keyword){
    const apiKey = 'xgh6ixGMJ4L1Ze1vWRBwWQChTUGKGyul'
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}`

    return fetch(apiURL)
    .then(response => response.json())
    .then(response => {

        const {data} = response

        const gifs= data.map(image => {
            const {title, id} = image
            const url = image.images.original.webp
            return { title, id, url}
        })
        return gifs
    })
    .catch(error => document.body.appendChild = error)
}