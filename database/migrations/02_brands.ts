import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cars extends BaseSchema {
  protected tableName = 'brands'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.string('logo', 255).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
