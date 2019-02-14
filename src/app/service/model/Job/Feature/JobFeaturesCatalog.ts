import {JobFeatureType} from "./JobFeatureType";
import {JobFeature} from "./JobFeature";

export class JobFeaturesCatalog {
    private static instance: JobFeaturesCatalog;

    private constructor() {}

    private static getInstance(): JobFeaturesCatalog {
        if(this.instance) {
            this.instance = new JobFeaturesCatalog();
        }

        return this.instance;
    }

    public static getJobFeature(jobFeatureType: JobFeatureType):JobFeature {
        return undefined;//TODO
    }
}
