import { schema } from '@ioc:Adonis/Core/Validator'

export default class CarsValidator {
  public schema = schema.create({
    name: schema.string({ trim: true }),
    logo: schema.string({ trim: true }),
  })
}
