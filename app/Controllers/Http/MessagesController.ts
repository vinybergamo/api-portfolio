import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Message from 'App/Models/Message'

export default class MessagesController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const messages = await Message.create(body)
    response.status(201)

    return {
      data: messages,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const message = await Message.findOrFail(params.id)

    message.delete()

    return {
      data: message,
    }
  }

  public async index() {
    const messages = await Message.all()
    return {
      data: messages,
    }
  }

  public async show({ params }: HttpContextContract) {
    const message = await Message.find(params.id)

    return {
      data: message,
    }
  }
}
