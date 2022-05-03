// Hier muss noch eine Logik für implementiert werden!
//TODO lösch mich eventuell
enum status {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  EXPERT = "Expert",
}

export interface score {
  level: number,
  time: string
}

export interface Player {
  name: string;
  status?: status;
  highscore?: score[];
}
