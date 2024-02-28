import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [author, setAuthor] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [tags, setTags] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/feed/posts",
        {
          title,
          author,
          description,
          requirements,
          date,
          age,
          author,
          contactInfo,
          tags,
          location,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Post added:", response.data);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <TextField
          label="Requirements (separate with comma)"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />

        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Age Limit"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Contact Info"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Post
        </Button>
      </form>
    </Container>
  );
};

export default AddPost;
