// AgendaLine.tsx
import * as React from "react";
import { observer } from "mobx-react";
import { formatDate } from "utils/timeutils";

import { AgendaItem } from "models/agenda";
import { Task } from "models/tasks";
import { TaskLine } from "components/elements/TasksLine";

import uiStore from "stores/UiStore";

import "styles/agenda/agenda-line.scss";

@observer
export class AgendaLine extends React.Component<{ item: AgendaItem }, {}> {
    render() {
        return (
            <div className="agenda-item" onClick={(e) => this.onClickAgendaItem(this.props.item)}>
                <div className="agenda-item-info">
                    <span className="agenda-item-time">{this.props.item.formatTimeSlot()}</span>
                    <span className="agenda-item-subject">{this.props.item.subject.abbreviation}</span>
                    <span className="agenda-item-subject-type">{this.props.item.subject.type}</span>
                    <span className="agenda-item-auditorium">{this.props.item.auditorium}</span>
                    <span className="agenda-item-lecturer">{this.props.item.subject.tutor.getReducedName()}</span>
                </div>
                <div className="agenda-item-status">
                    {
                        this.props.item.subject.tasks ?
                            <TaskLine tasks={this.props.item.subject.tasks} /> :
                            null
                    }
                </div>
            </div>
        );
    }

    onClickAgendaItem(agendaItem: AgendaItem) {
        uiStore.selectSubject(agendaItem.subject);
    }
}

export class AgendaLineDate extends React.Component<{ date: Date }, {}> {
    render() {
        return (
            <div className="agenda-line-date">
                {`${formatDate(this.props.date)}`}
            </div>
        );
    }
}
