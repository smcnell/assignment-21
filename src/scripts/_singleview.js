import Backbone from 'backbone'
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
    var infoEl= document.querySelector(".information-container")
    console.log(infoEl)
    if (typeof this.el !== "undefined"){
    this.el.innerHTML=this._buildSingleItemTemplate(itemObj)
  } else {
    infoEl.innerHTML=this._buildSingleItemTemplate(itemObj)
  }
}
})
