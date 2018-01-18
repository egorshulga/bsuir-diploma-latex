// Agenda.tsx
import * as React from "react";
import { observer } from "mobx-react";

import { TwoSidePanel } from "components/TwoSidePanel";
import { AgendaView } from "components/agenda/AgendaView";

import uiStore from "stores/UiStore";

import "styles/agenda/agenda.scss";

@observer
export class Agenda extends React.Component<{}, {}> {
    render() {
        return (
            <div id="agenda">
                <TwoSidePanel left={<AgendaView />} right={uiStore.secondaryPage} />
            </div>
        );
    }
}
