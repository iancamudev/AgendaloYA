import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Typography } from "@mui/material";
import {
  ButtonsContainer,
  CardsContainer,
  MainDiv,
  StyledCalendar,
} from "./TurnSelect.styled";
import dayjs, { Dayjs } from "dayjs";
import { colors } from "@utils/Variables";
import HorizontalCard from "../../../../ui/HorizontalCard/HorizontalCard";
import { Controller, useForm } from "react-hook-form";
import Button from "../../../../ui/Button/Button";
import AppContext from "../../ModalService.context";
import helpers from "@utils/helpers";

const TurnSelect = () => {
  const { activeStep, handleNext, handleBack, steps } =
    React.useContext(AppContext);
  ////////////////////
  // ===> Form <=== //
  ////////////////////
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      date: dayjs(),
      horary: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  ////////////////////////////////////
  // ===> Functions, Variables <=== //
  ////////////////////////////////////
  const daysAvaible = [1, 2, 4, 5, 6];
  const title = "Extensiones pxp";
  const price = "$1950";
  const targetDay = {
    horariesLeft: ["09:00", "14:00", "16:00"],
  };
  const disableDays = (date: Dayjs) => {
    const limit = dayjs().add(15, "day");
    return (
      date > limit ||
      date < dayjs().subtract(1, "day") ||
      !helpers.isInArray(date.day(), daysAvaible)
    );
  };
  return (
    <MainDiv>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Typography
            variant="body2"
            style={{ color: colors.gray, marginBottom: "0.5rem" }}
          >
            Selecciona un dia:
          </Typography>

          <Controller
            name="date"
            control={control}
            render={({ field: { onChange, value } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StyledCalendar
                  onChange={(event) => {
                    onChange(event);
                  }}
                  value={value}
                  views={["day"]}
                  shouldDisableDate={disableDays}
                />
              </LocalizationProvider>
            )}
          />
        </div>
        <Typography
          variant="body2"
          style={{ color: colors.gray, marginTop: "1rem" }}
        >
          Horarios disponibles:
        </Typography>

        <Controller
          name="horary"
          control={control}
          render={({ field }) => (
            <HorizontalCard {...field} values={targetDay.horariesLeft} />
          )}
        />
      </form>
      <ButtonsContainer>
        <Button variant="secondary" bold onClick={handleBack}>
          {activeStep === 0 ? "Cerrar" : "Atras"}
        </Button>
        <Button variant="primary" bold onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Finalizar" : "Continuar"}
        </Button>
      </ButtonsContainer>
    </MainDiv>
  );
};

export default TurnSelect;
