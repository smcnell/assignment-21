import Backbone from 'backbone'
export const NavBarView = Backbone.View.extend({
  el: '#app-container',

  events: {
      "click .fa-search" : "handleTheSearch",
      "click .active-icon" : "handleIconClick"
  },

  handleTheSearch: function(evt){
    console.log("CLICK")
    var searchbar= document.querySelector(".my-searchbar")
    var searchBarVal=searchbar.value
    console.log(searchBarVal)
    let urlFriendlySearch = searchBarVal.split(' ').join('+')
    console.log(urlFriendlySearch)
    window.location.hash=`search/${urlFriendlySearch}`
  },

  handleIconClick: function(evt){
    console.log(evt)
    let clickedIconEl=evt.currentTarget
    // console.log(clickedIconEl)
    console.log(clickedIconEl.dataset.itemid)
    window.location.hash = `listings/${clickedIconEl.dataset.itemid}`
  },


  _eachListingTemplate: function(listOfActive){
    let image = listOfActive.Images
    // console.log(typeof image[0])
    // var oneImage=image[0]
    if(typeof image[0]==="undefined"){
      var oneImage=""
    } else {
      oneImage=image[0]
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
      <img class= "etsy-logo" src= "https://img0.etsystatic.com/031/0/5170423/il_340x270.548956212_ilvs.jpg"/>
      <div class= "navbar-container categories-buttons">
          <a class="cat-button" href="#categories/accessories">Accessories</a>
          <a class="cat-button" href="#categories/jewelry">Jewelry</a>
          <a class="cat-button" href="#categories/furniture">Furniture</a>
          <a class="cat-button" href="#categories/supplies">Supplies</a>
          <a class="cat-button" href="#categories/weddings">Weddings</a>
          <a class="cat-button" href="#categories/housewares">Housewares</a>
          <a class="cat-button" href="#categories/vintage">Vintage</a>
          <input class="my-searchbar" type="text" name="search" placeholder="Search..">
          <i class="fa fa-search" aria-hidden="true"></i>
          <a class="cat-button" href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
      </div>
      <div class="container-fluid information-container">
        <div class="row">
          ${listOfActive.map (this._eachListingTemplate).join('')}
        </div>
      </div>

      `
    },

    render: function(listOfActive){
      let appEl=document.querySelector("#app-container")
      appEl.innerHTML=this._buildActiveHtmlTemplate(listOfActive)
    }
  })
