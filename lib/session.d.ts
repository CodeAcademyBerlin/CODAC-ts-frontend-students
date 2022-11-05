declare module "iron-session" {
    interface IronSessionData {
        userSession?: {
            jwt: string;
            createdAt: Date;
        };
    }
}

// session.ts
import { NextApiRequest, NextApiResponse } from 'next';



export type NextApiRequestWithSession = NextApiRequest & {
    session: IronSessionData & {
        save(): Promise<void>;
    };
};

export type NextApiHandlerWithSession = (
    req: NextApiRequestWithSession,
    res: NextApiResponse,
) => void | Promise<void>;