import {JobTemplate} from "../Template/JobTemplate";
import {JobType} from "../JobType";
import {JobsCatalogFactory} from "./JobsCatalogFactory";

export namespace JobsCatalog {
    function initCatalog(): Map<JobType, JobTemplate> {
        const catalog = new Map;
        catalog[JobType.BARBARIAN] = JobsCatalogFactory.buildBarbarianCatalog();
        return catalog;
    }

    const _catalog : Map<JobType, JobTemplate> = initCatalog();

    export function getJobTemplate(jobType: JobType): JobTemplate {
        return _catalog[jobType];
    }
}
