// SubjectStore.ts
import { observable, action } from 'mobx';

import { Subject } from "models/subjects";

import * as TaskMocks from "mocks/tasksMocks";
import * as SubjectMocks from "mocks/subjectsMocks";

class SubjectsStore {
    @observable activityTypes: Map<string, string>;
    @observable taskTypes: Map<string, string>;

    @observable subjects: Subject[];

    constructor() {
        this.loadActivityTypes();
        this.loadTaskTypes();
        this.loadSubjects();
    }

    @action loadActivityTypes() {
        this.activityTypes = SubjectMocks.activityTypes;
    }

    @action loadTaskTypes() {
        this.taskTypes = TaskMocks.taskTypes;
    }

    @action loadSubjects() {
        this.subjects = SubjectMocks.subjects;
    }
}

export const subjectsStore = new SubjectsStore();
export default subjectsStore;
