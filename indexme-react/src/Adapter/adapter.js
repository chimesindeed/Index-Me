class Adapter {

  constructor() {
    console.log('adapter.js was run')
    const url = 'http://localhost:3001'
    const cards = '/cards'
    this.baseURL = url
    this.cards = cards
  }

  async getCards(){
    let response = await fetch(`${this.baseURL}${this.cards}`);
    let data = await response.json();
    return data;
  }


 createItem(name, price){ 
  const item = {
    name: name,
    price: price
  }
  return fetch(`${this.baseURL}${this.items}`,{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({item})
    }).then(res => res.json())
  }
  deleteItem(item){
    return fetch(`${this.baseURL}${this.items}/${item}`, {
      method: 'delete',
      headers: {'Content-Type': 'application/json'}
    })
     .then(response => response.json())
     .then(data => console.log(data))}

}
export default Adapter

