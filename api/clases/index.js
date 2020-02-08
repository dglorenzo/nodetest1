import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Clases, { schema } from './model'

const router = new Router()
const { id, name, apellido, edad, profesion } = schema.tree

/**
 * @api {post} /clases Create clases
 * @apiName CreateClases
 * @apiGroup Clases
 * @apiParam id Clases's id.
 * @apiParam name Clases's name.
 * @apiParam apellido Clases's apellido.
 * @apiParam edad Clases's edad.
 * @apiParam profesion Clases's profesion.
 * @apiSuccess {Object} clases Clases's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Clases not found.
 */
router.post('/',
  body({ id, name, apellido, edad, profesion }),
  create)

/**
 * @api {get} /clases Retrieve clases
 * @apiName RetrieveClases
 * @apiGroup Clases
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of clases.
 * @apiSuccess {Object[]} rows List of clases.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /clases/:id Retrieve clases
 * @apiName RetrieveClases
 * @apiGroup Clases
 * @apiSuccess {Object} clases Clases's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Clases not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /clases/:id Update clases
 * @apiName UpdateClases
 * @apiGroup Clases
 * @apiParam id Clases's id.
 * @apiParam name Clases's name.
 * @apiParam apellido Clases's apellido.
 * @apiParam edad Clases's edad.
 * @apiParam profesion Clases's profesion.
 * @apiSuccess {Object} clases Clases's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Clases not found.
 */
router.put('/:id',
  body({ id, name, apellido, edad, profesion }),
  update)

/**
 * @api {delete} /clases/:id Delete clases
 * @apiName DeleteClases
 * @apiGroup Clases
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Clases not found.
 */
router.delete('/:id',
  destroy)

export default router
