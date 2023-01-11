// ** React Imports
import React from 'react'
import { useState } from "react";

// ** Next Imports
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { initializeApollo } from "../lib/apolloClient";

// ** MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { GetAchievementsDocument } from "../cabServer/queries/__generated__/achievements";
import { Achievement, AchievementEntity } from "../cabServer/global/__generated__/types";
import AchievementTable from '../components/achievements-page/AchievementTable';

type Props = {}

// interface Data {
//     map(arg0: (jobField: any, i: any) => JSX.Element): React.ReactNode;
//     data?: Object;
//     push: any;
//     includes: any;
// }

type index = number;

type allAchievements = Achievement[]

const achievements = ({
    data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [result, setResult] = useState(data.achievements.data);
    const allAchievements = data?.achievements?.data || []
    console.log('allAchievements', allAchievements)

    return (
        <div>
            <Box>📃 Achievement List 📃

                <Box>
                    {allAchievements && <AchievementTable allAchievements={allAchievements} />}
                </Box>

                {/* {allAchievements &&
                    allAchievements.map((achievementEntity: AchievementEntity, i: index) => (
                        <Box key={i}>
                            {achievementEntity.attributes && <AchievementTable achievement={achievementEntity.attributes} />}
                        </Box>
                    ))} */}
            </Box>
        </div>
    )
}

export default achievements

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try {
        const client = initializeApollo(null, ctx.req);
        const { data, error } = await client.query({
            query: GetAchievementsDocument
        });
        return {
            props: { data },
        };
    } catch (error) {
        return {
            props: { data: null },
        };
    }
};