// SubjectPage.tsx
import * as React from "react";
import { observer } from "mobx-react";
import { Accordion } from "semantic-ui-react";

import { SubjectName } from "components/elements/SubjectName";
import { TutorName } from "components/elements/TutorName";

import { AgendaItem } from "models/agenda";
import { Subject } from "models/subjects";

import "styles/pages/subject-page.scss";

@observer
export class SubjectPage extends React.Component<{ subject: Subject }, {}> {
    render() {
        return (
            <div className="agenda-item-page">
                {this.renderHeader()}
                {this.renderContent()}
            </div>
        );
    }

    renderHeader() {
        return (
            <div className="agenda-item-page-header">
                <span className="agenda-item-page-header-subject">
                    <SubjectName subject={this.props.subject} />
                </span>
                <span className="agenda-item-page-header-lecturer">
                    <TutorName tutor={this.props.subject.tutor} />
                </span>
            </div>
        );
    }

    renderContent() {
        return (
            <Accordion className="agenda-item-page-books" styled fluid exclusive={false}>
                <Accordion.Title>Материалы</Accordion.Title>
                <Accordion.Content>

                </Accordion.Content>

                <Accordion.Title>Задания</Accordion.Title>
                <Accordion.Content>

                </Accordion.Content>

                <Accordion.Title>Сообщения</Accordion.Title>
                <Accordion.Content>

                </Accordion.Content>
            </Accordion>
        );
    }
}
