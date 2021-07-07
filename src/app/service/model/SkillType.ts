import {AbilityType} from "./AbilityType";
import {JobType} from "./Job/JobType";

export class Skill {
    constructor(private _skillType: SkillType,
                private _keyAbility: AbilityType,
                private _skillJobMap: Map<JobType, boolean>,
                private _untrained = false,
                private _armorCheckPenalty = false,
                public description?: string) {
    }

    get skillType(): SkillType {
        return this._skillType;
    }

    get keyAbility(): AbilityType {
        return this._keyAbility;
    }

    get skillJobMap(): Map<JobType, boolean> {
        return this._skillJobMap;
    }

    get untrained(): boolean {
        return this._untrained;
    }

    get armorCheckPenalty(): boolean {
        return this._armorCheckPenalty;
    }
}

export class KnowledgeSkill extends Skill {
    constructor(private _knowledgeType: KnowledgeType,
                keyAbility: AbilityType,
                skillJobMap: Map<JobType, boolean>,
                untrained = false,
                armorCheckPenalty = false,
                description?: string) {

        super(BasicSkillType.KNOWLEDGE,
            keyAbility,
            skillJobMap,
            untrained,
            armorCheckPenalty,
            description);
    }

    get knowledgeType(): KnowledgeType {
        return this._knowledgeType;
    }
}

export type SkillType = BasicSkillType | KnowledgeType;

export enum BasicSkillType {
    ACROBATICS,
    APPRAISE,
    BLUFF,
    CLIMB,
    CRAFT,
    DIPLOMACY,
    DISABLE_DEVICE,
    DISGUISE,
    ESCAPE_ARTIST,
    FLY,
    HANDLE_ANIMAL,
    HEAL,
    INTIMIDATE,
    KNOWLEDGE,
    LINGUISTICS,
    PERCEPTION,
    PERFORM,
    PROFESSION,
    RIDE,
    SENSE_MOTIVE,
    SLEIGHT_OF_HAND,
    SPELLCRAFT,
    STEALTH,
    SURVIVAL,
    SWIM,
    USE_MAGIC_DEVICE
}

export enum KnowledgeType {
    ARCANA,
    DUNGEONEERING,
    ENGINEERING,
    GEOGRAPHY,
    HISTORY,
    LOCAL,
    NATURE,
    NOBILITY,
    PLANES,
    RELIGION
}
