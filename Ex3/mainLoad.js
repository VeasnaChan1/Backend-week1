import { RaceScoreService } from './service/raceScoreService.js';
// Load results from file
const raceManager = new RaceScoreService();
raceManager.loadFromFile('./data/raceScores.json'); 
// Retrieve time for a participant and sport 
const time1 = raceManager.getTimeForParticipant('participant1', 'swim'); 
console.log(time1.toString()); // "2m 30s" 
// Compute total time for a participant 
const totalTime1 = raceManager.getTotalTimeForParticipant('participant1'); 
console.log(totalTime1.toString()); // "4m 15s" 

// Test your method

const time1 = raceManager.getTimeForParticipant('participant1', 'swim'); 
console.log(time1.toString());

const time2=raceManager.getTimeForParticipant('participant1', 'run');
console.log(time2.toString());

const time3=raceManager.getTimeForParticipant('participant2', 'swim');
console.log(time3.toString());
