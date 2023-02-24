import Avatar, { AvatarProps } from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
// ** MUI Imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {
  tableCellClasses,
  TableCellProps,
} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow, { TableRowProps } from '@mui/material/TableRow';
import { AchievementEntity } from 'cabServer/global/__generated__/types';
import React from 'react';

const StyledTableCell = styled(TableCell)<TableCellProps>(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)<TableRowProps>(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  // hide last border
  '&:last-of-type td, &:last-of-type th': {
    border: 0,
  },
}));

const StyledAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
  color: theme.palette.success.main,
  '&:hover, &.Mui-focusVisible': {
    position: 'center',
    width: 56,
    height: 56,
  },
}));

// const AchievementTypeIcon = () => {
//     if ({ achievementEntity.attributes.type } === "student") {
//         return "🏅"
//     }
//     else {
//         return "💫"
//     };
// }

const AchievementTable = ({
  allAchievements,
}: {
  allAchievements: AchievementEntity[];
}) => {
  return (
    allAchievements && (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">Badge</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">How to get</StyledTableCell>
              <StyledTableCell align="center">Points</StyledTableCell>
              <StyledTableCell align="center">Type</StyledTableCell>
              {/* <StyledTableCell align='center'>Course</StyledTableCell> */}
            </StyledTableRow>
          </TableHead>
          {allAchievements.map(
            (achievementEntity: AchievementEntity, i: number) =>
              achievementEntity.attributes && (
                <TableBody key={i}>
                  <StyledTableRow>
                    <StyledTableCell>
                      <StyledAvatar
                        sx={{ width: 24, height: 24 }}
                        alt="AchievementBadge"
                        src={
                          achievementEntity.attributes?.badge?.data?.attributes
                            ?.url || ''
                        }
                      />
                    </StyledTableCell>
                    {/* <StyledTableCell><img src={achievementEntity.attributes?.badge?.data?.attributes?.url || ""}></img></StyledTableCell> */}
                    {/* <StyledTableCell component='th' scope='row'>{achievementEntity.attributes.badge.data.attributes.url || ""}</StyledTableCell> */}
                    <StyledTableCell align="left">
                      {achievementEntity.attributes.name || ''}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {achievementEntity.attributes.description || ''}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {achievementEntity.attributes.points || ''}
                    </StyledTableCell>
                    {/* {achievementEntity.attributes.type === 'student' ? (
                      <StyledTableCell align="center">🏅</StyledTableCell>
                    ) : (
                      <StyledTableCell align="center">💫</StyledTableCell>
                    )} */}
                    {/* <StyledTableCell align='center'>{achievementEntity.attributes.course || ""}</StyledTableCell> */}
                  </StyledTableRow>
                </TableBody>
              ),
          )}
        </Table>
      </TableContainer>
    )
  );
};

export default AchievementTable;
