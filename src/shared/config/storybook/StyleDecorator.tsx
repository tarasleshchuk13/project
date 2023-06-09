import { ReactRenderer } from '@storybook/react'
import { PartialStoryFn } from '@storybook/types'
import 'app/styles/index.scss'

export const StyleDecorator = (Story: PartialStoryFn<ReactRenderer>) => <Story/>
