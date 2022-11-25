import { styled } from "..";


export const Header = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.5rem 0',
    width: '100%',
    minHeight: "50px",
    backgroundColor: '$secondary',

    img: {
        marginLeft: '1rem'
    },
    button: {
        cursor: "pointer"
    }
})

export const Footer = styled('footer', {
    position: "absolute",
    display: 'flex',
    bottom: "0",
    height: "1.5rem",
    padding: '1.5rem 0',
    width: '100%',
    backgroundColor: '$secondary',
    minHeight: 50,

    img: {
        marginLeft: '1rem'
    }
})