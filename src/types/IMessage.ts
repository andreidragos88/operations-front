import IResult from './IResult';

export default interface IMessage {
    command: string;
    result: IResult[] | string;
    error: boolean;
    action: string;
    timestamp: number;
};