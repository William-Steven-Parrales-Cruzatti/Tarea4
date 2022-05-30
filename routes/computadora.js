const express = require('express');
const {check} = require('express-validator')
const {agg} = require('../repositorio/historial');
const {validarHardware} = require('../middleware/validacion')

//TRAEMOS EL ENRUTAMIENTO DE EXPRESS
const api = express.Router();

//CREAMOS RUTA PARA EL POST
api.post('/registrar', 
         check('idhardware', 'El ID del hardware no es válido').not().isEmpty() //VALIDAMOS QUE NO ESTE VACIO EL CAMPO ID HARDWARE
         .isLength({min: 11}) //VALIDAMOS QUE SEAN SOLO 11 CARACTERES
         .matches(/^[0-9]\d{3}-[A-Z]{2}\d{4}$/), //VALIDAMOS QUE SEAN UN FORMATO ESPECIFICO, TIPO: 2301-AB2020
         validarHardware, //TRAEMOS LA VALIDACION DEL MIDDLEWARE
         (req, res) => {

    const body = req.body;

    agg(body); //SI TODO ESTA BIEN SE AGREGA AL REPOSITORIO CREADO CON LA FUNCION AGG

    return res.status(200).send({

        data: body, //NOS ENVIA LO QUE INGRESAMOS EN EL BODY
        message: 'Dato almacenado correctamente! :)' //NOS ENVIA UN MENSAJE DE CONFIRMACION

    })

});

module.exports = api;