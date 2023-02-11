// Configuration
const express = require('express')
const router = express.Router()

// Import functions
const {
    getBills,
    createBill,
    updateBill,
    searchBill,
    deleteBill
} = require('../controllers/items')

// Router setup
router.get('/',getBills)
router.get('/:name',searchBill)
router.post('/',createBill)
router.put('/:name',updateBill)
router.delete('/:name',deleteBill)

// Exporting router
module.exports = router