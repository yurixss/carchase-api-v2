import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cars extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public model: string

  @column()
  public color: string

  @column()
  public year: number

  @column()
  public price: string

  @column()
  public km: string

  @column()
  public image?: string

  @column()
  public is_new: string

  @column()
  public brand_id: number

  @column()
  public category_id: number

  @column()
  public user_id: number

  @column()
  public status: string

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
