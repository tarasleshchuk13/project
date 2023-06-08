import path from 'path'
import webpack from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
    config.resolve.modules.push(path.resolve(process.cwd(), 'src'))
    config.resolve.modules.push('.ts', '.tsx')
    config.module.rules.push(buildCssLoader(true)) // add loader to storybook webpack config
    
    return config
}
