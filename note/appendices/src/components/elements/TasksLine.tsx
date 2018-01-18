import * as React from "react";
import { observer } from "mobx-react";

import { Task } from "models/tasks";

import uiStore from "stores/UiStore";
import subjectStore from "stores/SubjectsStore";

import "styles/elements/tasks-line.scss";

export class TaskLine extends React.Component<{ tasks: Task[] }, {}> {
    render() {
        return (
            <div className="task-line">
                {
                    Array.from(subjectStore.taskTypes).map(([taskType,], index) => {
                        let filteredTasks = this.props.tasks.filter((task) => task.type === taskType);
                        if (filteredTasks.length > 0) {
                            return (
                                <span className="tasks-by-type" key={index}>
                                    <span className="tasks">
                                        {
                                            filteredTasks
                                                .sort((a, b) => Number(a.number) - Number(b.number))
                                                .map((task, index) => (
                                                    <span className="task" key={index}>
                                                        <span className="task-number">{task.type}{task.number}</span>
                                                        {this.renderAgendaLineTaskMark(task)}
                                                    </span>
                                                ))
                                        }
                                    </span>
                                </span>
                            );
                        }
                    })
                }
            </div>
        );
    }

    renderAgendaLineTaskMark(task: Task) {
        return (
            <span className="task-mark" onClick={(e) => { this.onClickTask(task); e.stopPropagation(); }}>
                {task.mark ? <span className="task-mark-set">{task.mark}</span> : null}
            </span>
        );
    }

    onClickTask(task: Task) {
        uiStore.selectTask(task);
    }
}
