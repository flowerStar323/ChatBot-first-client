import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Menu, Button } from "antd";
import Users from './Users';
import Match from './Match';
import Entries from './Entries';
class index extends Component {
    constructor() {
        super();
        this.state = {
            leftMenucheck: 0
        }
    }
    menuClick = (e) => {
        if (e.key == "item_0") this.setState({ leftMenucheck: 0 });
        else if (e.key == "item_1") this.setState({ leftMenucheck: 1 });
        else if (e.key == "item_2") this.setState({ leftMenucheck: 2 });
    }
    render() {
        const { leftMenucheck } = this.state;
        let right;
        if (leftMenucheck == 0) {
            right = <Match />;
        } else if (leftMenucheck == 1) {
            right = <Users />;
        } else {
            right = <Entries />;
        }
        return (
            <div>
                <Row>
                    <Col span={5}>
                        <Menu style={{ height: "89vh" }} onClick={this.menuClick}>
                            <Menu.Item>Match</Menu.Item>
                            <Menu.Item>Users</Menu.Item>
                            <Menu.Item>Entries</Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={19}>
                        {right}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default index;