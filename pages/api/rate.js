import { postBrawlers } from '../../lib/redis'

export default async function handler(req, res) {
  const brawlers = await postBrawlers(req.body)

  res.status(200).json(brawlers)
}
