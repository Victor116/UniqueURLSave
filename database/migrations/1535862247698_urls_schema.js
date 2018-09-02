'use strict'

const Schema = use('Schema')

class UrlsSchema extends Schema {
  up () {
    this.create('urls', (table) => {
      table.increments()
      table.string('url', 75).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('urls')
  }
}

module.exports = UrlsSchema
