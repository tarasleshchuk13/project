import path from 'path'
import webpack, { RuleSetRule } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
    config.resolve.modules.push(path.resolve(process.cwd(), 'src'))
    config.resolve.modules.push('.ts', '.tsx')
    config.module.rules.push(buildCssLoader(true)) // add loader to storybook webpack config
    
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        
        return rule;
    });
    
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    
    return config
}
