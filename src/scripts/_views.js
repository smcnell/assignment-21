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
  let oneImage=image[0]
  if( oneImage!=="undefined"){
    oneImage=image[0]
  } else {
    oneImage="null"
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
  let oneImage=image[0]
  let imageTwo=image[1]
  let imageThree=image[2]

return `
<div class= "mylovelyitem">
  <div class="pic-container">
      <img class="my-single-pic" src="${oneImage.url_fullxfull}" alt="...">
      </br>
      <img class="lil-pic" src="${imageTwo.url_75x75}">
      <img class="lil-pic" src="${imageThree.url_75x75}">
    </div>
  <div class="my-item-info">
    <h1>${itemObj.title} </h1>
    <h2> $${itemObj.price} </h2>
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
