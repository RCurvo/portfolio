import { styled } from "..";


export const BioContainer = styled("div", {
    display: "flex",
    alignItems: "center",
    padding: "4rem 10rem",
    justifyContent: "space-around",
    
    img: {
        borderRadius: "8px",
    },

    p: {
        maxWidth: "20rem"
    }
})

export const BioHeaderContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.25rem", 
    img: {
        borderRadius: "8px",
    },
})