// AgendaView.tsx
import * as React from "react";
import { observer } from "mobx-react";
import Scrollbars from "react-custom-scrollbars";
import { Segment, Button } from "semantic-ui-react";

import { AgendaLine, AgendaLineDate } from "components/agenda/AgendaLine";

import agendaStore from "stores/AgendaStore";

import { dateCompare, areDifferentDays } from "utils/timeutils";

import "styles/agenda/agenda-view.scss";

@observer
export class AgendaView extends React.Component<{}, {}> {
    render() {
        return (
            <div id="agenda-view">
                <Segment>
                    <Button.Group compact floated="right">
                        <Button compact>Предыдущая неделя</Button>
                        <Button icon="calendar" compact></Button>
                    </Button.Group>
                </Segment>
                {this.renderAgendaList()}
            </div>
        );
    }

    renderAgendaList() {
        return (
            <Scrollbars autoHide>
                <div id="agenda-list">
                    {
                        (() => {
                            let agendaItems = agendaStore.agendaItems
                                .sort((a, b) => dateCompare(a.startDate, b.startDate));
                            let agendaLines: React.ReactNode[] = [];
                            for (let i = 0; i < agendaItems.length; i++) {
                                if (!agendaItems[i - 1] || areDifferentDays(agendaItems[i - 1].startDate, agendaItems[i].startDate))
                                    agendaLines.push(<AgendaLineDate date={agendaItems[i].startDate} key={i + agendaItems.length} />);
                                agendaLines.push(<AgendaLine item={agendaItems[i]} key={i} />);
                            }
                            return agendaLines;
                        })()
                    }
                </div>
            </Scrollbars>
        );
    }
}
