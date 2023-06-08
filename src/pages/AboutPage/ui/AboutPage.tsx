import { BugButton } from 'app/providers/ErrorBoundary'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
    const { t } = useTranslation('about')
    
    return (
        <div>
            <BugButton/>
            {t('О сайте')}
            {t('О сайте1')}
        </div>
    )
}

export default AboutPage
