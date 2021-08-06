export type MatchupTypes =
  | 'Mirror Match'
  | '-4'
  | '-3'
  | '-2'
  | '-1'
  | '±0'
  | '+1'
  | '+2'
  | '+3'
  | '+4'

export function toResult(type: MatchupTypes) {
  const determinator = type[0]
  switch (determinator) {
    case '-':
      return 'Player 1 Loses.'
    case '+':
      return 'Player 1 Wins!'
    default:
      return 'This is an even matchup'
  }
}
