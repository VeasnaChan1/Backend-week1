import { Duration } from "./model/Duration.js"; 
import { RaceScoreService } from "./service/raceScoreService.js";
import { RaceResult } from "./model/RaceResult.js";
// Initialize RaceResults 
const raceManager = new RaceScoreService(); 
raceManager.addRaceResult(new RaceResult("participant1", "swim",  Duration.fromMinutesAndSeconds(2, 30))); 
raceManager.addRaceResult(new RaceResult("participant1", "run",  Duration.fromMinutesAndSeconds(1, 45))); 
raceManager.addRaceResult(new RaceResult("participant2", "swim",  Duration.fromMinutesAndSeconds(3, 15))); 
// Save results to file 
raceManager.saveToFile("./data/raceScores.json"); 