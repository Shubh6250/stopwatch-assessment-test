import { Box, Button, Container, Typography } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import moment from "moment";
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const startPauseClock = () => {
    if (running) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    setRunning(!running);
  };

  const stopClock = ()=>{
    clearInterval(intervalRef.current)
    setRunning(false)
    // setTime(0)
  }

  const resetClock = ()=>{
    clearInterval(intervalRef.current)
    setRunning(false)
    setTime(0)
  }
  const formatTime = (time) => {
    return moment.utc(time).format("mm:ss:SS");
  };
  return (
    <>
      <Container maxWidth="sm" style={{textAlign:"center",marginTop:"50px"}}>
        <Typography variant="h4">Stopwatch</Typography>
        <Typography variant="h5">{formatTime(time)}</Typography>
        <Box mt={3}>
          <Button variant="contained" color="primary" onClick={startPauseClock} style={{marginRight:"10px"}}> {running ? "Pause" :"Start"}</Button>
          <Button variant="contained" color="secondary" onClick={stopClock} style={{marginRight:"10px"}}>Stop</Button>
          <Button variant="outlined"  onClick={resetClock} style={{marginRight:"10px"}}>Reset</Button>
        </Box>
      </Container>
    </>
  );
};
export default StopWatch;
