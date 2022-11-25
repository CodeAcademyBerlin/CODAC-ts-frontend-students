import {
  Avatar,
  Badge,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  List,
  ListItem,
  Tooltip,
  Typography,
  useTheme,
  Zoom,
} from "@mui/material";
import {
  Cohort,
  CohortEntityResponse,
  Student,
  StudentEntity,
} from "../graphql/_generated_";
import * as React from "react";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ChevronDoubleDown from "mdi-material-ui/ChevronDoubleDown";
import AccountGroup from "mdi-material-ui/AccountGroup";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CohortCard = ({ cohort }: { cohort: Cohort }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(cohort);
  return (
    <Card
      sx={{
        maxWidth: 285,
        borderRadius: theme.shape.borderRadius,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: theme.palette.background,
        p: [1],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: [2],
        }}
      >
        <CardHeader title={cohort.name} />
        <CardMedia
          component="img"
          image="https://cdn.drawception.com/images/panels/2015/3-10/3hPfz2CF7d-8.png"
          sx={{
            borderRadius: 1,
          }}
        />
      </Box>
      <Divider />
      <CardActions>
        <Tooltip
          title="Cohort size"
          TransitionComponent={Zoom}
          placement="top"
          arrow
        >
          <Chip
            icon={<AccountGroup />}
            sx={{ p: 1, fontWeight: theme.typography.fontWeightMedium }}
            color="primary"
            label={cohort.students?.data?.length}
          />
        </Tooltip>
        <Tooltip
          title="Starting date of your cohort"
          TransitionComponent={Zoom}
          placement="top"
          arrow
        >
          <Chip
            label={cohort.start_date}
            sx={{
              fontWeight: theme.typography.fontWeightMedium,
            }}
            color="primary"
          />
        </Tooltip>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ChevronDoubleDown color="primary" />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List>
            {cohort.students?.data.map((student) => {
              return (
                <ListItem>
                  <Chip
                    avatar={
                      <Avatar>
                        {student.attributes?.firstname?.charAt(0)}
                        {student.attributes?.lastname?.charAt(0)}
                      </Avatar>
                    }
                    label={student.attributes?.firstname}
                    variant="outlined"
                    sx={{ m: 1 }}
                  />
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CohortCard;
