import $ from 'jquery'
import Backbone from 'backbone'
import {ActiveListingsCollection, SingleListingsCollection, CategoryCollections, KeywordCollections} from './_models.js'
import {ActiveListingsView, SingleItemView, CategoryItemsView, KeywordItemsView, NavBarView} from './_views.js'
// console.log('wired up')
// console.log($)
// console.log(Backbone)



const AppRouter = Backbone.Router.extend({
	initialize: function(){
    let navInstance = new NavBarView()

		console.log('app routing')
		Backbone.history.start()
	},


  routes : {
		'listings/:listing_id' : 'showById',
    'categories/:category' : 'showByCategory',
    'search/:keyword' : 'showByKeyword',
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
      console.log(serverRes)
      let categoryListingResults= serverRes.results
      let viewInstance= new CategoryItemsView()

      viewInstance.render(categoryListingResults)


    })
  },

  showByKeyword: function(keyword){
    console.log('routrinnnn herrr')
    let keywordListing = new KeywordCollections(keyword)
    keywordListing.fetch().then(function(serverRes){
      console.log(serverRes)
      let keywordListingResults= serverRes.results
      let viewInstance= new NavBarView()

      viewInstance.render(keywordListingResults)


    })
  }




		})
let myEtsyApp = new AppRouter()
