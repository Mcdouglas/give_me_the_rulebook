import {JobTemplate} from "../Template/JobTemplate";
import {JobType} from "../JobType";
import {JobsCatalogFactory} from "./JobsCatalogFactory";

export class JobsCatalog {
    readonly catalog: Map<JobType, JobTemplate>;
    private static instance: JobsCatalog;

    private constructor() {
        this.catalog = new Map;
        this.catalog[JobType.BARBARIAN] = JobsCatalogFactory.buildBarbarianCatalog();
    }

    private static getInstance(): JobsCatalog {
        if(this.instance) {
            this.instance = new JobsCatalog();
        }

        return this.instance;
    }

    public static getJobTemplate(jobType: JobType): JobTemplate {
        return this.getInstance().catalog[jobType];
    }
}
