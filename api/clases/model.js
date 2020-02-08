import mongoose, { Schema } from 'mongoose'

const clasesSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  apellido: {
    type: String
  },
  edad: {
    type: String
  },
  profesion: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

clasesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      id: this.id,
      name: this.name,
      apellido: this.apellido,
      edad: this.edad,
      profesion: this.profesion,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Clases', clasesSchema)

export const schema = model.schema
export default model
