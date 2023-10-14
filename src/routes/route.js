const usuario = require('../controllers/usuarioController')
const producto = require('../controllers/productoController')
const pedido = require('../controllers/pedidoController')
const comentario = require('../controllers/comentarioController')
const express = require('express')
const router = express.Router()
const auth = require('../auth/jwt')


//RUTAS API
router.get('/api/usuario', auth.verificarToken, usuario.allusuarios)
router.get('/api/usuario/:id',auth.verificarToken, usuario.usuarioId)
router.post('/api/usuario', usuario.createUsuario)
router.post('/api/usuario/acceso', usuario.acceso)
router.put('/api/usuario/:id', auth.verificarToken, usuario.updateUsuario)
router.delete('/api/usuario/:id', auth.verificarToken, usuario.deleteUsuario)


router.get('/api/producto', auth.verificarToken, producto.allproducto)
router.get('/api/producto/:id', auth.verificarToken, producto.productoId)
router.post('/api/producto', auth.verificarToken, producto.createProducto)
router.put('/api/producto/:id', auth.verificarToken, producto.updateProducto)
router.delete('/api/producto/:id', auth.verificarToken, producto.deleteProducto)


router.get('/api/pedido', auth.verificarToken, pedido.allPedido)
router.get('/api/pedido/:id', auth.verificarToken, pedido.pedidoId)
router.post('/api/pedido', auth.verificarToken, pedido.createPedido)
router.put('/api/pedido/:id', auth.verificarToken, pedido.updatePedido)
router.delete('/api/pedido/:id', auth.verificarToken, pedido.deletePedido)


router.get('/api/comentario', auth.verificarToken, comentario.allComentario)
router.get('/api/comentario/:id',auth.verificarToken, comentario.comentarioId)
router.post('/api/comentario', auth.verificarToken, comentario.createComentario)
router.put('/api/comentario/:id', auth.verificarToken, comentario.updateComentario)
router.delete('/api/comentario/:id', auth.verificarToken, comentario.deleteComentario)

module.exports = router