import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Step a step back', 'Watch and Listen', 'Breathe'];

export default function HorizontalLinearStepper() {

  const quotes = [
    "Every step forward your child takes is a testament to your unwavering love, strength, and belief in their limitless potential - you got this!",
    "Your unwavering support and dedication as a parent are guiding lights that illuminate your child's unique journey.",
    "In the face of challenges, your love for your child with special needs shines brighter, showing them a world full of infinite possibilities.",
    "Your role as a parent is not measured by the milestones achieved, but by the immeasurable love and encouragement you give to your child every day.",
    "Remember that you are not alone on this journey - embrace the strength of your community, and together, you can overcome any obstacle.",
    "Your child's special needs may present unique challenges, but within those challenges lie opportunities for extraordinary growth and resilience."
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const [activeStep, setActiveStep] = React.useState(0);
  const isStepOptional = (step: number) => {
    return step === 1;
  };



  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption"></Typography>
            );
          }
       
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {randomQuote}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}