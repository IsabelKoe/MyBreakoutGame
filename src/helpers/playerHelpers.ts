// Hier muss noch eine Logik für implementiert werden!
enum status {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  EXPERT = "Expert",
}

export interface Player {
  playerId: number;
  name: string;
  status?: status;
  highscore?: [{ level: number; time: string }];
}
