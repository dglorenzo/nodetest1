import { success, notFound } from '../../services/response/'
import { Clases } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Clases.create(body)
    .then((clases) => clases.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Clases.count(query)
    .then(count => Clases.find(query, select, cursor)
      .then((clases) => ({
        count,
        rows: clases.map((clases) => clases.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Clases.findById(params.id)
    .then(notFound(res))
    .then((clases) => clases ? clases.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Clases.findById(params.id)
    .then(notFound(res))
    .then((clases) => clases ? Object.assign(clases, body).save() : null)
    .then((clases) => clases ? clases.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Clases.findById(params.id)
    .then(notFound(res))
    .then((clases) => clases ? clases.remove() : null)
    .then(success(res, 204))
    .catch(next)
