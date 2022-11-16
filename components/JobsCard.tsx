import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import ChevronUp from "mdi-material-ui/ChevronUp";
import ChevronDown from "mdi-material-ui/ChevronDown";
import React, { useState } from "react";
import { JobPost } from "../graphql/_generated_";
import Link from "next/link";
import { useTheme } from "@mui/system";

function JobsCard({ job }: { job: JobPost }) {
  const theme = useTheme();
  const [collapse, setCollapse] = useState<boolean>(false);
  const handleClick = () => {
    setCollapse((current) => !current);
  };
  return (
    <div>
      {" "}
      <Card
        sx={{
          position: "relative",
          borderRadius: theme.shape.borderRadius,
          paddingBottom: "2px",
        }}
      >
        <CardContent
          sx={{
            paddingBottom: "0px",
          }}
        >
          <Box
            sx={{
              mb: 5,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6">{job.position}</Typography>
              <Typography
                sx={{ fontWeight: 600, fontSize: "1rem" }}
                variant="caption"
              >
                {job.company}
              </Typography>
            </Box>
            <Button sx={{ color: theme.palette.mode }} variant="contained">
              {" "}
              {job.url && <Link
                href={job.url}
                target="_blank"
                rel="noopener"
                className="noDeco"
              >
                Apply
              </Link>}
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "start",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                whiteSpace: "nowrap",
                color: "text.primary",
                fontSize: "0.8rem",
              }}
            >
              {" "}
              <span className="boldText">Field:</span>{" "}
              {job.fileld?.replace("_", " ")}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                whiteSpace: "nowrap",
                color: "text.primary",
                fontSize: "0.8rem",
              }}
            >
              {" "}
              <span className="boldText">Date:</span>&nbsp;
              {new Date(job.updatedAt).toLocaleString("de-DE", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              })}
            </Typography>
          </Box>
        </CardContent>
        <CardActions className="card-action-dense">
          {job.description === "" ? (
            ""
          ) : (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={(e) => {
                  handleClick();
                }}
              >
                More
              </Button>
              <IconButton
                size="small"
                onClick={(e) => {
                  handleClick();
                }}
              >
                {collapse ? (
                  <ChevronUp sx={{ fontSize: "1.875rem" }} />
                ) : (
                  <ChevronDown sx={{ fontSize: "1.875rem" }} />
                )}
              </IconButton>
            </Box>
          )}
        </CardActions>
        <Collapse in={collapse}>
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Typography variant="body2">{job.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default JobsCard;
