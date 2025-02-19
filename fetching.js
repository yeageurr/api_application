document.getElementById('cat_img').addEventListener('click', ()=>{
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => document.querySelector('#image-container').src = data[0].url);
})

document.getElementById('dog_img').addEventListener('click', ()=>{
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(image => document.querySelector('#image-container').src = image.message);
})

document.getElementById('quote').addEventListener('click', ()=>{
  fetch('https://quotes-api-self.vercel.app/quote')
    .then(response => response.json())
    .then(data => document.querySelector('#myquote').innerHTML = `"${data['quote']}" — ${data['author']}`);
    document.querySelector('#myquote').style.fontStyle = 'italic';
    document.querySelector('#myquote').style.wordWrap = 'break-word';
})

document.getElementById('remove_img').addEventListener('click', ()=>{
  document.getElementById('image-container').src = "";
})

document.getElementById('remove_quote').addEventListener('click', ()=>{
  let text = 'Quote will appear here.'
  document.getElementById('myquote').innerHTML = text;
  document.querySelector('#myquote').style.fontStyle = 'normal';
})
