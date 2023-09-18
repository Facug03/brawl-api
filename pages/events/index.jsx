import Head from 'next/head'

import { Events } from '@pages/Events'

export default function EventsPage({ events }) {
  return (
    <>
      <Head>
        <title>Event Rotation, Maps & Modes | Brawl Pro</title>
        <meta property="og:title" content="Event Rotation, Maps & Modes | Brawl Pro" />
        <meta
          name="description"
          content="Brawl Stars maps, event rotation and modes like brawl ball, gem grab, duels and you can know when a challengue stars!."
        />
        <meta
          property="og:description"
          content="Brawl Stars maps, event rotation and modes like brawl ball, gem grab, duels and you can know when a challengue stars!."
        />
        <meta name="apple-mobile-web-app-title" content="Brawl Pro" />
        <meta property="og:url" content="https://brawlpro.com/events" />
        <meta property="og:site_name" content="Brawl Pro" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#363b4e" />
        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href="https://brawlpro.com/events" />
      </Head>
      <Events events={events} />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://bsproxy.royaleapi.dev/v1/events/rotation?authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM5ZTYxMTk4LTYwZWYtNDY3YS05MWVkLTY3NjU4MGVkMDJlZSIsImlhdCI6MTY3MzMxNDY3Mywic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.IpvoeicRr4llh7naPDJk-828Vx3EIGMl8QogdYy1h7sof0u8T9IcQvoyLmEyDXiYcTGrekkp28OBG-nZuOQuFw',
  )

  const events = await res.json()

  return { props: { events } }
}
