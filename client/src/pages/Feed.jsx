import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Pagination,
  Chip,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

const Feed = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(3);

  const jobs = [
    {
      id: 1,
      title: "Volunteer at Animal Shelter",
      description: "Help take care of animals in need.",
      image: "animal-shelter.jpg",
      tags: ["Parks"],
    },
    {
      id: 2,
      title: "Plant Trees in the Park",
      description: "Join us in our effort to create a greener environment.",
      image: "tree-planting.jpg",
      tags: ["Parks"],
    },
    {
      id: 3,
      title: "Clean Up the Beach",
      description: "Contribute to keeping our beaches clean and beautiful.",
      image: "beach-cleanup.jpg",
      tags: ["Ocean", "Beaches"],
    },
    // Add more jobs here...
  ];

  // Color mapping for tags
  const tagColors = {
    Parks: "#4caf50",
    Ocean: "#2196f3",
    Beaches: "#ff9800",
  };

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (event, pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container sx={{ fontFamily: "Poppins" }}>
      <Typography variant="h1" sx={{ gridColumn: "1 / -1" }}>
        Volunteering Jobs
      </Typography>

      <Button
        variant="contained"
        color="primary"
        LinkComponent={Link}
        to="/addpost"
        sx={{ marginBottom: "1rem" }}
      >
        ADD POST
      </Button>

      <Box
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        {currentJobs.map((job) => (
          <Card key={job.id} sx={{ marginBottom: "1rem" }}>
            <CardMedia
              component="img"
              height="140"
              image={job.image}
              alt={job.title}
            />
            <CardContent>
              <Typography variant="h3" fontFamily={"inherit"}>
                {job.title}
              </Typography>
              <Typography variant="body1" fontFamily={"inherit"}>
                {job.description}
              </Typography>
            </CardContent>
            <CardContent>
              <Box
                sx={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}
              >
                {job.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    variant="outlined"
                    style={{
                      backgroundColor: tagColors[tag],
                      color: "white",
                      fontFamily: "Poppins",
                    }}
                  />
                ))}
              </Box>
              <Button variant="contained" color="primary">
                Apply
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginLeft: "0.5rem" }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <Pagination
          count={Math.ceil(jobs.length / jobsPerPage)}
          page={currentPage}
          onChange={paginate}
        />
      </Box>
    </Container>
  );
};

export default Feed;
