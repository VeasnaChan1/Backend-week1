import { Duration } from "./Duration.js";
/**
 *
 *
 * @export
 * @class RaceResult
 */
export class RaceResult{
    _participantID;
    _sportType;
    _duration;


//     Following the  Duration class, define the - 
// Class attributes, with proper JS Doc comments - - 
// Class constructor, with proper JS Doc comments 
// The class RaceResult shall have a list of race results (array)
    /**
     * Creates an instance of RaceResult.
     * @param {string} participantID
     * @param {string} sportType
     * @param {Duration} duration
     * @memberof RaceResult
     */
    constructor(participantID, sportType, duration){
    this._participantID=participantID;
    this._sportType= sportType;
    this._duration= duration;
    }
}