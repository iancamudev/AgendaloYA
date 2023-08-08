import {
  Divider,
  Modal,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { UseFormStateProps } from "react-hook-form";
import {
  ButtonsContainer,
  FlexLayout,
  MainDiv,
  StyledStepper,
} from "./ModalService.styled";
import Button from "../../ui/Button";

import image from "@assets/images/demo-servicio-pxp.jpeg";
import useWindowSize from "@hooks/useWindowSize";
import { colors } from "@utils/Variables";
import Description from "./components/Description";
import TurnSelect from "./components/TurnSelect";
import AppContext from "./ModalService.context";

interface Props {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}
const ModalService = ({ openModal, setOpenModal }: Props) => {
  const { width = 1 } = useWindowSize();

  const steps = [
    "Descripcion",
    "Elige un turno",
    "Completa tus datos y reservalo",
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setOpenModal(false);
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      setOpenModal(false);
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      style={{ overflow: "scroll" }}
    >
      <AppContext.Provider
        value={{ activeStep, handleNext, handleBack, steps }}
      >
        <FlexLayout>
          <MainDiv>
            <StyledStepper
              activeStep={activeStep}
              orientation={width > 600 ? "horizontal" : "vertical"}
              $width={width}
            >
              {steps.map((label) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </StyledStepper>
            {activeStep === 0 && <Description />}
            {activeStep === 1 && <TurnSelect />}
            {activeStep === 2 && <Description />}
          </MainDiv>
        </FlexLayout>
      </AppContext.Provider>
    </Modal>
  );
};

export default ModalService;
