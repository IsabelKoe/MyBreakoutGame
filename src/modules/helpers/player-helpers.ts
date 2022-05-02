// Hier muss noch eine Logik für implementiert werden!
//TODO lösch mich eventuell
enum status {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  EXPERT = "Expert",
}

export interface Player {
  name: string;
  status?: status;
  highscore?: [{ level: number; time: string }];
}
