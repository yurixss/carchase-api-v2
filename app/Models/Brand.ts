import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Brand extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  public name: string
  public logo: string
}
