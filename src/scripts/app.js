import $ from 'jquery'
import Backbone from 'backbone'
import {ActiveListingsCollection} from './_models.js'

// console.log('wired up')
// console.log($)
// console.log(Backbone)



const AppRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('app routing')
		Backbone.history.start()
	},


  routes : {
		'v2/listings/:listing_id.js' : 'showById',
		'v2/listings/active.js' : 'showActiveListings',
		'' : 'showActiveListings'
	},




  showActiveListings: function(){
		let activeCollection = new ActiveListingsCollection()
    console.log(activeCollection)
    console.log(activeCollection.models)
		activeCollection.fetch().then(function(serverRes){
      console.log("???")
      console.log(serverRes)
      let activeCollectionList= activeCollection.results
      console.log(activeCollectionList)
      let viewInstance = new ActiveListingsView()

			viewInstance.render(activeCollectionList)
		})


  },

			// let congressPersonsModelsList = cutieCollection.models
			// let viewInstance = new MultiCongressView()

			// viewInstance.render(congressPersonsModelsList, 'root', {})
		})
let myEtsyApp = new AppRouter()
