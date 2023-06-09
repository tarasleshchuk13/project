import { screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Sidebar } from 'widgets/Sidebar'

describe('Sidebar', () => {
    test('Sidebar test', () => {
        componentRender(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})
