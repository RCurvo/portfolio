import { globalCss } from ".";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
    },
    body: {
        position: "relative",
        minHeight: "100vh",
        margin: 0,
        "-webkit-font-smooting": "antialiased",
        backgroundColor: "black",
        color: '#D3D3D3',
        display:"flex", 
        flexDirection:"column",

        ul: {
            flex: 1
        }
    },

    "body, input, textarea, button": {
        fontFamily: 'inter',
        fontWeight: 400,
        color: '#D3D3D3',
    },
})