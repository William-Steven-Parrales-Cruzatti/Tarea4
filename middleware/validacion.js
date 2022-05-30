const { validationResult } = require('express-validator');

const validarHardware = (req, res, next) => {

        //SE CREA UNA CONSTANTE PARA VALIDAR LA PETICION
        const errors = validationResult(req);
        if(!errors.isEmpty()){

            return res.status(400).json({errors}); //SI HAY UN ERROR NOS LO MUESTRA

        }
    
        next(); //SI NO HAY ERROR CONTINUA EL PROCESO

}

module.exports = {
    validarHardware,
}