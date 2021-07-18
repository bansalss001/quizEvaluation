import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { TestService } from "../services/test";
import { Test as TestModel } from '../models/test';
import { Button, Card, Divider, List, Radio } from "antd";
import { useHistory } from "react-router-dom";

export const Test = () => {
    const testService = new TestService()
    const [test, setTest] = useState<TestModel>();
    const [time, setTime] = useState(0);
    const [date, setDate] = useState<Date>(new Date());
    const [questions, setQuestions] = useState<any[]>([]);
    const [attemps, setAttempts] = useState<any[]>([]);
    const { id } = useParams<any>();
    const history = useHistory()
    useEffect(() => {
        let int;
        if (id) {
            testService.getTest(id).then(res => {
                if (res.data) {
                    setTest(res.data);
                    setQuestions(getRandomQuestions(res.data.questions, res.data.total_number_questions))
                    setDate(new Date());
                    int = setInterval(() => setTime(new Date().getMilliseconds() - date.getMilliseconds()), 1000);
                }
            })
        }

        return clearInterval(int);
    }, [])

    const getRandomQuestions = (questions: any[], length: number) => {
        const data: any[] = [];
        const pushed: number[] = [];
        if (questions.length < length) {
            length = questions.length;
        }
        while (data.length < length) {
            const random = Math.floor(Math.random() * questions.length)
            if (!pushed.includes(random) && questions[random]) {
                data.push(questions[random]);
                pushed.push(random);
            }
        }

        return data;
    }

    const save = () => {
        // eslint-disable-next-line no-restricted-globals
        if (test && confirm('Are you sure you want to finish this Test?')) {
            const result = attemps.filter(a => {
                const question_id = a.question_id
                const question = questions.find(q => q.id === question_id);
                return a.selection === question.answer
            }).length
            const data = {
                "test_id": id,
                "result": result,
                "status": result >= test.passing ? "Passed" : "Failed",
                "total_duration": Math.round(new Date().getMilliseconds() - date.getMilliseconds() / 1000),
                "attempts": attemps.filter(a => a)
            }
            testService.saveAttempt(data).then(res => {
                history.goBack();
            })
        }
    }

    if (!test) {
        return <></>
    }

    return (
        <div>
            <div>{time / 10000} sec</div>
            <div>
                {test.name}
            </div>
            <div>
                {test.description}
            </div>
            <div>
                <strong>Attempted {attemps.length} of {test.total_number_questions}</strong>
                <Divider orientation="left">Questions</Divider>
                <List
                    bordered
                    dataSource={questions}
                    footer={<Button onClick={() => save()}>Save</Button>}
                    renderItem={(item: any, index: number) => (
                        <List.Item>
                            <Card title={item.question}>
                                <Radio.Group onChange={(e) => {
                                    let attempt = {
                                        question_id: item.id,
                                        selection: e.target.value
                                    }
                                    const attempts: any[] = [...attemps];
                                    attempts[index] = attempt;
                                    setAttempts(attempts);
                                }}>
                                    <Radio value={1}>{item.option1}</Radio>
                                    <Radio value={2}>{item.option2}</Radio>
                                    <Radio value={3}>{item.option3}</Radio>
                                    <Radio value={4}>{item.option4}</Radio>
                                </Radio.Group>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}