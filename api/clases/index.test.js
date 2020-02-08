import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Clases } from '.'

const app = () => express(apiRoot, routes)

let clases

beforeEach(async () => {
  clases = await Clases.create({})
})

test('POST /clases 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ id: 'test', name: 'test', apellido: 'test', edad: 'test', profesion: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.apellido).toEqual('test')
  expect(body.edad).toEqual('test')
  expect(body.profesion).toEqual('test')
})

test('GET /clases 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /clases/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${clases.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(clases.id)
})

test('GET /clases/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /clases/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${clases.id}`)
    .send({ id: 'test', name: 'test', apellido: 'test', edad: 'test', profesion: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(clases.id)
  expect(body.id).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.apellido).toEqual('test')
  expect(body.edad).toEqual('test')
  expect(body.profesion).toEqual('test')
})

test('PUT /clases/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ id: 'test', name: 'test', apellido: 'test', edad: 'test', profesion: 'test' })
  expect(status).toBe(404)
})

test('DELETE /clases/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${clases.id}`)
  expect(status).toBe(204)
})

test('DELETE /clases/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
