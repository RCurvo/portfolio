import { styled } from "..";


export const Header = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.5rem 0',
    width: '100%',
    backgroundColor: '$primary',

    img: {
        marginLeft: '1rem'
    }
})