import {DiceType} from "../../Dice/DiceType";
import {DiceBonus} from "../../Dice/DiceBonus";
import {SaveType} from "../../SaveType";
import {SaveBonusGrid} from "../../SaveBonusGrid";
import {SkillType} from "../../SkillType";
import {EquipemetCategory} from "../../EquipementEnum";
import {JobType} from "../JobType";
import {JobFeatureType, PickedFeatureType} from "../Feature/JobFeatureType";
import {JobFeature, PickedJobFeature} from "../Feature/JobFeature";
import {JobsCatalog} from "../Catalog/JobsCatalog";
import {LevelUp} from "../Level/LevelUp";

export interface JobTemplate {
    readonly _jobType: JobType;
    readonly _hitDice: DiceType;
    readonly _jobSkills: Array<SkillType>;
    readonly _skillRanksPerLevel: number;
    readonly _bonusAttackBonusGrid: DiceBonus[];
    readonly _saveBonusGridMap: Map<SaveType, SaveBonusGrid>;
    readonly _equipementProficiency: Map<EquipemetCategory, boolean>;
    readonly _jobFeaturesPerLevel: Map<number, Map<JobFeatureType, JobFeature>>;
    readonly _description: string;

    makeLevelUp(levelUp: LevelUp);
}

export class JobImplementation implements JobTemplate {

    // from interface
    readonly _bonusAttackBonusGrid: DiceBonus[];
    readonly _description: string;
    readonly _equipementProficiency: Map<EquipemetCategory, boolean>;
    readonly _hitDice: DiceType;
    readonly _jobFeaturesPerLevel: Map<number, Map<JobFeatureType, JobFeature>>;
    readonly _jobSkills: Array<SkillType>;
    readonly _jobType: JobType;
    readonly _saveBonusGridMap: Map<SaveType, SaveBonusGrid>;
    readonly _skillRanksPerLevel: number;

    private _currentLevel: number;
    private readonly _pickedJobFeaturesPerLevel: Map<number, Map<JobFeatureType, PickedJobFeature>>;
    private readonly _rolledHealthDice: Map<number, number>;

    constructor(jobType: JobType) {
        const job = JobsCatalog.getJobTemplate(jobType);

        this._jobType = jobType;
        this._pickedJobFeaturesPerLevel = new Map;
        this._rolledHealthDice = new Map;
        this.currentLevel = 1;
        this._bonusAttackBonusGrid = job._bonusAttackBonusGrid;
        this._description = job._description;
        this._equipementProficiency = job._equipementProficiency;
        this._hitDice = job._hitDice;
        this._jobFeaturesPerLevel = job._jobFeaturesPerLevel;
        this._jobSkills = job._jobSkills;
        this._saveBonusGridMap = job._saveBonusGridMap;
        this._skillRanksPerLevel = job._skillRanksPerLevel;
    }

    public addJobFeaturePerLevel(level: number, jobFeatureType: JobFeatureType, pickedFeatureType: PickedFeatureType) {
        this._pickedJobFeaturesPerLevel[level][jobFeatureType] = new PickedJobFeature(level, jobFeatureType, pickedFeatureType);
    }

    private addHealthDice(level: number, value: number) {
        this._rolledHealthDice[level] = value;
    }

    get currentLevel(): number {
        return this._currentLevel;
    }

    set currentLevel(value: number) {
        this._currentLevel = value;
    }

    public makeLevelUp(levelUp: LevelUp) {
        this._currentLevel += 1;
        this.addHealthDice(this.currentLevel, levelUp.healthDiceResult);
        this.addJobFeaturePerLevel(this.currentLevel, levelUp.newJobFeatureToPick.jobFeatureType, levelUp.newJobFeatureToPick.pickedFeatureType);
    }
}
