const express = require('express')
const router = express.Router()
const members = require('../../Members')
const uuid = require('uuid')

//Get single member
//Instead of app.get, we use router.get if we want to use the express router

//Gets all members
router.get('/', (req, res) => res.json(members))

//Gets single member
router.get('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id))

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)))
  } else {
    res
      .status(400)
      .json({ msg: `No member found with the id of ${req.params.id}` })
  }
})

//Create new member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'acive',
  }

  if (!newMember.name || !newMember.email) {
    //use return in this way to avoid an else statement
    return res.status(400).json({ msg: 'Please include a name and email.' })
  }

  members.push(newMember)
  res.json(members)
  // res.redirect('/') use to get redirect from form
})

//Update member
router.put('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id))

  if (found) {
    const updMember = req.body
    members.forEach(member => {
      if(member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name
        member.email = updMember.email ? updMember.email : member.email

        res.json({ msg: "Member updated", member })
      }
    })
  } else {
    res
      .status(400)
      .json({ msg: `No member found with the id of ${req.params.id}` })
  }
})

//Delete Member
router.delete('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id))

  if (found) {
    res.json({
      msg: "Member Deleted",
      members: members.filter((member) => member.id !== parseInt(req.params.id))
    })
  } else {
    res
      .status(400)
      .json({ msg: `No member found with the id of ${req.params.id}` })
  }
})

module.exports = router
