import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Brands from 'App/Models/Brand'

export default class BrandsController {
  public index = async ({ response }: HttpContextContract) => {
    try {
      const brandsIndex = await Brands.all()

      return response.ok(brandsIndex)
    } catch (error) {
      console.error(error)

      return response.status(500).send({ error: 'Erro ao buscar marcas' })
    }
  }
  public store = async ({ request, response }: HttpContextContract) => {
    const { name, logo } = request.all()

    const brand = new Brands()

    brand.merge({
      name,
      logo,
    })

    try {
      await brand.save()
      response.send({ created: true })
    } catch (error) {
      response.send({ created: false })
    }
  }
}
