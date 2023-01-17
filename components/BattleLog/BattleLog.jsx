import Image from 'next/image'
import { getTimeAgo } from '../../utils/parseDate'

import { mode } from '../../utils/profileInfo'
import PlayerBrawler from '../PlayerBrawler/PlayerBrawler'
import styles from './BattleLog.module.css'

export default function BattleLog({
  battleTime,
  event,
  battle,
  nameColor,
  playerProfile,
}) {
  const timeAgo = getTimeAgo(battleTime)

  return (
    <article className={styles.article}>
      <div className={styles.header}>
        <h3 className={styles.typeMode}>
          {battle.type
            ? battle.type === 'soloRanked'
              ? 'Solo Mode'
              : battle.type
            : 'ㅤㅤㅤ'}
        </h3>
        <h3 className={styles.timeAgo}>{timeAgo}</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.mode}>
          <Image
            src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${battle.mode}/mini`}
            alt={`${mode[battle.mode].name} icon map brawl stars`}
            width={34}
            height={33}
            priority={false}
          />
          <h3 className={styles.modeName}>{mode[battle.mode].name}</h3>
        </div>
        <div className={styles.resContainer}>
          {battle.mode.toLowerCase().includes('showdown') ? (
            <h3
              className={`${styles.result} ${
                battle.rank <= 5 ? styles.win : styles.lose
              }`}
            >
              RANK {battle.rank}
            </h3>
          ) : (
            <h3
              className={`${styles.result} ${
                battle.result === 'victory' ? styles.win : styles.lose
              }`}
            >
              {battle.result}
            </h3>
          )}
        </div>
        {battle.trophyChange && (
          <div className={styles.typeContainer}>
            <Image
              src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/mini'
              alt='trophy icon'
              width={20}
              height={15}
              priority={false}
            />
            <h3 className={styles.type}>{battle.trophyChange}</h3>
          </div>
        )}
      </div>

      {battle.mode.toLowerCase().includes('showdown') &&
        (battle.mode === 'soloShowdown' ? (
          <div className={styles.modeContainer}>
            {battle.players.map((player) => (
              <PlayerBrawler
                key={player.tag}
                trophies={player.brawler.trophies}
                id={player.brawler.id}
                name={player.brawler.name}
                playerName={player.name}
                power={player.brawler.power}
                nameColor={nameColor}
                player={playerProfile}
              />
            ))}
          </div>
        ) : (
          <div className={styles.modeContainer}>
            {battle.teams.map((team) => (
              <div className={styles.teams} key={team[0].name}>
                {team.map((player) => (
                  <PlayerBrawler
                    key={player.tag}
                    trophies={player.brawler.trophies}
                    duo={true}
                    id={player.brawler.id}
                    name={player.brawler.name}
                    playerName={player.name}
                    power={player.brawler.power}
                    player={playerProfile}
                    nameColor={nameColor}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}

      {!battle.mode.toLowerCase().includes('showdown') && battle?.type && (
        <div className={styles.battleContainer}>
          <div className={styles.brawlers}>
            {battle.teams[0].map((player) => (
              <PlayerBrawler
                key={player.tag}
                trophies={player.brawler.trophies}
                vs={true}
                id={player.brawler.id}
                name={player.brawler.name}
                playerName={player.name}
                power={player.brawler.power}
                player={playerProfile}
                nameColor={nameColor}
                battleType={battle.type}
              />
            ))}
          </div>
          <div className={styles.vsContainer}>
            <h3 className={styles.vs}>VS</h3>
          </div>
          <div className={styles.brawlers}>
            {battle.teams[1].map((player) => (
              <PlayerBrawler
                key={player.tag}
                trophies={player.brawler.trophies}
                vs={true}
                id={player.brawler.id}
                name={player.brawler.name}
                playerName={player.name}
                power={player.brawler.power}
                player={playerProfile}
                nameColor={nameColor}
                battleType={battle.type}
              />
            ))}
          </div>
        </div>
      )}

      {battle.mode === 'bigGame' && (
        <div className={styles.battleBigBrawler}>
          <PlayerBrawler
            key={battle.bigBrawler.tag}
            trophies={battle.bigBrawler.brawler.trophies}
            vs={true}
            id={battle.bigBrawler.brawler.id}
            name={battle.bigBrawler.brawler.name}
            playerName={battle.bigBrawler.name}
            power={battle.bigBrawler.brawler.power}
            player={playerProfile}
            nameColor={nameColor}
          />

          <h3 className={styles.vs}>VS</h3>

          {battle.players.map((player) => (
            <PlayerBrawler
              key={player.tag}
              trophies={player.brawler.trophies}
              vs={true}
              id={player.brawler.id}
              name={player.brawler.name}
              playerName={player.name}
              power={player.brawler.power}
              player={playerProfile}
              nameColor={nameColor}
            />
          ))}
        </div>
      )}
    </article>
  )
}
