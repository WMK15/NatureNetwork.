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
    // Add more data as needed
  ];

  return (
    <Box>
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
          <Box sx={{ backgroundColor: "#B8C799", px: 3, py: 1 }}>
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
                  {leaderboardData.map((person, index) => (
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

          <Box sx={{ backgroundColor: "#B8C799", px: 3, py: 1 }}>
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
                  {leaderboardData.map((person, index) => (
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

          <Box sx={{ backgroundColor: "#B8C799", px: 3, py: 1 }}>
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
                  {leaderboardData.map((person, index) => (
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
