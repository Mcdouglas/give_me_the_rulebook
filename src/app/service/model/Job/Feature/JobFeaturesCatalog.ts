import {JobFeatureType} from "./JobFeatureType";
import {JobFeature} from "./JobFeature";
import {JobFeaturesCatalogFactory} from "./JobFeaturesCatalogFactory";

export namespace JobFeaturesCatalog {
    function initCatalog() : Map<JobFeatureType, JobFeature> {
        let catalog = JobFeaturesCatalogFactory.addBarbarianFeaturesToCatalog(new Map);
        return catalog;
    }

    const _catalog : Map<JobFeatureType, JobFeature> = initCatalog();

    export function getJobFeature(jobFeatureType: JobFeatureType): JobFeature {
        return _catalog[jobFeatureType];
    }
}