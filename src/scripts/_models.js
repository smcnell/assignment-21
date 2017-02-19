const ListingsModel= Backbone.Model.extend({
})

export const ActiveListingsCollection= Backbone.Collection.extend({
  initialize: function(){
  },

//   parse: function(rawServerRes){
//   console.log('parsing Response')
//   console.log(rawServerRes)
//   return rawServerRes
// },



  url: 'https://openapi.etsy.com/v2/listings.js/active.js?api_key=ucswpi9i99uxq0fpk32d9296',

  model: ListingsModel


})
