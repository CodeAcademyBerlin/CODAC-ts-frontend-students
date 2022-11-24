import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Cohort,
  CohortEntityResponse,
  StudentEntity,
} from "../graphql/_generated_";

const CohortCard = ({ cohort }: { cohort: Cohort }) => {
  const theme = useTheme();
  console.log(cohort);
  return (
    <Card
      sx={{ maxWidth: 285, borderRadius: theme.shape.borderRadius, p: [1] }}
    >
      <Box sx={{ display: "flex", m: [2] }}>
        <Divider />
        <CardHeader title={cohort.name} subheader={cohort.start_date} />
        <CardMedia
          component="img"
          image="https://cdn.drawception.com/images/panels/2015/3-10/3hPfz2CF7d-8.png"
          sx={{ borderRadius: 1, maxWidth: 100 }}
        />
      </Box>
      <Box>
        {cohort.students?.data.map((student) => {
          return (
            <Chip
              //icon={}
              label={student.attributes.firstname}
            />
          );
        })}
      </Box>
    </Card>
  );
};

export default CohortCard;
