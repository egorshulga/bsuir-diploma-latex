// App.tsx
import * as React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router";
import { Router, hashHistory, Route, IndexRedirect } from "react-router";
import { Menu } from "semantic-ui-react";

import { Agenda } from "components/agenda/Agenda";
import { Disciplines } from "components/disciplines/Disciplines";

import "styles/app.scss";

@observer
export class AppRouter extends React.Component<{}, {}>{
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRedirect to="agenda" />
                    <Route path="agenda" component={Agenda} />
                    <Route path="disciplines" component={Disciplines} />
                </Route>
            </Router>
        );
    }
}

@observer
export class App extends React.Component<{}, {}> {
    render() {
        return (
            <div id="app">
                <header id="main-header">
                    {/*this.props.header*/}
                </header>
                <div id="app-body">
                    <Menu vertical borderless>
                        <Menu.Item as={Link} to="/agenda" activeClassName="active">Расписание</Menu.Item>
                        <Menu.Item as={Link} to="/disciplines" activeClassName="active">Предметы</Menu.Item>
                        <Menu.Item as={Link} to="" activeClassName="active">Сообщения</Menu.Item>
                        <Menu.Item as={Link} to="" activeClassName="active">Уведомления</Menu.Item>
                    </Menu>
                    <section id="app-content">{this.props.children}</section>
                </div>
            </div>
        );
    }
}
