const router = require('express').Router()
const Link = require('../models/linkModel')

// GET
router.get('/', async (req, res) => {
  try {
    const links = await Link.find()
    res.json(links)
  } catch (error) {
    res.status(500).send()
  }
})

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    const linkId = req.params.id

    // validation

    if (!linkId) {
      return res.status(400).json({ errorMessage: 'Link id not provided' })
    }

    const existingLink = await Link.findById(linkId)

    if (!existingLink) {
      return res.status(400).json({ errorMessage: 'Link id not found' })
    }

    await existingLink.delete()
    res.json(existingLink)
  } catch (error) {
    res.status(500).send()
  }
})

//UPDATE
router.put('/:id', async (req, res) => {
  try {
    const { title, author, link } = req.body
    const linkId = req.params.id

    // validation

    if (!link) {
      return res.status(400).json({ errorMessage: 'You need to provide a link' })
    }

    if (!linkId) {
      return res.status(400).json({ errorMessage: 'Link id not provided' })
    }

    const originalLink = await Link.findById(linkId)

    if (!originalLink) {
      return res.status(400).json({ errorMessage: 'Link id not found' })
    }

    originalLink.title = title
    originalLink.author = author
    originalLink.link = link

    const savedLink = await originalLink.save()
    res.json(savedLink)
  } catch (error) {
    res.status(500).send()
  }
})

//POST
router.post('/', async (req, res) => {
  try {
    const { title, author, link } = req.body

    // validation

    if (!link) {
      return res.status(400).json({ errorMessage: 'You need to provide a link' })
    }

    const newLink = new Link({
      title,
      author,
      link
    })

    const savedLink = await newLink.save()

    res.json(savedLink)
  } catch (error) {
    res.status(500).send()
  }
})

module.exports = router
