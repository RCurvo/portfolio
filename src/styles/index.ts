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
            secondary: '#264653',
            primary: '#2a9d8f'
        }
    }
})