import menuArray from '/data.js'


function getFeedHtml() {
      let feedHtml = `<img class="backgroundImg" src="hamburger.jpg">`
    
    menuArray.forEach(function(menu){
        feedHtml += `
<div class="menu">
    <div class="menu-inner">
    <p class="item-image">${menu.emoji}</p>
  <div class="menu-item-details">
                <h3>${menu.name}</h3>
                <p>${menu.ingredients.join(', ')}</p>
                <p class="menu-item-price">$${menu.price}</p>
            </div>
           <button class="menu-item-add-btn">+</button>
            <hr class="menu-item-divider">
    </div>`

   })
   return feedHtml 
}

function render(){
    document.getElementById('feed').innerHTML= getFeedHtml()
}
render()