import {Comment} from './comment';

export class Issue {
    issueId: string;
    summary: string;
    criticality: string;
    raisedType: string;
    description: string;
    stepsReproduce: string;
    issueType: string;
    comments : Comment[];
    issueStatus: string;
}