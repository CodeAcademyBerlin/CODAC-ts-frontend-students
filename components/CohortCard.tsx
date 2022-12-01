import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
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
import SpaceInvaders from "mdi-material-ui/SpaceInvaders";
import DatabaseSearch from "mdi-material-ui/DatabaseSearch";
import CodeBraces from "mdi-material-ui/CodeBraces";
import dayjs from "dayjs";

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
  // console.log(cohort);
  return (

    <Card
      sx={{
        maxWidth: "18rem",
        borderRadius: 3,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: theme.palette.background.default,
        pt: 1,
        pb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          mx: 0,
          pb: 2,
        }}
      >
        <Box px={3} py={2}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <AccountGroup />
            <Typography
              sx={{
                fontStyle: theme.typography.subtitle2,
                fontVariant: "all-small-caps",
              }}
            >
              Your Cohort:
            </Typography>
          </Stack>

          <Typography
            variant="h6"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontWeight: theme.typography.fontWeightMedium,
            }}
          >
            {cohort.name}
          </Typography>
        </Box>

        <CardMedia
          component="img"
          image="https://cdn.drawception.com/images/panels/2015/3-10/3hPfz2CF7d-8.png"
          sx={{
            borderRadius: 0,
            borderStyle: "solid none",
            borderWidth: 2,
          }}
        />
      </Box>

      <CardActions
        sx={{
          py: 0,
          mb: 0,
        }}
      >
        <Tooltip
          title="Cohort size"
          TransitionComponent={Zoom}
          placement="top"
          arrow
        >
          <Chip
            icon={<SpaceInvaders />}
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
            label={
              cohort.start_date
                ? dayjs(cohort.start_date).format("DD.MM.YYYY")
                : null
            }
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
          <Divider textAlign="center">
            <Typography
              sx={{
                fontVariant: "all-small-caps",
                fontWeight: theme.typography.fontWeightBold,
                fontSize: "1.15rem",
              }}
            >
              Cohort Members
            </Typography>
          </Divider>
          <List dense={true}>
            {cohort.students?.data.map((student) => {
              return (
                student && (
                  <React.Fragment key={student.id}>
                    <ListItem>
                      <Avatar
                        sx={{
                          fontWeight: theme.typography.fontWeightBold,
                          fontSize: 15,
                          color: theme.palette.common.white,
                          backgroundColor: theme.palette.primary.light,
                          mr: 1.5,
                        }}
                      >
                        {student.attributes?.firstname?.charAt(0)}
                        {student.attributes?.lastname?.charAt(0)}
                      </Avatar>
                      <ListItemText>
                        {student.attributes?.firstname}{" "}
                        {student.attributes?.lastname}
                      </ListItemText>
                      {student.attributes?.main_course?.data?.attributes
                        ?.name && (
                          <ListItemIcon>
                            {student.attributes?.main_course?.data?.attributes
                              ?.name === "data3" && (
                                <Tooltip
                                  arrow
                                  title="Data Science"
                                  TransitionComponent={Zoom}
                                  placement="top"
                                >
                                  <DatabaseSearch
                                    sx={{
                                      height: 20,
                                      color: theme.palette.secondary.main,
                                    }}
                                  />
                                </Tooltip>
                              )}
                            {
                              //TODO: Update course name
                              student.attributes?.main_course?.data?.attributes
                                ?.name === "webdev" && (
                                <Tooltip
                                  arrow
                                  title="Web Development"
                                  TransitionComponent={Zoom}
                                  placement="top"
                                >
                                  <CodeBraces
                                    sx={{
                                      height: 20,
                                      color: theme.palette.primary.main,
                                    }}
                                  />
                                </Tooltip>
                              )
                            }
                          </ListItemIcon>
                        )}
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                )
              );
            })}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  )
};

export default CohortCard;
