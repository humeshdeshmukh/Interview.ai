declare module 'morgan' {
    import { Request, Response, NextFunction } from 'express';
    export type FormatFn = (tokens: any, req: Request, res: Response) => string;
    export type Format = string | FormatFn;

    export function token(name: string, callback: (req: Request, res: Response) => string): void;
    export function format(name: string, fmt: Format): void;

    export default function morgan(format?: Format | FormatFn, options?: any): (req: Request, res: Response, next: NextFunction) => void;
}
