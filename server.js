import express from "express"
const app = express()
const port = 3000

// Sample pet data
const pets = {
  1: { id: 1, name: "Max", status: "available" },
  2: { id: 2, name: "Bella", status: "pending" },
}

// GET /pets/{petId}
app.get("/pets/:petId", (req, res) => {
  const petId = parseInt(req.params.petId)
  const pet = pets[petId]

  if (pet) {
    res.json(pet)
  } else {
    res.status(404).json({ error: "Pet not found" })
  }
})

app.listen(port, () => {
  console.log(`Pet store API running at http://localhost:${port}`)
})
