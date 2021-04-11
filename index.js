const express = require('express')
const app = express()
const Visitor = require("./model")

app.get('/', async (req, res) => {
  try {
    const currentCount = await Visitor.findOne({
      where: {
        id: 1
      }
    })
    if(currentCount.count >= 1) {
      await Visitor.update({
        count: currentCount.count + 1
      },
      {
        where: {
          id: 1
        }
      })
    } else {
      const startCount = await Visitor.create({
        count: 1
      })
    }
    res.send(`Visitor Count ${currentCount.count}`)
  } catch (error) {
    console.log("Error");
  }
})
 
app.listen(3000)