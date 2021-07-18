export interface Test {
    id: number;
    name: string;
    description:string;
    questions: []
}

export interface TestTaken {
    result: number;
    status: string;
    total_duration: number;
    createdAt: string;
    test: Test;
}