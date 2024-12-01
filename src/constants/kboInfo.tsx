import KBO from '@assets/teamLogo/KBO_logo.svg?react'
import Doosan from '@assets/teamLogo/DOOSAN.svg?react'
import Lotte from '@assets/teamLogo/LOTTE.svg?react'
import Samsung from '@assets/teamLogo/SAMSUNG.svg?react'
import Kiwoom from '@assets/teamLogo/KIWOOM.svg?react'
import Hanwha from '@assets/teamLogo/HANWHA.svg?react'
import Kia from '@assets/teamLogo/KIA.svg?react'
import KT from '@assets/teamLogo/KT.svg?react'
import LG from '@assets/teamLogo/LG.svg?react'
import NC from '@assets/teamLogo/NC.svg?react'
import SSG from '@assets/teamLogo/SSG.svg?react'

interface KboTeamInfo {
  [key: string]: {
    id?: number // 팀 ID 추가
    team: string
    id: number
    logo: React.VFC<React.SVGProps<SVGSVGElement>>
    color: string // 팀 대표 색상 추가
  }
}

const kboTeamInfo: KboTeamInfo = {
  전체: {
    team: 'KBO',
    id: 0,
    logo: KBO,
    color: '#002561',
  },
  두산: {
    id: 6,
    team: '두산 베어스',
    id: 6,
    logo: Doosan,
    color: '#131230',
  },
  롯데: {
    id: 7,
    team: '롯데 자이언츠',
    id: 7,
    logo: Lotte,
    color: '#041E42',
  },
  삼성: {
    id: 8,
    team: '삼성 라이온즈',
    id: 8,
    logo: Samsung,
    color: '#074CA1',
  },
  키움: {
    id: 9,
    team: '키움 히어로즈',
    id: 9,
    logo: Kiwoom,
    color: '#570514',
  },
  한화: {
    id: 10,
    team: '한화 이글스',
    id: 10,
    logo: Hanwha,
    color: '#FF6600',
  },
  KIA: {
    id: 1,
    team: 'KIA 타이거즈',
    id: 1,
    logo: Kia,
    color: '#EA0029',
  },
  KT: {
    id: 5,
    team: 'KT 위즈',
    id: 5,
    logo: KT,
    color: '#000000',
  },
  LG: {
    id: 2,
    team: 'LG 트윈스',
    id: 2,
    logo: LG,
    color: '#C30452',
  },
  NC: {
    id: 3,
    team: 'NC 다이노스',
    id: 3,
    logo: NC,
    color: '#315288',
  },
  SSG: {
    id: 4,
    team: 'SSG 랜더스',
    id: 4,
    logo: SSG,
    color: '#CE0E2D',
  },
}

// 하단 토글에서 사용할 팀 이름 배열
const kboTeamList = Object.keys(kboTeamInfo).map((team) => ({
  team,
  id: kboTeamInfo[team].id,
  color: kboTeamInfo[team].color,
}))

export { kboTeamInfo, kboTeamList }
