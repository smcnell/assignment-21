const ListingsModel= Backbone.Model.extend({
})

export const ActiveListingsCollection = Backbone.Collection.extend({
  initialize: function(itemId){
    // console.log(itemId)
    // if (itemId === 'undefinded'){
    // } else {
    //   this.url= `https://openapi.etsy.com/v2/listings/${itemId}/?includes=Images,Shop/User.json&api_key=ucswpi9i99uxq0fpk32d9296`
    // }
  },

//   parse: function(rawServerRes){
//   console.log('parsing Response')
//   console.log(rawServerRes)
//   return rawServerRes
// },



  url: 'https://openapi.etsy.com/v2/listings/active?includes=Images,Shop/User.json&api_key=ucswpi9i99uxq0fpk32d9296',
// url: 'https://openapi.etsy.com/v2/listings/active?includes=Images,Shop.json&api_key=ucswpi9i99uxq0fpk32d9296',
  // url: 'https://openapi.etsy.com/v2/listings/active.json?api_key=ucswpi9i99uxq0fpk32d9296',

  model: ListingsModel


})


export const SingleListingsCollection = Backbone.Collection.extend({
  initialize: function(itemId){
      this.url= `https://openapi.etsy.com/v2/listings/` + itemId + `/?includes=Images,Shop/User.json&api_key=ucswpi9i99uxq0fpk32d9296`
  },

//   parse: function(rawServerRes){
//   console.log('parsing Response')
//   console.log(rawServerRes)
//   return rawServerRes
// },



url: '',
// url: 'https://openapi.etsy.com/v2/listings/active?includes=Images,Shop.json&api_key=ucswpi9i99uxq0fpk32d9296',
  // url: 'https://openapi.etsy.com/v2/listings/active.json?api_key=ucswpi9i99uxq0fpk32d9296',

  model: ListingsModel


})

export const CategoryCollections = Backbone.Collection.extend({
  initialize: function(category){
    this.url=`https://api.etsy.com/v2/listings/active.json?api_key=ucswpi9i99uxq0fpk32d9296&category=` + category + `&includes=Images,Shop`
      // this.url=`https://openapi.etsy.com/v2/categories/` + category + `?api_key=ucswpi9i99uxq0fpk32d9296`
  },

//   parse: function(rawServerRes){
//   console.log('parsing Response')
//   console.log(rawServerRes)
//   return rawServerRes
// },



url: '',
// url: 'https://openapi.etsy.com/v2/listings/active?includes=Images,Shop.json&api_key=ucswpi9i99uxq0fpk32d9296',
  // url: 'https://openapi.etsy.com/v2/listings/active.json?api_key=ucswpi9i99uxq0fpk32d9296',

  model: ListingsModel


})

export const KeywordCollections = Backbone.Collection.extend({
  initialize: function(keyword){
    this.url=`https://openapi.etsy.com/v2/listings/active/?includes=Images,Shop/User.json&api_key=aavnvygu0h5r52qes74x9zvo&keywords=${keyword}`
  },
  // https://openapi.etsy.com/v2/listings/active.js?api_key=aavnvygu0h5r52qes74x9zvo&keywords=`+ keyword +`&callback=`
// https://openapi.etsy.com/v2/listings/active.json?api_key=aavnvygu0h5r52qes74x9zvo&keywords=

//   parse: function(rawServerRes){
//   console.log('parsing Response')
//   console.log(rawServerRes)
//   return rawServerRes
// },



url: '',
// url: 'https://openapi.etsy.com/v2/listings/active?includes=Images,Shop.json&api_key=ucswpi9i99uxq0fpk32d9296',
  // url: 'https://openapi.etsy.com/v2/listings/active.json?api_key=ucswpi9i99uxq0fpk32d9296',

  model: ListingsModel


})
