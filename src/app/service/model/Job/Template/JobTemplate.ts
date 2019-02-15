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
    jobType: JobType;
    hitDice: DiceType;
    jobSkills: Array<SkillType>;
    skillRanksPerLevel: number;
    bonusAttackBonusGrid: DiceBonus[];
    saveBonusGridMap: Map<SaveType, SaveBonusGrid>;
    equipementProficiency: Map<EquipemetCategory, boolean>;
    jobFeaturesPerLevel: Map<number, Map<JobFeatureType, JobFeature>>;
    description: string;

    makeLevelUp(levelUp: LevelUp);
}

export class JobImplementation implements JobTemplate {

    // from interface
    bonusAttackBonusGrid: DiceBonus[];
    description: string;
    equipementProficiency: Map<EquipemetCategory, boolean>;
    hitDice: DiceType;
    jobFeaturesPerLevel: Map<number, Map<JobFeatureType, JobFeature>>;
    jobSkills: Array<SkillType>;
    jobType: JobType;
    saveBonusGridMap: Map<SaveType, SaveBonusGrid>;
    skillRanksPerLevel: number;

    private _currentLevel: number;
    readonly pickedJobFeaturesPerLevel: Map<number, Map<JobFeatureType, PickedJobFeature>>;
    readonly rolledHealthDice: Map<number, number>;

    constructor(jobType: JobType) {
        const job = JobsCatalog.getJobTemplate(jobType);

        this.jobType = jobType;
        this.pickedJobFeaturesPerLevel = new Map;
        this.rolledHealthDice = new Map;
        this.currentLevel = 1;
        this.bonusAttackBonusGrid = job.bonusAttackBonusGrid;
        this.description = job.description;
        this.equipementProficiency = job.equipementProficiency;
        this.hitDice = job.hitDice;
        this.jobFeaturesPerLevel = job.jobFeaturesPerLevel;
        this.jobSkills = job.jobSkills;
        this.saveBonusGridMap = job.saveBonusGridMap;
        this.skillRanksPerLevel = job.skillRanksPerLevel;
    }

    public addJobFeaturePerLevel(level: number, jobFeatureType: JobFeatureType, pickedFeatureType: PickedFeatureType) {
        this.pickedJobFeaturesPerLevel[level][jobFeatureType] = new PickedJobFeature(level, jobFeatureType, pickedFeatureType);
    }

    private addHealthDice(level: number, value: number) {
        this.rolledHealthDice[level] = value;
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
