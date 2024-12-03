export const formatParticipants = (count: number): string => {
  return `${count}명`
}

export const parseParticipants = (participantsStr: string): number => {
  return parseInt(participantsStr.replace(/[^0-9]/g, ''), 10)
}
