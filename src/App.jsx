import React from "react";
import { Button, Typography, Box } from "@mui/material";
import Quiz from "./Components/quiz";
import { useState } from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const App = () => {
  const [start, setStart] = useState(false);
  return (
    <>
      <Box textAlign="center" mt={5}>
        {!start && (
          <Typography
            variant="h3"
            sx={{ color: "red", fontFamily: "cursive", marginTop: "15%" }}
          >
            !!!Welcome to the Quiz
          </Typography>
        )}

        {!start && (
          <Button
            variant="contained"
            color="success"
            onClick={() => setStart(true)}
            startIcon={<PlayCircleFilledWhiteIcon />}
            sx={{ marginTop: 3 }}
          >
            Start Quiz
          </Button>
        )}
      </Box>
      {start && <Quiz />}
    </>
  );
};

export default App;
