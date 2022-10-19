import { wrap } from "module";
import { styled } from "..";

export const Cointainer = styled('div', {
    padding: "5rem",
    gap: "1.5rem",
    display: "flex",
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: "center",
    overflow: 'hidden',
    backgroundColor: '$primary',
})

export const Card = styled('div', {
    backgroundColor: '$secondary',
    width: '25rem',
    height: '12rem',
    padding: '2rem',
    borderRadius: 8,
    boxSizing: 'border-box',

    "&:hover": {
        border: '1px solid white'
    },

    desc: {
        margin: '0.5rem auto',
        display: "block"
    },
    a: {
        color: 'inherit'
    }
})