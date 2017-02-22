export const ActiveListingsView= Backbone.View.extend({
  el: '.information-container',

  events: {
    "click .active-icon" : "handleIconClick"
  },

  handleIconClick: function(evt){
    let clickedIconEl=evt.currentTarget
    console.log(clickedIconEl)
    console.log(clickedIconEl.dataset.itemid)
    window.location.hash = `listings/${clickedIconEl.dataset.itemid}`
  },


_eachListingTemplate: function(listOfActive){
  let image = listOfActive.Images
  var oneImage=image[0]
  if(typeof oneImage!=="undefined"){
    oneImage=image[0]
  } else {
    oneImage=""
  }
  let title=listOfActive.title
    if (title.length > 30){
      title=title.substr(0,30)+ "..."
    }

//   console.log(image)
// console.log(oneImage)
  return `
  <div class="col-sm-6 col-md-4 mysize" >
  <div class="thumbnail active-icon" data-itemid="${listOfActive.listing_id}"">
    <img src="${oneImage.url_570xN}" alt="...">
    <div class="caption">
      <h3>${title}</h3>
      <div class="pricename">
        <p class="shoppy">${listOfActive.Shop.shop_name}</p>
        <p class="pricey">$${listOfActive.price}</p>
      </div>
    </div>
  </div>
  </div>
  `
},



  _buildActiveHtmlTemplate: function(listOfActive){
console.log(listOfActive)
    return `
    <div class="row">
      ${listOfActive.map (this._eachListingTemplate).join('')}
      </div>


    `
  },

  render: function(listOfActive){
    this.el.innerHTML=this._buildActiveHtmlTemplate(listOfActive)
  }
})



export const SingleItemView= Backbone.View.extend({
  el: '.information-container',

  events: {
    "click .active-icon" : "handleIconClick"
  },

  handleIconClick: function(evt){
    console.log(evt.target)
    let clickedIconEl=evt.target
  },



_eachPictureTemplate: function(itemObj){

  let image = itemObj.Images
  let oneImage=image[0].url_fullxfull
  if(typeof oneImage!=="undefined"){
    oneImage=image[0].url_fullxfull
  } else {
    oneImage=""
  }
  var imageTwo=image[1]
  if(typeof imageTwo!=="undefined"){
    imageTwo=image[1].url_75x75
  } else {
    imageTwo=""
  }
  var imageThree=image[2]
  if(typeof imageThree!=="undefined"){
    imageThree=image[2].url_75x75
  } else {
    imageThree=""
  }

return `
<div class= "mylovelyitem">
  <div class="pic-container">
      <img class="my-single-pic" src="${oneImage}" alt="...">
      </br>
      <div class= "lil-pic-container">
        <img class="lil-pic" src="${imageTwo}">
        <img class="lil-pic" src="${imageThree}">
      </div>
    </div>
  <div class="my-item-info">
    <h1>${itemObj.title} </h1>
    <div class="price-questions">
      <h2> $${itemObj.price} </h2>
      <p>Ask Questions </p>
    </div>
    <p> ${itemObj.description} </p>
  </div>
</div>
`

},

  _buildSingleItemTemplate: function(itemObj){
console.log(itemObj)
// console.log(image)

    return `
    <div class="single-item-container">

      ${itemObj.map (this._eachPictureTemplate).join('')}



      </div>

    `
  },

  render: function(itemObj){
    this.el.innerHTML=this._buildSingleItemTemplate(itemObj)
  }
})

export const CategoryItemsView= Backbone.View.extend({
  el: '.information-container',

  events: {
    "click .active-icon" : "handleIconClick"
  },

  handleIconClick: function(evt){
    let clickedIconEl=evt.currentTarget
    console.log(clickedIconEl)
    console.log(clickedIconEl.dataset.itemid)
    window.location.hash = `listings/${clickedIconEl.dataset.itemid}`
  },


_eachListingTemplate: function(listOfActive){
  let image = listOfActive.Images
  var oneImage=image[0]
  if(typeof oneImage!=="undefined"){
    oneImage=image[0]
  } else {
    oneImage=""
  }
  let title=listOfActive.title
    if (title.length > 30){
      title=title.substr(0,30)+ "..."
    }

//   console.log(image)
// console.log(oneImage)
  return `
  <div class="col-sm-6 col-md-4 mysize" >
  <div class="thumbnail active-icon" data-itemid="${listOfActive.listing_id}"">
    <img src="${oneImage.url_570xN}" alt="...">
    <div class="caption">
      <h3>${title}</h3>
      <div class="pricename">
        <p class="shoppy">${listOfActive.Shop.shop_name}</p>
        <p class="pricey">$${listOfActive.price}</p>
      </div>
    </div>
  </div>
  </div>
  `
},



  _buildActiveHtmlTemplate: function(listOfActive){
console.log(listOfActive)
    return `
    <div class="row">
      ${listOfActive.map (this._eachListingTemplate).join('')}
      </div>


    `
  },

  render: function(listOfActive){
    this.el.innerHTML=this._buildActiveHtmlTemplate(listOfActive)
  }
})
