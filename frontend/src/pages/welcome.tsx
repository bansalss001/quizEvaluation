import React, { useEffect, useState } from "react";
import { User } from '../models/user';
import { UserObservable } from '../helpers/event';
import { Card, Input } from "antd";

export const Welcome = () => {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const sub = UserObservable.subscribe((user) => {
            if (user) {
                setUser(user as User);
            }
        })
    }, [])

    return (
        <div>
            {
                user ?
                    <Card hoverable>Welcome {user.name}</Card>
                    :
                    <Card title="Welcome !!!" hoverable>
                        <label>Enter Your Name</label>
                        <Input></Input>
                    </Card>
            }
        </div>
    )

}