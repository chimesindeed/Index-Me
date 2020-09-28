  
console.log('adapter.js was run')
const url = 'http://localhost:3001'
const cards = '/cards'
const baseURL = url
  
export async function getCards() {
  let response = await fetch(`${baseURL}${cards}`);
  let data = await response.json();
  
  return data;
}


export function createCard(front, back){ 
  const card = {
    front: front,
    back: back
  }

  return fetch(`${baseURL}${cards}`,{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({card})
    
    }).then(res => res.json())
}
  
  export function deleteCard(card){
    return fetch(`${baseURL}${cards}/${card}`, {
      method: 'delete',
      headers: {'Content-Type': 'application/json'}
    })
    
    .then(response => response.json())
    .then(data => console.log(data))
}
