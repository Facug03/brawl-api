import Head from 'next/head'

import { Club } from '@pages/Club'

export default function ClubPage(club) {
  return (
    <>
      <Head>
        <title>{club.name + ' Club Stats & Members | Brawl Pro'}</title>
        <meta property="og:title" content={club.name + ' club | Brawl Stars Stats'} />
        <meta name="description" content={`Brawl Stars stats of the club ${club.name} and members.`} />
        <meta property="og:description" content={`Brawl Stars stats of the club ${club.name} and members.`} />
        <meta name="apple-mobile-web-app-title" content="Brawl Pro" />
        <meta property="og:url" content={`https://brawlpro.com/club/${club.tag.slice(1)}`} />
        <meta property="og:site_name" content="Brawl Pro" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#363b4e" />
        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href={`https://brawlpro.com/club/${club.tag.slice(1)}`} />
      </Head>
      <Club club={club} />
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params

  const res = await fetch(
    `https://bsproxy.royaleapi.dev/v1/clubs/%23${id}?authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM5ZTYxMTk4LTYwZWYtNDY3YS05MWVkLTY3NjU4MGVkMDJlZSIsImlhdCI6MTY3MzMxNDY3Mywic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.IpvoeicRr4llh7naPDJk-828Vx3EIGMl8QogdYy1h7sof0u8T9IcQvoyLmEyDXiYcTGrekkp28OBG-nZuOQuFw`,
  )

  const club = await res.json()

  return { props: club }
}
