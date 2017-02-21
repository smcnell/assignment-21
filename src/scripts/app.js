import $ from 'jquery'
import Backbone from 'backbone'
import {ActiveListingsCollection, SingleListingsCollection, CategoryCollections} from './_models.js'
import {ActiveListingsView, SingleItemView, CategoryItemsView} from './_views.js'
// console.log('wired up')
// console.log($)
// console.log(Backbone)



const AppRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('app routing')
		Backbone.history.start()
	},


  routes : {
		'listings/:listing_id' : 'showById',
    'categories/:category' : 'showByCategory',
		'' : 'showActiveListings'
	},




  showActiveListings: function(){
		let activeCollection = new ActiveListingsCollection()//PASS THINGS IN HERE
		activeCollection.fetch().then(function(serverRes){
      // console.log(serverRes)
      // console.log("???")
      // console.log(activeCollection)
      let activeCollectionList= serverRes.results
      console.log(activeCollectionList)
      let viewInstance = new ActiveListingsView()

			viewInstance.render(activeCollectionList)
		})


  },



  showById: function(itemId){
    let singleListing = new SingleListingsCollection(itemId)
    singleListing.fetch().then(function(serverRes){
      let singleListingResults= serverRes.results
      let viewInstance= new SingleItemView()

      viewInstance.render(singleListingResults)


    })
  },

  showByCategory: function(category){
    let categoryListing = new CategoryCollections(category)
    categoryListing.fetch().then(function(serverRes){
      let categoryListingResults= serverRes.results
      let viewInstance= new CategoryItemsView()

      viewInstance.render(categoryListingResults)


    })
  },


		})
let myEtsyApp = new AppRouter()
