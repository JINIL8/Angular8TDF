export class User {
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public topic: string,
        public timePrefernce: string,
        public subscribe: boolean,
    ) {}
}
