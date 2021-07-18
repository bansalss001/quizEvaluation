import React, { useEffect, useState } from "react";
import { User } from '../models/user';
import { UserObservable, UserObserver } from '../helpers/event';
import { Button, Card, Input, Row } from "antd";
import { UserService } from "../services/user";
import Grid from "antd/lib/card/Grid";

export const Welcome = () => {

    const [user, setUser] = useState<User>();
    const [name, setName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const sub = UserObservable.subscribe((user) => {
            if (user) {
                setUser(user as User);
            }
        })

        return sub.unsubscribe();
    }, [])

    const save = () => {
        if (name) {
            setLoading(true);
            const userService = new UserService();
            userService.createUser(name).then(response => {
                console.log(response)
                if (response.data) {
                    localStorage.setItem('user_id', response.data.id);
                    UserObserver?.next(response.data);
                }
            })
        }
    }

    return (
        <div>
            {
                user ?
                    <Card hoverable>Welcome {user.name}</Card>
                    :
                    <Card title="Welcome !!!" hoverable>
                        <Row>
                            <label>Enter Your Name</label>
                            <Input placeholder="Eg. Sushant" onChange={e => setName(e.target.value)}></Input>
                        </Row>
                        <Row>
                            <Button color="dark" onClick={() => save()} disabled={!name} loading={loading}>Save</Button>
                        </Row>
                    </Card>
            }
        </div>
    )

}