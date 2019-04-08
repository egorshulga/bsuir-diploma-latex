// UiStore.tsx
import * as React from "react";
import { observable, action } from "mobx";

import agendaStore from "stores/AgendaStore";

import { Task } from "models/tasks";
import { AgendaItem } from "models/agenda";
import { Subject } from "models/subjects";

import { TaskPage } from "components/pages/TaskPage";
import { SubjectPage } from "components/pages/SubjectPage";

class UIStore {
    // Right panel in TwoSidePanel.
    @observable secondaryPage: React.ReactNode;

    @observable selectedTask: Task;
    @observable selectedAgendaItem: AgendaItem;
    @observable selectedSubject: Subject;

    @action selectTask(task: Task) {
        this.selectedTask = task;
        this.secondaryPage = <TaskPage task={this.selectedTask}/>;
    }

    //@action selectAgendaItem(agendaItem: AgendaItem) {
    //    this.selectedAgendaItem = agendaItem;
    //    this.secondaryPage = <AgendaItemPage agendaItem={this.selectedAgendaItem} />;
    //}

    @action selectSubject(subject: Subject) {
        this.selectedSubject = subject;
        this.secondaryPage = <SubjectPage subject={this.selectedSubject} />;
    }

}

export const uiStore = new UIStore();
export default uiStore;
