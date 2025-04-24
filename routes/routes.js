import express from 'express'
import {
    getProducts,
    getProduct,
    createProduct,
    updatedProduct,
    deleteProduct,
  } from '../controllers/controller.js';

const router = express.Router();


router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updatedProduct);
router.delete('/:id', deleteProduct);

//  module.exports = router;
export default router;