import {JobType} from "./JobType";

// TODO Quel utilité ?

export class JobsComposition {
    readonly _jobLevelMap: Map<JobType, number>;

    constructor() {
        this._jobLevelMap = new Map;
    }

    get jobLevelMap(): Map<JobType, number> {
        return this._jobLevelMap;
    }

    addJobLevel(key: JobType, value: number) {
        this._jobLevelMap[key] = value;
    }
}
