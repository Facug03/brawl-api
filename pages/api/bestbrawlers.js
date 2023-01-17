import { getBrawlers } from '../../lib/redis'

export default async function handler(req, res) {
  const brawlers = await getBrawlers()

  res.status(200).json(brawlers)
}
