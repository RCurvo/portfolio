import { createStitches } from '@stitches/react'

export const {
    config,
    styled,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
} = createStitches({
    theme: {
        colors: {
            primary: '#264653',
            secondary: '#2a9d8f'
        }
    }
})