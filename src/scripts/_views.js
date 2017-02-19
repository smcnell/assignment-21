const ActiveListingsView= Backbone.View.extend({
  el: '.information-container',

  // events: {
  //   "click .active-icon" : "handleIconClick"
  // },
  //
  // handleIconClick: function(evt){
  //   console.log(evt.target)
  //   let clickedIconEl=evt.target
  // },

  _buildActiveHtmlTemplate: function(listOfActive){
console.log(listOfActive)
    return `
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail active-icon">
          <img src="${listOfActive}" alt="...">
          <div class="caption">
            <h3>Thumbnail label</h3>
            <p>blah</p>
          </div>
        </div>
      </div>
    </div>
    `
  }
})
