import { Clases } from '.'

let clases

beforeEach(async () => {
  clases = await Clases.create({ id: 'test', name: 'test', apellido: 'test', edad: 'test', profesion: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = clases.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(clases.id)
    expect(view.id).toBe(clases.id)
    expect(view.name).toBe(clases.name)
    expect(view.apellido).toBe(clases.apellido)
    expect(view.edad).toBe(clases.edad)
    expect(view.profesion).toBe(clases.profesion)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = clases.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(clases.id)
    expect(view.id).toBe(clases.id)
    expect(view.name).toBe(clases.name)
    expect(view.apellido).toBe(clases.apellido)
    expect(view.edad).toBe(clases.edad)
    expect(view.profesion).toBe(clases.profesion)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
