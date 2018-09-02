'use strict'

/**
 * Url controller REST API
 * @author Victor F. Gil C.
 * @version 0.1.1
 */

// Models
const Url = use('App/Models/Url')

// Logs system
const Logger = use('Logger')

class UrlController {
  constructor () {
    // Name controller
    this.name = 'UrlController'
  }

    /**
    * Url creation
    * @param { request } : HTTP request object
    * @param { response } : Response object
    * @return {}
    */
  async store ({ request, response }) {
    // Get information from request
    let { url } = request.only(['url'])

    // Save Model
    try {
      
      // Hacemos datos persistentes
      await Url.create({
        url
      })

      return response
        .status(201)
        .json({
          status: 201,
          message: `Se a guardado existosamente`
        })
    } catch (error) {
      // Log de error
      Logger.error(`Error ${this.name} - Save URL`, error)
      return response
        .status(400)
        .json({
          status: 400,
          error: 'La url que has insertado ya existe'
        })
    }
  }
}

module.exports = UrlController
