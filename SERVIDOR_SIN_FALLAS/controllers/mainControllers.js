const db = require('../database/models');
const CryptoJS = require('crypto-js');
const TokenGenerator = require('uuid-token-generator');
const token = new TokenGenerator();

const mainControllers = {
    mostrarPaginaPrincipal: async (req, res) => {
        const listaEmpleados = await db.RchEmpleado.findAll({
            order: [
                ['id', 'ASC']
            ],
            raw: true,
            atributes: ['id', 'matricula'],
        });
        //console.log(listaEmpleados)

        if(req.cookies.accesToken != undefined) {
            res.render('listaEmpleados', {
                listaEmpleados: listaEmpleados
            });
        }
        else {
            res.status(500).render('noSession');
            res.sta
        } 
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
        //console.log(empleadoDatos);
        if(req.cookies.accesToken != undefined) {
            res.render('infoEmpleado', {
                infoEmpleado: infoEmpleado,
                empleadoDatos: empleadoDatos
            });    
        }
        else {
            res.status(500).render('noSession');
        }     
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
    },

    showLogin: (req,res) => {
        if(req.cookies.accesToken == undefined) {
            res.render('login', {
                error: false
            });
        }
        else {
            res.redirect('/');
        }
        
    },

    procesarLogin: (req, res) => {
        const { email, password } = req.body;
        if((email == "admin") && password == "12345") {
            req.session.nombre = "Hola";
            res.cookie("accesToken", token.generate(), { maxAge: 60000 });
            res.redirect('/');
        }
        else {
            res.render('login', {
                error: true
            })
        }
        
    }
}

module.exports = mainControllers;