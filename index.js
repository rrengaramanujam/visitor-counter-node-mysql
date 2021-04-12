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
    if(currentCount) {
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
    res.send(`Visitor Count 1`)
    }
    res.send(`Visitor Count ${currentCount.count + 1}`)
  } catch (error) {
    console.log("Error");
  }
})

app.get("/health", (req, res) => {
  res.status(200).send("healthy")
})
 
app.listen(3000)