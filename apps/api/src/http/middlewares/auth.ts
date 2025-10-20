import { FastifyInstance } from 'fastify'
import { UnathorizedError } from '../routes/_errors/unathorized-error'
import fastifyPlugin from 'fastify-plugin'

export const auth = fastifyPlugin(async (app: FastifyInstance) => {
  app.addHook('preHandler', async (request) => {
    request.getCurrentUserId = async () => {
      try {
        const { sub } = await request.jwtVerify<{ sub: string }>()
        return sub
      } catch {
        throw new UnathorizedError('Invalid auth token')
      }
    }
  })
})
