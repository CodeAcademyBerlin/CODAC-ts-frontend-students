import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { AvatarGroup } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import * as React from 'react';
import KanbanBoard from 'src/componentsDemo/kanban-board/KanbanBoard';
import KanbanCard from 'src/componentsDemo/kanban-board/KanbanCard';
import KanbanFooter from 'src/componentsDemo/kanban-board/KanbanFooter';

const Kanban = () => {
  const theme = useTheme();

  return <KanbanBoard />;
};

export default Kanban;
