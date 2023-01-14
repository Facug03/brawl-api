import { intervalToDuration, parseISO, isAfter, formatDistance } from 'date-fns'
import { enUS } from 'date-fns/locale'

export function getInterval(startTime, endTime) {
  const isNext = isAfter(parseISO(endTime), Date.now())
  const isBefore = isAfter(parseISO(startTime), Date.now())

  if (isNext && !isBefore) {
    const distance = {
      start: Date.now(),
      end: parseISO(endTime),
    }

    const interval = intervalToDuration(distance)

    const endsAt = `New map in ${interval.days ? interval.days + 'd' : ''} ${
      interval.hours ? interval.hours + 'h' : ''
    } ${interval.minutes + 'm'}`

    return endsAt
  }

  const distance = {
    start: Date.now(),
    end: parseISO(startTime),
  }

  const interval = intervalToDuration(distance)

  const starsAt = `Even stars in ${interval.days ? interval.days + 'd' : ''} ${
    interval.hours ? interval.hours + 'h' : ''
  } ${interval.minutes + 'm'}`

  return starsAt
}

export function getTimeAgo(time) {
  const parseTime = parseISO(time)

  const timeAgo = formatDistance(new Date(parseTime), new Date(), {
    addSuffix: true,
    locale: enUS,
  })

  return timeAgo
}
