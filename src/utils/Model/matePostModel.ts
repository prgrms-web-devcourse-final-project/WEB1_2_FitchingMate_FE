class MatePostModel {
  memberId: number
  temaId: number
  matchId: number
  title: string
  content: string
  age: string
  maxparticipant: number
  gender: string
  transport: string

  constructor(
    memberId: number,
    temaId: number,
    matchId: number,
    title: string,
    content: string,
    age: string,
    maxparticipant: number,
    gender: string,
    transport: string,
  ) {
    this.memberId = memberId
    this.temaId = temaId
    this.matchId = matchId
    this.title = title
    this.content = content
    this.age = age
    this.maxparticipant = maxparticipant
    this.gender = gender
    this.transport = transport
  }
}

export default MatePostModel
