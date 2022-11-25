import { wrap } from "module";
import { styled } from "..";

export const Container = styled('ul', {
    padding: "5rem",
    gap: "1.5rem",
    display: "flex",
    flex: 'max-content',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: "center",
    overflow: 'hidden',
    backgroundColor: '$primary',
    listStyle: "none",

    "&:has(li:hover) li:not(:hover)":{
        opacity: .7,
        scale: 0.98
    }
})

export const Card = styled('li', {
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
    },
    transition: "all .4s"
})