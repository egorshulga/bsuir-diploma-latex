// SubjectName.tsx
import * as React from "react";
import { observer } from "mobx-react";
import { Popup } from "semantic-ui-react";

import { Subject } from "models/subjects";

export class SubjectName extends React.Component<{ subject: Subject }, {}> {
    render() {
        const subjectAbbreviation = (
            <span className="subject-abbreviation">
                {this.props.subject.abbreviation}
            </span>
        );
        return (
            <Popup trigger={subjectAbbreviation} content={this.props.subject.name} position="right center" flowing/>
        );
    }
}