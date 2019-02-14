import {JobType} from "./JobType";
import {JobsCatalog} from "./Catalog/JobsCatalog";

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
