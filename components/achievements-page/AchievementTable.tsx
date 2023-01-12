import React from 'react'
import { Achievement, AchievementEntity } from "../../cabServer/global/__generated__/types";

// ** MUI Imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Badge from '@mui/material/Badge';
import TableRow, { TableRowProps } from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles'
import TableCell, { TableCellProps, tableCellClasses } from '@mui/material/TableCell'
import Avatar from '@mui/material/Avatar';

type Props = {}

const StyledTableCell = styled(TableCell)<TableCellProps>(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.common.black
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}))

const StyledTableRow = styled(TableRow)<TableRowProps>(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },

    // hide last border
    '&:last-of-type td, &:last-of-type th': {
        border: 0
    }
}))

// const createData = (name: string, calories: number, fat: number, carbs: number, protein: number) => {
//     return { name, calories, fat, carbs, protein }
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9)
// ]


const AchievementTable = ({ allAchievements }: { allAchievements?: AchievementEntity[] }) => {
    console.log('allAchievements', allAchievements)

    return (
        allAchievements &&
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 700 }} aria-label='customized table'>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align='center'>Badge</StyledTableCell>
                        <StyledTableCell align='center'>Name</StyledTableCell>
                        <StyledTableCell align='center'>How to get</StyledTableCell>
                        <StyledTableCell align='center'>Points</StyledTableCell>
                        <StyledTableCell align='center'>Type</StyledTableCell>
                    </TableRow>
                </TableHead>
                {allAchievements.map((achievementEntity: AchievementEntity, i: number) =>
                    achievementEntity.attributes && <TableBody key={i}>
                        <StyledTableRow>
                            <StyledTableCell><Avatar alt="AchievementBadge" src={achievementEntity.attributes?.badge?.data?.attributes?.url || ""} /></StyledTableCell>
                            {/* <StyledTableCell><img src={achievementEntity.attributes?.badge?.data?.attributes?.url || ""}></img></StyledTableCell> */}
                            {/* <StyledTableCell component='th' scope='row'>{achievementEntity.attributes.badge.data.attributes.url || ""}</StyledTableCell> */}
                            <StyledTableCell align='left'>{achievementEntity.attributes.name || ""}</StyledTableCell>
                            <StyledTableCell align='left'>{achievementEntity.attributes.description || ""}</StyledTableCell>
                            <StyledTableCell align='center'>{achievementEntity.attributes.points || ""}</StyledTableCell>
                            <StyledTableCell align='center'>{achievementEntity.attributes.type || ""}</StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                )}
            </Table>
        </TableContainer >
    )
}

export default AchievementTable

