import React from 'react'
import { ResultListTable, RivalTeam, ResultListTitle } from './style'
import { kboTeamInfo } from '@constants/kboInfo'

const ResultList = () => {
  const gameResults = [
    { date: '10/28', rival: 'LG', result: '승', score: '71-10' },
    { date: '10/21', rival: '롯데', result: '패', score: '7-8' },
    { date: '10/11', rival: 'LG', result: '패', score: '7-8' },
    { date: '99/99', rival: 'LG', result: '무', score: '7-7' },
    { date: '99/99', rival: 'LG', result: '무', score: '7-7' },
    { date: '99/99', rival: 'LG', result: '무', score: '7-7' },
  ]

  return (
    <div>
      <ResultListTitle>삼성 라이온즈의 최근 전적</ResultListTitle>
      <ResultListTable>
        <thead>
          <tr>
            <th>날짜</th>
            <th>vs</th>
            <th>상대 팀</th>
            <th>결과</th>
            <th>점수</th>
          </tr>
        </thead>
        <tbody>
          {gameResults.map((game, index) => {
            const teamInfo = kboTeamInfo[game.rival] // 팀 정보 가져오기
            return (
              <tr key={index}>
                <td className='date'>{game.date}</td>
                <td className='vs'>vs</td>
                <td className='rival-team'>
                  <RivalTeam>
                    <teamInfo.logo className='team-logo' /> {/* 팀 로고 */}
                    <span className='team-name'>{teamInfo.team}</span>
                  </RivalTeam>
                </td>
                <td
                  className={`result ${
                    game.result === '승'
                      ? 'win'
                      : game.result === '패'
                        ? 'loss'
                        : 'draw'
                  }`}
                >
                  {game.result}
                </td>
                <td>{game.score}</td>
              </tr>
            )
          })}
        </tbody>
      </ResultListTable>
    </div>
  )
}

export default ResultList
