import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Pagination,
  Chip,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

const Feed = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(3);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/feed/posts"
        );
        setJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

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
            <CardContent>
              <Typography
                variant="h4"
                fontFamily={"inherit"}
                textAlign={"left"}
              >
                {job.title}
              </Typography>
              <Typography
                variant="body1"
                fontFamily={"inherit"}
                textAlign={"left"}
              >
                <strong>Author:</strong> {job.author}
              </Typography>
              <Typography
                variant="body1"
                fontFamily={"inherit"}
                textAlign={"left"}
              >
                <h4>Description:</h4> {job.description}
              </Typography>
              <Typography
                textAlign={"left"}
                variant="body1"
                fontFamily={"inherit"}
              >
                <h4>Requirements:</h4>
                <ul>
                  {job.requirements.map((requirement) => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ul>
              </Typography>
              <Typography
                variant="body1"
                textAlign={"left"}
                fontFamily={"inherit"}
              >
                <strong>Age: </strong>
                {job.age}
              </Typography>
              <Typography
                variant="body1"
                textAlign={"left"}
                fontFamily={"inherit"}
              >
                <strong>Contact Info:</strong> {job.contactInfo}
              </Typography>
              <Typography
                variant="body1"
                textAlign={"left"}
                fontFamily={"inherit"}
              >
                <strong>Tags:</strong>{" "}
                {job.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    variant="outlined"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      fontFamily: "Poppins",
                    }}
                  />
                ))}
              </Typography>
              <Typography
                variant="body1"
                textAlign={"left"}
                fontFamily={"inherit"}
              >
                <strong>Date: </strong>
                {new Date(job.date).toLocaleDateString("en-GB")}
              </Typography>
              <Typography
                variant="body1"
                textAlign={"left"}
                fontFamily={"inherit"}
              >
                <strong>Location:</strong>L {job.location}
              </Typography>
              <Typography
                variant="body1"
                textAlign={"left"}
                fontFamily={"inherit"}
              >
                <strong>Created At:</strong>{" "}
                {new Date(job.createdAt).toLocaleString("en-GB")}
              </Typography>
            </CardContent>
            <CardContent>
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
