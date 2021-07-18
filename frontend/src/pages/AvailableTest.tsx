
import React, { useEffect, useState } from 'react';
import { TestService } from '../services/test';
import { List, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { Test, TestTaken } from '../models/test';


export const AvailableTest = () => {
    const testService = new TestService();
    const [tests, setTests] = useState([]);
    const [attempts, setAttempts] = useState([]);

    useEffect(() => {
        testService.getAllTets().then(response => {
            if (response.data) {
                setTests(response.data);
            }
        })
        testService.getAttempts().then(response => {
            if (response.data) {
                setAttempts(response.data);
            }
        })
    }, [])

    return (
        <div>
            <Divider orientation="left">Available Test</Divider>

            <List
                bordered
                dataSource={tests}
                renderItem={(item: Test) => (
                    <List.Item actions={[<Link to={"/test/" + item.id}>Take Test</Link>]}>
                        {item.name}
                    </List.Item>
                )}
            />
            <Divider orientation="left">Already Taken</Divider>
            <List
                bordered
                dataSource={attempts}
                renderItem={(item: TestTaken) => (
                    <List.Item actions={[<span>{item.status}</span>]}>
                        {item.test.name}
                    </List.Item>
                )}
            />
        </div>
    )
}