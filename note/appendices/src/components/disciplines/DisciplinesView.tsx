// DisciplinesView.tsx
import * as React from "react";
import { observer } from "mobx-react";
import Scrollbars from "react-custom-scrollbars";

import { Subject } from "models/subjects";

import { TaskLine } from "components/elements/TasksLine";

import subjectsStore from "stores/SubjectsStore";
import uiStore from "stores/UiStore";

import "styles/disciplines/disciplines-view.scss";

@observer
export class DisciplinesView extends React.Component<{}, {}> {
    render() {
        return (
            <div id="disciplines-view">
                <Scrollbars autoHide>
                    {this.renderDisciplines()}
                </Scrollbars>
            </div>
        );
    }

    renderDisciplines() {
        return subjectsStore.subjects.map(this.renderDiscipline);
    }

    renderDiscipline = (subject: Subject, index: number) => {
        return (
            <div className="discipline-line" key={index} onClick={(e) => this.onClickDiscipline(subject)}>
                <div className="discipline-info">
                    <span className="discipline-abbreviation">{subject.abbreviation}</span>
                    <span className="discipline-tutor">{subject.tutor.getReducedName()}</span>
                    <span className="discipline-type">{subject.type}</span>
                    <span className="discipline-hours">{subject.totalHours} ауд.ч.</span>
                </div>
                <div className="discipline-status">
                    {subject.tasks ? <TaskLine tasks={subject.tasks} /> : null}
                </div>
            </div>
        );
    }

    onClickDiscipline(subject: Subject) {
        uiStore.selectSubject(subject);
    }
}
