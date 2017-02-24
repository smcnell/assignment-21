import Backbone from 'backbone'
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
  // console.log(typeof image[0])
  // var oneImage=image[0]
  if(typeof image[0]!=="undefined"){
    var oneImage=image[0]
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
