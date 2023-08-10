import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cars extends BaseSchema {
  protected tableName = 'cars'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.string('model', 255).notNullable()
      table.string('color', 255).notNullable()
      table.integer('year').notNullable()
      table.string('price', 255).notNullable()
      table.string('km').notNullable()
      table.string('image', 255).nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
