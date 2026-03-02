
db.estudiantes.find({$and : [ {activo : true } , { $or: [ { ciudad: "Buenos Aires"}, {edad: { $gt: 25 }}]}]})

db.estudiantes.find({}, { nombre: 1, email: 1, _id: 0 })



