class MatePostModel {
  memberId: number | null
  teamId: number | null
  matchId: number | null
  title: string
  content: string
  age: string
  maxparticipant: number
  gender: string
  transport: string
  img: File | null

  constructor(
    memberId: number | null,
    teamId: number | null,
    matchId: number | null,
    title: string,
    content: string,
    age: string,
    maxparticipant: number,
    gender: string,
    transport: string,
    img: File | null,
  ) {
    this.memberId = memberId
    this.teamId = teamId
    this.matchId = matchId
    this.title = title
    this.content = content
    this.age = age
    this.maxparticipant = maxparticipant
    this.gender = gender
    this.transport = transport
    this.img = img
  }
}

export default MatePostModel
