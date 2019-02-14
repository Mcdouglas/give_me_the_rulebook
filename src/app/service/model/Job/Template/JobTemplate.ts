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

export class JobTemplate {
    constructor(private _jobType: JobType,
                private _hitDice: DiceType,
                private _jobSkills: Array<SkillType>,
                private _skillRanksPerLevel: number,
                private _bonusAttackBonusGrid: DiceBonus[],
                private _saveBonusGridMap: Map<SaveType, SaveBonusGrid>,
                private _equipementProficiency: Map<EquipemetCategory, boolean>,
                private _jobFeaturesPerLevel: Map<number, Map<JobFeatureType, JobFeature>>,
                private _description: string) {
    }

    get jobType(): JobType {
        return this._jobType;
    }

    get hitDice(): DiceType {
        return this._hitDice;
    }

    get jobSkills(): Array<SkillType> {
        return this._jobSkills;
    }

    get skillRanksPerLevel(): number {
        return this._skillRanksPerLevel;
    }

    get bonusAttackBonusGrid(): DiceBonus[] {
        return this._bonusAttackBonusGrid;
    }

    get saveBonusGridMap(): Map<SaveType, SaveBonusGrid> {
        return this._saveBonusGridMap;
    }

    get equipementProficiency(): Map<EquipemetCategory, boolean> {
        return this._equipementProficiency;
    }

    get jobFeaturesPerLevel(): Map<number, Map<JobFeatureType, JobFeature>> {
        return this._jobFeaturesPerLevel;
    }

    get description(): string {
        return this._description;
    }
}

export class JobImplementation extends JobTemplate implements JobInterface{

    private _currentLevel: number;
    readonly pickedJobFeaturesPerLevel: Map<number, Map<JobFeatureType, PickedJobFeature>>;
    readonly rolledHealthDice: Map<number, number>;

    constructor(jobType: JobType) {
        const job = JobsCatalog.getJobTemplate(jobType);
        super(jobType,
            job.hitDice,
            job.jobSkills,
            job.skillRanksPerLevel,
            job.bonusAttackBonusGrid,
            job.saveBonusGridMap,
            job.equipementProficiency,
            job.jobFeaturesPerLevel,
            job.description);
        this.pickedJobFeaturesPerLevel = new Map;
        this.rolledHealthDice = new Map;
        this.currentLevel = 1;
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

export interface JobInterface {
    makeLevelUp(levelUp: LevelUp);
}
