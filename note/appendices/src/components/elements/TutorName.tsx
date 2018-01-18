// TutorName.tsx
import * as React from "react";
import { observer } from "mobx-react";
import { Popup } from "semantic-ui-react";

import { Tutor } from "models/roles";

export class TutorName extends React.Component<{ tutor: Tutor }, {}> {
    render() {
        const tutorReducedName = (
            <span className="tutor-name">
                {this.props.tutor.getReducedName()}
            </span>
        );
        return (
            <Popup trigger={tutorReducedName} content={this.props.tutor.getFullName()} position="right center" flowing/>
        );
    }
}
