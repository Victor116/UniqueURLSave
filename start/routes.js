'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Unic url for music
|
*/

const Route = use('Route')

/* eslint-disable */
const Url = require('./routes/url')

Route.get('/', ({ response }) => {
    return response.status(200).json({ about: 'Siigen API Service' })
  })