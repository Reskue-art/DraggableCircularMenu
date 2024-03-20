/*
| Developed by Reskue
| Filename: SalaryWheel.tsx
| Author: FODEILLA Hasni & Eric Djavid
*/

import React, { Ref } from "react";
import { Chip, Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import { useDraggable } from "./useDraggable";

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
interface SalaryWheelProps {
  values?: number[];
  textColor?: string;
  options?: string[];
  circleColor?: string;
  text?: string,
}

const defaultData = Array.from({ length: 101 }, (_, i) => i.toString()); // Generates an array from 0 to 100

/*
|--------------------------------------------------------------------------
| Utils
|--------------------------------------------------------------------------
*/

// const currencies = [
//   { label: "GBP (£)", sign: "£" },
//   { label: "EUR (€)", sign: "€" },
//   { label: "USD ($)", sign: "$" },
// ];
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const RadialProgressBar = styled(Box)(() => ({
  background: "#D9D9D9",
  position: "relative",
  borderRadius: "50%",
  overflow: "hidden",
  height: "300px",
  width: "300px",
  zIndex: 1,
  cursor: "normal",
}));

interface RPBHalf1Props {
  circleColor: string;
}

const RPBHalf1 = styled(Box)<RPBHalf1Props>(({ circleColor }) => ({
  height: "50%",
  width: "100%",
  transformOrigin: "50% 100%",
  background: circleColor,
  transform: "rotate(90deg)",
}));

const RPBHalf2 = styled(Box)({
  position: "absolute",
  top: 0,
  height: "50%",
  width: "100%",
  transformOrigin: "50% 100%",
  background: "rgb(203 213 225)",
});

const Overlay = styled(Box)({
  position: "absolute",
  top: "1rem",
  left: "1rem",
  right: "1rem",
  bottom: "1rem",
  borderRadius: "50%",
  background: "#F9F9F9",
});

const Circle = styled(Box)({
  position: "absolute",
  top: "0.5rem",
  left: "0.5rem",
  right: "0.5rem",
  bottom: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const BoxDraggable = styled(Box)<{ circleColor: string }>(({ circleColor }) => ({
  background: circleColor,
  borderRadius: "50%",
  height: "1rem",
  width: "1rem",
  position: "absolute",
  border: "0.5px solid gray",
  top: 0,
  left: 0,
  cursor: "grab",
}));

const TypographyStyled = styled(Typography)(() => ({
  textAlign: "center",
  fontFamily: "Anton",
  fontSize: "1.25rem",
}));

// const ChipStyled = styled(Chip)({
//   padding: "0.5rem",
//   borderRadius: "1rem",
//   fontFamily: "Roboto",
//   fontSize: "1rem",
//   fontWeight: 400,
// });
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

/**
 * Affiche un menu circulaire draggable avec des valeurs personnalisables.
 * TODO: améliorer le composant en permettant de définir des intervales entre 2 nombres
 * 
 * @param {Object} props Les propriétés du composant.
 * @param {number[]=} props.values - Les valeurs à afficher dans le menu. Par défaut, génère un tableau de 0 à 100.
//  * @param {string[]} props.colors - Les couleurs utilisées pour le menu. Doit être un tableau de chaînes de caractères représentant des couleurs.
 * @param {string=} props.circleColor - La couleur du cercle central. Par défaut, '#00c8b7'.
 * @param {string=} props.textColor - La couleur du texte. Par défaut, 'black'.
//  * @param {string[]=} props.options - Les options supplémentaires à afficher. Par défaut, un tableau vide.
 * @param {string=} props.text - Texte supplémentaire à afficher. Par défaut, aucune valeur.
 * @return {JSX.Element} Le composant DraggableCircularMenu.
 */
const DraggableCircularMenu: React.FC<SalaryWheelProps> = ({
  values = defaultData, // Uses defaultData if values is not provided
  circleColor = "#00c8b7",
  textColor = 'black',
  // options = [],
  text = "",
}) => {
  const [valueProgress, setValueProgress] = React.useState(0.75);
  // const [selectedCurrencyIndex, setSelectedCurrencyIndex] = React.useState(0);
  const [draggbleRef, dx, dy, angle] = useDraggable({
    initialAngle: valueProgress,
  });

  // Render
  //--------------------------------------------------------------------------
  return (
    <Box component="div">
      <RadialProgressBar>
        <RPBHalf1 circleColor={circleColor} />
        <RPBHalf2
          style={{
            background: (angle as number) > 0.5 ? circleColor : "inherit",
            transform: `rotate(${(angle as number) > 0.5
              ? (((angle as number) - 0.25) % 1) * 360
              : (((angle as number) + 0.25) % 1) * 360
              }deg)`,
          }}
        />
        <Overlay />
        <Circle>
          <BoxDraggable circleColor={circleColor}
            ref={draggbleRef as Ref<HTMLElement>}
            style={{
              transform: `translate(${dx}px, ${dy}px)`,
              zIndex: 9999,
            }}
          />
          <TypographyStyled sx={{ color: textColor }}>
            <span style={{ fontSize: "2.5rem" }}>
              {values[Math.round((angle as number) * (values.length - 1))]}.00
              {/* {currencies[selectedCurrencyIndex].sign} */}
              {" " + text}
            </span>
            <br />
          </TypographyStyled>
        </Circle>
      </RadialProgressBar>
      {/* TODO: Add an optional button list system */}
      {/* <Box
        component="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mt={5}
      >
        {currencies.map((currency, index) => (
          <ChipStyled
            key={index}
            label={currency.label}
            variant="filled"
            sx={{
              background:
                index === selectedCurrencyIndex ? circleColor : "#D9D9D9",
            }}
            onClick={() => setSelectedCurrencyIndex(index)}
          />
        ))}
      </Box> */}
    </Box>
  );
};

export default DraggableCircularMenu;
