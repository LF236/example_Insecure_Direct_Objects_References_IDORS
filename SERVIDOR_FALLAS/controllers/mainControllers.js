const db = require('../database/models');
const mainControllers = {
    mostrarPaginaPrincipal: async (req, res) => {
        const listaEmpleados = await db.RchEmpleado.findAll({
            order: [
                ['id', 'ASC']
            ],
            raw: true,
            atributes: ['id', 'matricula'],
        });
        console.log(listaEmpleados)


        res.render('listaEmpleados', {
            listaEmpleados: listaEmpleados
        });
    },

    infoEmpleado: async (req, res) => {
        const { id } = req.query;
        console.log(id);
        const infoEmpleado = await db.RchEmpleado.findByPk(id, {
            raw: true,
            attributes: {
                exclude: ['created_at', 'updated_at', 'deleted_at', 'id']
            },
        });

        const empleadoDatos = await db.InfoEmpleado.findByPk(id, {
            raw: true,
            attributes: {
                exclude: ['id']
            }
        });
        console.log(empleadoDatos);
        res.render('infoEmpleado', {
            infoEmpleado: infoEmpleado,
            empleadoDatos: empleadoDatos
        });;
    },
    
    test: async (req, res) => {
        const listaEmpleados = await db.RchEmpleado.findAll({
            order: [
                ['id', 'ASC']
            ],
            raw: true,
            atributes: ['id', 'matricula'],
        });
        res.send(listaEmpleados);
    }
}

module.exports = mainControllers;