import { globalCss } from ".";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0
    },
    body: {
        "-webkit-font-smooting": "antialiased",
        backgroundColor: "$secondary",
        color: '#D3D3D3'
    },

    "body, input, textarea, button": {
        fontFamily: 'inter',
        fontWeight: 400,
        color: '#D3D3D3',
    },
})