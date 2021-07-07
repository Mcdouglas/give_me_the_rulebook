import {JobTemplate} from "../Template/JobTemplate";
import {SaveType} from "../../SaveType";
import {SaveBonusGridHigh, SaveBonusGridLow} from "../../SaveBonusGrid";
import {ArmorCategory, WeaponCategory} from "../../EquipementEnum";
import {BarbarianFeatureType} from "../Feature/JobFeatureType";
import {JobFeature} from "../Feature/JobFeature";
import {JobType} from "../JobType";
import {DiceType} from "../../Dice/DiceType";
import {BasicSkillType, KnowledgeType} from "../../SkillType";
import {BonusAttackBonusGridHigh} from "../../BonusAttackBonusGrid";

export class JobsCatalogFactory {
    public static buildBarbarianCatalog(): JobTemplate {
        const saveGridMap = new Map;
        saveGridMap[SaveType.FORTITUDE] = SaveBonusGridHigh;
        saveGridMap[SaveType.REFLEX] = SaveBonusGridHigh;
        saveGridMap[SaveType.WILL] = SaveBonusGridLow;

        const weaponArmorProficiency = new Map;
        weaponArmorProficiency[ArmorCategory.LIGHT_ARMOR] = true;
        weaponArmorProficiency[ArmorCategory.MEDIUM_ARMOR] = true;
        weaponArmorProficiency[ArmorCategory.HEAVY_ARMOR] = true;
        weaponArmorProficiency[ArmorCategory.SHIELD] = true;
        weaponArmorProficiency[ArmorCategory.TOWER_SHIELD] = false;
        weaponArmorProficiency[WeaponCategory.SIMPLE] = true;
        weaponArmorProficiency[WeaponCategory.MARTIAL] = true;
        weaponArmorProficiency[WeaponCategory.EXOTIC] = false;

        const jobFeaturesPerLevel = new Map;
        const jobFeatures = new Map;
        jobFeatures[BarbarianFeatureType.FAST_MOVEMENT] = new JobFeature(BarbarianFeatureType.FAST_MOVEMENT, true, "Fast Movement (Ex)", "Run faster");
        jobFeatures[BarbarianFeatureType.RAGE] = new JobFeature(BarbarianFeatureType.RAGE, true, "Rage (Ex)", "Rage during some turns");
        jobFeaturesPerLevel[1] = jobFeatures;

        return <JobTemplate>{
            _jobType: JobType.BARBARIAN,
            _hitDice: DiceType.d12,
            _jobSkills: [
                BasicSkillType.ACROBATICS,
                BasicSkillType.CLIMB,
                BasicSkillType.CRAFT,
                BasicSkillType.HANDLE_ANIMAL,
                BasicSkillType.INTIMIDATE,
                KnowledgeType.NATURE,
                BasicSkillType.PERCEPTION,
                BasicSkillType.RIDE,
                BasicSkillType.SURVIVAL,
                BasicSkillType.SWIM
            ],
            _skillRanksPerLevel: 4,
            _bonusAttackBonusGrid: BonusAttackBonusGridHigh,
            _saveBonusGridMap: saveGridMap,
            _equipementProficiency: weaponArmorProficiency,
            _jobFeaturesPerLevel: jobFeaturesPerLevel,
            _description: "blabla"
        };
    }
}
