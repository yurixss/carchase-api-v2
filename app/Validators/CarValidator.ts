import { schema } from '@ioc:Adonis/Core/Validator'

export default class CarsValidator {
  public schema = schema.create({
    name: schema.string({ trim: true }),
    model: schema.string({ trim: true }),
    color: schema.string({ trim: true }),
    year: schema.number.optional(),
    price: schema.number.optional(),
    km: schema.string({ trim: true }),
  })
}
