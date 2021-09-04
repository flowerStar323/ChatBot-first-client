import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Menu, Button, Select } from "antd";
import axios from "../../api/axios";
const { Option } = Select;
class Match extends Component {
    constructor() {
        super();
        this.state = {
            teamarray: []
        }
    }
    componentDidMount() {
        axios.get('/get_teamnames').then(e => { console.log(e) }).catch(err => console.log(err));
    }

    render() {
        return (
            <div style={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Card style={{ width: "95%", height: "95%", borderRadius: "20px", boxShadow: "5px 5px 5px grey" }}
                    title={<div style={{ fontWeight: "bold" }}>Match</div>}
                    extra={<div>
                        <Button type="primary">Edit</Button>
                        <Button type="primary" style={{ marginLeft: "5px" }}>Lock</Button>
                        <Button type="primary" style={{ marginLeft: "5px" }}>Save</Button>
                    </div>}>
                    <div style={{ textAlign: "center" }}>
                        <h2>Select the Teams on Match</h2>
                        <Row>
                            <Col span={12}>
                                <Select>
                                    <Option></Option>
                                </Select>
                            </Col>
                            <Col span={12}>df</Col>
                        </Row>
                    </div>

                </Card>
            </div>
        );
    }
}

export default Match;