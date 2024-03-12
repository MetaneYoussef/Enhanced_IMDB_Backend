const express = require('express')
const {
    creerActeur,
    obtenirActeurs,
    obtenirActeur,
    supprimerActeur,
    majActeur
} = require('../controllers/acteurs')
const router = express.Router()

router.post('/', creerActeur)
router.get('/:id', obtenirActeur)
router.get('/', obtenirActeurs)
router.delete('/:id', supprimerActeur)
router.patch('/:id', majActeur)


module.exports = router