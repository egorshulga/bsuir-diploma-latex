// Disciplines.tsx
import * as React from "react";
import { observer } from "mobx-react";

import { TwoSidePanel } from "components/TwoSidePanel";
import { DisciplinesView } from "components/disciplines/DisciplinesView";

import uiStore from "stores/UiStore";

import "styles/disciplines/disciplines.scss";

@observer
export class Disciplines extends React.Component<{}, {}>{
    render() {
        return (
            <div id="disciplines">
                <TwoSidePanel left={<DisciplinesView />} right={uiStore.secondaryPage} />
            </div>
        );
    }
}
