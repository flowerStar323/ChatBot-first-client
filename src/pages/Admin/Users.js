import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Menu, Button } from "antd";
class Users extends Component {
    render() {
        return (
            <div style={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Card style={{ width: "95%", height: "95%", borderRadius: "20px", boxShadow: "5px 5px 5px grey" }}
                    title={<div style={{ fontWeight: "bold" }}>Users</div>}
                    extra={<div>
                        <Button type="primary">Edit</Button>
                        <Button type="primary" style={{ marginLeft: "5px" }}>Lock</Button>
                        <Button type="primary" style={{ marginLeft: "5px" }}>Save</Button>
                    </div>}>
                    user
                </Card>
            </div>
        );
    }
}

export default Users;