const router = require('express').Router()


router.post('/test', (req, res) => {
  res.send({result: 'success'})
})

module.exports = router;
