import { createBrawler } from '@lib/redis'

export default async function handler(req, res) {
  const brawler = await createBrawler(req.body)

  res.status(200).json({ brawler })
}
