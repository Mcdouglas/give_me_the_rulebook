import {JobFeatureType, PickedFeatureType} from "./JobFeatureType";
import {JobFeaturesCatalog} from "./JobFeaturesCatalog";

export class JobFeature {
    constructor(private _jobFeatureType: JobFeatureType,
                private _isExtroardinaryAbility: boolean = false,
                private _name: string,
                private _description: string,
                private _isSelectable: boolean = false) {
    }

    get jobFeatureType(): JobFeatureType {
        return this._jobFeatureType;
    }

    get isExtroardinaryAbility(): boolean {
        return this._isExtroardinaryAbility;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get isSelectable(): boolean {
        return this._isSelectable;
    }
}

export class PickedJobFeature extends JobFeature {
    readonly _selectionLevel: number;
    private readonly _pickedFeatureType: PickedFeatureType;

    constructor(selectionLevel: number, jobFeatureType: JobFeatureType, pickedFeatureType: PickedFeatureType) {
        const jobFeature = JobFeaturesCatalog.getJobFeature(jobFeatureType);
        super(jobFeatureType, jobFeature.isExtroardinaryAbility, jobFeature.name, jobFeature.description, true);
        this._selectionLevel = selectionLevel;
        this._pickedFeatureType = pickedFeatureType;
    }

    get selectionLevel(): number {
        return this._selectionLevel;
    }

    get pickedFeatureType(): PickedFeatureType {
        return this._pickedFeatureType;
    }
}
