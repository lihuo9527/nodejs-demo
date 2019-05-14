export enum ErrorType {
    UNKNOWN = 9999,
    
}

export class Exception {
    constructor(
        public code: number,
        public message: string
    ) {}
}