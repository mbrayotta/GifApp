
export const getGifs = async( category ) =>{
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Ff30NUci49XCTwEVNzJ3lDE26Wz99OUw`
    const req = await fetch(url)
    const {data} = await req.json()
    
    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs
}