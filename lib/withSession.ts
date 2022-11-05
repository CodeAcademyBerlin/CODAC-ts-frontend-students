import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextApiHandler,
    PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { NextApiHandlerWithSession } from "./session";

const sessionOptions = {
    password: process.env.ssrSessionKey!,
    cookieName: "codac",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};



export function withSessionRoute(handler: NextApiHandlerWithSession) {
    return withIronSessionApiRoute(handler as NextApiHandler, sessionOptions);
}

// Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
// export function withSessionSsr(
//     handler: (
//         context: GetServerSidePropsContext,
//     ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
// ) {
//     return withIronSessionSsr(handler, sessionOptions);
// }

export function withSessionSsr(handler: { ({ req, res }: { req: any; res: any; }): Promise<{ props: { user: string; }; }>; (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>): GetServerSidePropsResult<{ [key: string]: unknown; }> | Promise<GetServerSidePropsResult<{ [key: string]: unknown; }>>; }) {
    return withIronSessionSsr(handler, sessionOptions);
}