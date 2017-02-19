const ListingsModel= Backbone.Model.extend({
})

export const ActiveListingsCollection= Backbone.Collection.extend({
  initialize: function(){
  },

  url: 'https://openapi.etsy.com/v2/listings/active.js?api_key=ucswpi9i99uxq0fpk32d9296',

  model: ListingsModel

})
