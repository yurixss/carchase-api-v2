import Cars from 'App/Models/Car'
import CarsValidator from 'App/Validators/CarValidator'

// eslint-disable-next-line prettier/prettier
export default class CarsController {
  public async index({ response }) {
    try {
      const carsIndex = await Cars.all()

      return response.ok({ data: carsIndex })
    } catch (error) {
      console.error(error)

      return response.status(500).send({ error: 'Erro ao buscar carros' })
    }
  }

  public async store({ request, response }) {
    const { name, model, color, year, price, km } = await request.validate(CarsValidator)

    const Car = new Cars()

    Car.merge({
      name,
      model,
      color,
      year,
      price,
      km,
    })

    try {
      await Car.save()
      response.send({ created: true })
    } catch (error) {
      response.send({ created: false })
    }
  }

  public async update({ params, request, response }) {
    const { id } = params
    const { ...data } = await request.validate(CarsValidator)

    let Car: Cars

    try {
      try {
        Car = await Cars.findOrFail(id)
      } catch (error) {
        return response.notFound({ message: 'Car not found' })
      }

      await Car.merge({
        name: data.name || Car.name,
        model: data.model || Car.model,
        color: data.color || Car.color,
        year: data.year || Car.year,
        price: data.price || Car.price,
        km: data.km || Car.km,
      }).save()

      response.status(200).json(Car)
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  public async show({ params, response }) {
    try {
      const CarsShow = await Cars.find(params.id)
      return response.ok(CarsShow)
    } catch (error) {
      return response.notFound({ message: 'Car not found' })
    }
  }

  public async delete({ params, response }) {
    const { id } = params
    const Car = await Cars.findOrFail(id)
    try {
      await Car.delete()
      return response.status(204).send()
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}
