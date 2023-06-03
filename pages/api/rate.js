import { postBrawlers } from '@lib/redis'

export default async function handler(req, res) {
  try {
    const brawlers = await postBrawlers(req.body)

    res.status(200).json(brawlers)
  } catch (error) {
    res.status(404).json(error)
  }
}
