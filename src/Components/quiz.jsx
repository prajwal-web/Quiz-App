import React, { useState } from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import questions from "../data.json";

console.log(questions);

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  console.log("userAns " + userAnswers);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  console.log("correctAns " + correctAnswers);
  const [score, setScore] = useState(0);
  console.log("score " + score);

  const handleNext = () => {
    if (userAnswers[currentQuestion] === questions[currentQuestion].answer) {
      setScore(score + questions[currentQuestion].points);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setCorrectAnswers([]);
  };

  const handleAnswerChange = (e) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = e.target.value;
    setUserAnswers(newAnswers);

    const newCorrectAnswers = [...correctAnswers];
    if (e.target.value === questions[currentQuestion].answer) {
      newCorrectAnswers[currentQuestion] = true;
    } else {
      newCorrectAnswers[currentQuestion] = false;
    }
    setCorrectAnswers(newCorrectAnswers);
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 5, p: 2 }}>
      {currentQuestion !== questions.length - 1 ? (
        <CardContent>
          <Typography variant="h6">Question {currentQuestion + 1}</Typography>
          <Typography variant="h5">
            {questions[currentQuestion].question}
          </Typography>
          <RadioGroup
            value={userAnswers[currentQuestion] || ""}
            onChange={handleAnswerChange}
          >
            {questions[currentQuestion].choices.map((choice, index) => (
              <FormControlLabel
                key={index}
                value={choice}
                control={<Radio />}
                label={choice}
              />
            ))}
          </RadioGroup>
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={handlePrev}
              startIcon={<ArrowBackIcon />}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={handleNext}
              endIcon={<ArrowForwardIcon />}
            >
              Next
            </Button>
          </Box>
        </CardContent>
      ) : (
        <Box>
          <Typography variant="h5">Your Total Score: {score}/75</Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleRestart}
            startIcon={<RestartAltIcon />}
          >
            Restart
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default Quiz;
