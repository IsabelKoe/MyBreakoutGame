// interface for items in highscore array
export interface score {
  level: number,
  time: string
}

// interface for player
export interface Player {
  name: string;
  highscore?: score[];
}
