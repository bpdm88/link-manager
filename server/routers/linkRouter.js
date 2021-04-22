const router = require('express').Router()
const Link = require('../models/linkModel')

router.get('/test', (req, res) => {
  res.send('Router test')
})

router.post('/', (req, res) => {
  const { title, author, link } = req.body

  const newLink = new Link({
    title,
    author,
    link
  })

  newLink.save()
})

module.exports = router
