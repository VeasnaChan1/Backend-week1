import fs from 'fs';
import { Duration } from '../model/Duration.js';
import { RaceResult } from '../model/RaceResult.js';

export class RaceScoreService{
    constructor() {
        this._raceResult = [];
    }
    /**
     *
     *
     * @param {RaceResult} result
     * @memberof RaceScoreService
     */
    addRaceResult(result){
        this._raceResult.push(result);
    }

    /** 
    * Saves the race results list to a JSON file. 
    * @param {string} filePath - The path to the file data should be saved. 
    */ 
    saveToFile(filePath) { 
    // Your code 
    fs.writeFileSync(filePath, JSON.stringify(this._raceResult))
    } 

    /** 
    * Loads the race results list from a JSON file. 
    * @param {string} filePath - The path to the file to load data from. 
    * @returns {boolean} True if loading was successful, false otherwise. 
    */ 
    loadFromFile(filePath) { 
    // Your code 
    try
    {
    const data= fs.readFileSync(filePath, 'utf8');
    this._raceResult=JSON.parse(data).map(item => new RaceResult(item._participantID, item._sportType, new Duration(item._duration._totalSeconds)));
    return true;
    }
    catch(error)
    {
    console.log(error);
    return false;
    }

    } 

    /** 
    * Retrieves the race time for a given participant and sport. 
    * @param {string} participantId - Participant ID. 
    * @param {string} sport - Sport name. 
    * @returns {Duration|null} Duration if found, else null. 
    */ 
    getTimeForParticipant(participantId, sport) { 
    // Your code 
    const match= this._raceResult.find((result)=>
    result._participantID==participantId && result._sportType==sport);
    return match? match._duration: null;
    } 

    /** 
    * Computes total time for a given participant by summing their race times. 
    * @param {string} participant_id - The ID of the participant. 
    * @returns {Duration} The total Duration object 
    */ 
    getTotalTimeForParticipant(participant_id) { 
    // Your code 
    const match = this._raceResult.filter((result)=>
        result._participantID==participant_id
    );
    if(match.length == 0){return new Duration(0)}
    return match.reduce((total, result)=>{return total.plus(result._duration)}, new Duration(0));
    }
}