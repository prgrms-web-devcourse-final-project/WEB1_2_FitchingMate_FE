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
    team: string
    logo: React.VFC<React.SVGProps<SVGSVGElement>>
    color: string // 팀 대표 색상 추가
  }
}

const kboTeamInfo: KboTeamInfo = {
  전체: {
    team: 'KBO',
    logo: KBO,
    color: '#002561',
  },
  두산: {
    team: '두산 베어스',
    logo: Doosan,
    color: '#131230',
  },
  롯데: {
    team: '롯데 자이언츠',
    logo: Lotte,
    color: '#041E42',
  },
  삼성: {
    team: '삼성 라이온즈',
    logo: Samsung,
    color: '#074CA1',
  },
  키움: {
    team: '키움 히어로즈',
    logo: Kiwoom,
    color: '#570514',
  },
  한화: {
    team: '한화 이글스',
    logo: Hanwha,
    color: '#FF6600',
  },
  KIA: {
    team: 'KIA 타이거즈',
    logo: Kia,
    color: '#EA0029',
  },
  KT: {
    team: 'KT 위즈',
    logo: KT,
    color: '#000000',
  },
  LG: {
    team: 'LG 트윈스',
    logo: LG,
    color: '#C30452',
  },
  NC: {
    team: 'NC 다이노스',
    logo: NC,
    color: '#315288',
  },
  SSG: {
    team: 'SSG 랜더스',
    logo: SSG,
    color: '#CE0E2D',
  },
}

// 하단 토글에서 사용할 팀 이름 배열
const kboTeamList = Object.keys(kboTeamInfo)

export { kboTeamInfo, kboTeamList }
