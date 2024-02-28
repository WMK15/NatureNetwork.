import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Chip, Button } from "@mui/material";
import { Twitter, Facebook, Instagram } from "@mui/icons-material";

import profileImage from "../assets/random/profile.png";

//Badges
import B1 from "../assets/badges/B1.png";
import BP from "../assets/badges/BP.png";
import B5 from "../assets/badges/B5.png";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: "John Smith",
    age: 25,
    location: "New York",
    availability: "Full-time",
    preferences: ["Lorem", "ipsum", "dolor", "sit", "amet"],
    experiences: "Lorem ipsum dolor sit amet",
    skills: "HTML, CSS, JavaScript",
    contactInfo: "john.doe@example.com",
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ marginTop: "7rem", mx: "7rem" }}>
      <Grid container className="profile-container" fontFamily={"Poppins"}>
        <Grid item xs={6} className="left-side">
          <img
            src={profileImage}
            alt="Profile Picture"
            className="profile-picture"
            style={{ borderRadius: "50%", maxWidth: "300px" }}
          />
          <Box>
            <Twitter sx={{ fontSize: 30, marginRight: "1rem" }} />
            <Facebook sx={{ fontSize: 30, marginRight: "1rem" }} />
            <Instagram sx={{ fontSize: 30 }} />
          </Box>
          <Box
            sx={{
              backgroundColor: "#B8C799",
              px: "3rem",
              py: "1rem",
              mx: "2rem",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h4" color={"white"} fontFamily={"Poppins"}>
              BADGES
            </Typography>
            <Box className="badges">
              <img src={B1} alt="Badge 1" style={{ width: "50px" }} />
              <img src={B5} alt="Badge 3" style={{ width: "50px" }} />
              <img src={BP} alt="Badge 2" style={{ width: "50px" }} />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} className="right-side" textAlign={"left"}>
          <Box
            sx={{
              border: "1px solid #ccc",
              backgroundColor: "#f5f5f5",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            {isEditing ? (
              <TextField
                name="name"
                value={editedUser.name}
                onChange={handleChange}
                fullWidth
                sx={{ fontFamily: "Poppins" }}
              />
            ) : (
              <Typography variant="h3" sx={{ fontFamily: "Poppins" }}>
                {editedUser.name}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              border: "1px solid #ccc",
              backgroundColor: "#f5f5f5",
              marginTop: "1rem",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <TextField
                name="age"
                value={editedUser.age}
                onChange={handleChange}
                label="Age"
                readOnly={!isEditing}
                sx={{ my: 1, mr: 1 }}
              />
              <TextField
                name="location"
                value={editedUser.location}
                onChange={handleChange}
                label="Location"
                readOnly={!isEditing}
                sx={{ my: 1 }}
              />
            </Box>
            <br />
            <TextField
              name="availability"
              value={editedUser.availability}
              onChange={handleChange}
              label="Availability"
              readOnly={!isEditing}
              sx={{ my: 1 }}
            />
            <br />
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box sx={{ width: "100%" }}>
                <Typography variant="body2">Preferences</Typography>
              </Box>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  marginTop: "0.2rem",
                }}
              >
                {editedUser.preferences.map((preference, index) => (
                  <Chip
                    key={index}
                    label={preference}
                    variant="outlined"
                    sx={{ my: 0.5, mx: 0.5 }}
                  />
                ))}
              </Box>
            </Box>
            <br />
            <TextField
              name="experiences"
              value={editedUser.experiences}
              onChange={handleChange}
              label="Experiences"
              readOnly={!isEditing}
              sx={{ my: 1 }}
            />
            <br />
            <TextField
              name="skills"
              value={editedUser.skills}
              onChange={handleChange}
              label="Skills"
              readOnly={!isEditing}
              sx={{ my: 1 }}
            />
            <br />
            <TextField
              name="contactInfo"
              value={editedUser.contactInfo}
              onChange={handleChange}
              label="Contact Info"
              readOnly={!isEditing}
              sx={{ my: 1 }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            {isEditing ? (
              <Button variant="contained" size="large" onClick={handleSave}>
                Save
              </Button>
            ) : (
              <Button variant="contained" size="large" onClick={handleEdit}>
                Edit
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
