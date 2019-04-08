// TaskPage.tsx
import * as React from "react";
import { observer } from "mobx-react";
import { Accordion } from "semantic-ui-react";

import { SubjectName } from "components/elements/SubjectName";
import { TutorName } from "components/elements/TutorName";

import { Task } from "models/tasks";
import { Subject } from "models/subjects";

import { subjectsStore } from "stores/SubjectsStore";

import "styles/pages/task-page.scss";

@observer
export class TaskPage extends React.Component<{ task: Task }, {}> {
    render() {
        return (
            <div className="task-page">
                {this.renderHeader()}
                {this.renderContent()}
            </div>
        );
    }

    renderHeader() {
        return (
            <div className="task-page-header">
                <span>
                    <span className="task-page-subject">
                        <SubjectName subject={this.props.task.subject} />
                    </span>
                    <span className="task-page-lecturer">
                        <TutorName tutor={this.props.task.subject.tutor} />
                    </span>
                </span>
                <span>
                    <span className="task-page-task-type">
                        {subjectsStore.taskTypes.get(this.props.task.type) + " №" + this.props.task.number}
                    </span>
                </span>
            </div>
        );
    }

    renderContent() {
        return (
            <Accordion styled fluid defaultActiveIndex={[0]} exclusive={false}>
                <Accordion.Title>Задание</Accordion.Title>
                <Accordion.Content>
                    {this.props.task.description}
                </Accordion.Content>

                <Accordion.Title>Результаты</Accordion.Title>
                <Accordion.Content>

                </Accordion.Content>

                <Accordion.Title>Сообщения</Accordion.Title>
                <Accordion.Content>

                </Accordion.Content>
            </Accordion>
        );
    }
}
