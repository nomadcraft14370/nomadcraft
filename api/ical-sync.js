// API route to fetch and parse iCal feeds from rental platforms
// GET /api/ical-sync?url=https://...

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const { url } = req.query
  if (!url) return res.status(400).json({ error: 'URL parameter required' })

  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'NomadCraft-iCal-Sync/1.0' },
    })

    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const icalText = await response.text()
    const bookedDates = parseIcal(icalText)

    res.status(200).json({ dates: bookedDates, source: url, fetchedAt: new Date().toISOString() })
  } catch (error) {
    console.error('iCal sync error:', error)
    res.status(500).json({ error: error.message })
  }
}

function parseIcal(text) {
  const dates = []
  const events = text.split('BEGIN:VEVENT')

  for (const event of events.slice(1)) {
    const dtstart = event.match(/DTSTART[^:]*:(\d{8})/)?.[1]
    const dtend = event.match(/DTEND[^:]*:(\d{8})/)?.[1]

    if (dtstart && dtend) {
      const start = parseDate(dtstart)
      const end = parseDate(dtend)
      const current = new Date(start)

      while (current < end) {
        dates.push(current.toISOString().split('T')[0])
        current.setDate(current.getDate() + 1)
      }
    }
  }

  return [...new Set(dates)].sort()
}

function parseDate(str) {
  // YYYYMMDD -> Date
  return new Date(`${str.slice(0, 4)}-${str.slice(4, 6)}-${str.slice(6, 8)}`)
}
