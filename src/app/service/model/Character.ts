import {JobType} from "./Job/JobType";
import {JobImplementation} from "./Job/Template/JobTemplate";
import {JobFeatureType, PickedFeatureType} from "./Job/Feature/JobFeatureType";

export class Character {
    private readonly _jobImplementations: Map<JobType, JobImplementation>;

    constructor(public name: string,
                public age: number,
                jobType: JobType,
                private _gender: GenderType = GenderType.MALE,
                private _isPlayable: boolean = true) {
        this._jobLevelMap = new Map;
        this._jobImplementations = new Map;
        this._jobImplementations[jobType] = new JobImplementation(jobType);
    }

    private _background?: string | any;
    readonly _jobLevelMap: Map<JobType, number>;

    get gender(): GenderType {
        return this._gender;
    }

    get isPlayable(): boolean {
        return this._isPlayable;
    }

    set background(value: string | any) {
        this._background = value;
    }

    get background(): string | any {
        return this._background;
    }

    get jobImplementations(): Map<JobType, JobImplementation> {
        return this._jobImplementations;
    }

    public addJobImplementation(jobType: JobType) {
        this.jobImplementations[jobType] = new JobImplementation(jobType);
    }

    public addPickedJobFeature(level: number, jobType: JobType, jobTypejobFeatureType: JobFeatureType, pickedFeatureType: PickedFeatureType) {
        this.jobImplementations[jobType].addJobFeaturePerLevel(level, jobTypejobFeatureType, pickedFeatureType);
    }

    public getHitDice(): number
    {
        let hitDice = 0;
        this.jobImplementations.forEach((value: JobImplementation, key: JobType, map: Map<JobType, JobImplementation>) => {
            hitDice += value.currentLevel;
        });
        return hitDice;
    }
}

export enum GenderType {
    MALE = "MALE",
    FEMALE = "FEMALE",
    UNKNOWN = "UNKNOWN"
}
