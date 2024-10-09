const obtenerMemes = async () => {

    const memesContainers = document.getElementById('list-memes');
    const memeTemplate = document.getElementById('meme');

    const request = await fetch('https://api.imgflip.com/get_memes');
    
    const response = await request.json();

    response.data.memes.slice(10, 18).forEach(meme => {
        const newMemeCard = memeTemplate.cloneNode(true);
        const img = newMemeCard.querySelector('img');
        img.src = meme.url;
        memesContainers.appendChild(newMemeCard);
    });
    memeTemplate.remove();
};

obtenerMemes();