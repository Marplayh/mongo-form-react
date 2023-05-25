const router = require('express').Router()

//Cliente Router
const clientesRouter = require('./clientes')

router.use("/", clientesRouter);

module.exports = router;