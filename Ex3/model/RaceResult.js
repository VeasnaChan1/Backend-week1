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