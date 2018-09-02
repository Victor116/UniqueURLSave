'use strict'

/**
 * 
 * @author Victor F. Gil C.
 * @version 0.1.0
 */

const Route = use('Route')
// Call API method using this previx in HTTP app

Route.group(() => {
  // Get one available User
  Route.post('/url', 'UrlController.store')
})
  .prefix('/api/v1/')

module.exports = Route