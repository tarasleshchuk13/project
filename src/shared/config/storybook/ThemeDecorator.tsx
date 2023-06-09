import { ReactRenderer } from '@storybook/react'
import { PartialStoryFn } from '@storybook/types'
import { Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (Story: PartialStoryFn<ReactRenderer>) => (
    <div className={`app ${theme}`}>
        <Story/>
    </div>
)
