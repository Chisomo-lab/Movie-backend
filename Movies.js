import express from 'express'
import { supabase } from '../supabaseClient.js'

const router = express.Router()

// GET all movies
router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('movies').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

// POST new movie
router.post('/', async (req, res) => {
  const { title, category, year } = req.body
  const { data, error } = await supabase
    .from('movies')
    .insert([{ title, category, year }])

  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

export default router
