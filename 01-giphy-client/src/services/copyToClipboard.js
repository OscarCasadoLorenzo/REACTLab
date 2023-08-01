export default async function copyToClipboard(id){
    const image = await fetch(`https://media1.giphy.com/media/l378BzHA5FwWFXVSg/giphy-downsized.gif` , {method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Headers':'*', 'Access-Control-Allow-Methods':'GET'}});

    const blob = await image.blob();
    try{
        await navigator.clipboard.write([
            new ClipboardItem({
                [blob.type]:blob,
            })
        ])
        console.log('Copy success!')
    }catch(e){
        console.error(e);
    }
}