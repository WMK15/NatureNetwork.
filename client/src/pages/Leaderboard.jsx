import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Leaderboard = () => {
  const leaderboardData = [
    { name: "John Doe", globalHours: 100, countryHours: 50, regionalHours: 20 },
    {
      name: "Jane Smith",
      globalHours: 80,
      countryHours: 40,
      regionalHours: 30,
    },
    {
      name: "Mike Johnson",
      globalHours: 120,
      countryHours: 60,
      regionalHours: 10,
    },
    {
      name: "Sarah Williams",
      globalHours: 90,
      countryHours: 70,
      regionalHours: 40,
    },
    {
      name: "Chris Brown",
      globalHours: 110,
      countryHours: 20,
      regionalHours: 50,
    },
    {
      name: "Amanda Miller",
      globalHours: 70,
      countryHours: 30,
      regionalHours: 60,
    },
    {
      name: "David Davis",
      globalHours: 130,
      countryHours: 40,
      regionalHours: 70,
    },
    {
      name: "Jessica Garcia",
      globalHours: 60,
      countryHours: 20,
      regionalHours: 80,
    },
    {
      name: "James Rodriguez",
      globalHours: 140,
      countryHours: 80,
      regionalHours: 90,
    },
    {
      name: "Emily Martinez",
      globalHours: 50,
      countryHours: 10,
      regionalHours: 30,
    },
  ];

  return (
    <Box
      sx={{
        mx: "7rem",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
      >
        {" "}
        Rankings{" "}
      </Typography>

      <Box sx={{ marginTop: 5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Poppins",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#B8C799",
              px: 3,
              py: 1,
              borderRadius: "5px",
            }}
          >
            <h1>Global</h1>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Total Hours
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leaderboardData
                    .sort((a, b) => b.globalHours - a.globalHours)
                    .map((person, index) => (
                      <TableRow key={index}>
                        <TableCell className="dark-green-cell">
                          {index + 1}. {person.name}
                        </TableCell>
                        <TableCell className="dark-green-cell">
                          {person.globalHours}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box
            sx={{
              backgroundColor: "#B8C799",
              px: 3,
              py: 1,
              borderRadius: "5px",
            }}
          >
            <h1>Country</h1>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Total Hours</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leaderboardData
                    .sort((a, b) => b.countryHours - a.countryHours)
                    .map((person, index) => (
                      <TableRow key={index}>
                        <TableCell className="dark-green-cell">
                          {index + 1}. {person.name}
                        </TableCell>
                        <TableCell className="dark-green-cell">
                          {person.countryHours}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box
            sx={{
              backgroundColor: "#B8C799",
              px: 3,
              py: 1,
              borderRadius: "5px",
            }}
          >
            <h1>Regional</h1>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Total Hours</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leaderboardData
                    .sort((a, b) => b.regionalHours - a.regionalHours)
                    .map((person, index) => (
                      <TableRow key={index}>
                        <TableCell className="dark-green-cell">
                          {index + 1}. {person.name}
                        </TableCell>
                        <TableCell className="dark-green-cell">
                          {person.regionalHours}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Leaderboard;
