// TwoSidePanel.tsx
import * as React from "react";
import Scrollbars from "react-custom-scrollbars";

import "styles/panels.scss";

export interface ITwoSidePanelProps {
    left?: React.ReactNode;
    right?: React.ReactNode;
}

export class TwoSidePanel extends React.Component<ITwoSidePanelProps, {}> {
    render() {
        return (
            <div className="two-side-panel">
                    <div className="left-side">{this.props.left}</div>
                <Scrollbars autoHide>
                    <div className="right-side">{this.props.right}</div>
                </Scrollbars>
            </div>
        );
    }
}
