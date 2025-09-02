import { useTranslation } from '../hooks/useTranslation.js'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Shield, Globe, Lock, Eye, UserCheck, FileText, Clock, Mail } from 'lucide-react'

const PrivacyPolicy = () => {
  const { t } = useTranslation()

  const complianceRegions = [
    { name: 'GDPR', region: 'European Union', icon: '🇪🇺' },
    { name: 'CCPA', region: 'California, USA', icon: '🇺🇸' },
    { name: 'LGPD', region: 'Brazil', icon: '🇧🇷' },
    { name: 'PIPEDA', region: 'Canada', icon: '🇨🇦' },
    { name: 'PDPA', region: 'Singapore', icon: '🇸🇬' },
    { name: 'DPA', region: 'United Kingdom', icon: '🇬🇧' }
  ]

  const dataTypes = [
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: t('privacy.policy.dataTypes.personal.title'),
      description: t('privacy.policy.dataTypes.personal.description'),
      examples: ['Nome', 'Email', 'Indirizzo', 'Telefono']
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: t('privacy.policy.dataTypes.technical.title'),
      description: t('privacy.policy.dataTypes.technical.description'),
      examples: ['IP Address', 'Browser', 'Device Info', 'Cookies']
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: t('privacy.policy.dataTypes.behavioral.title'),
      description: t('privacy.policy.dataTypes.behavioral.description'),
      examples: ['Page Views', 'Click Patterns', 'Purchase History', 'Preferences']
    }
  ]

  const userRights = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: t('privacy.policy.rights.access.title'),
      description: t('privacy.policy.rights.access.description')
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: t('privacy.policy.rights.rectification.title'),
      description: t('privacy.policy.rights.rectification.description')
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: t('privacy.policy.rights.erasure.title'),
      description: t('privacy.policy.rights.erasure.description')
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: t('privacy.policy.rights.portability.title'),
      description: t('privacy.policy.rights.portability.description')
    }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-amber-900">
          {t('privacy.policy.title')}
        </h1>
        <p className="text-xl text-amber-700">
          {t('privacy.policy.subtitle')}
        </p>
        <div className="flex justify-center">
          <Badge className="bg-green-100 text-green-800 px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            {t('privacy.policy.lastUpdated')}: {new Date().toLocaleDateString()}
          </Badge>
        </div>
      </div>

      {/* Compliance Badges */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-900 flex items-center">
            <Globe className="w-5 h-5 mr-2" />
            {t('privacy.policy.compliance.title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {complianceRegions.map((region, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-green-200">
                <span className="text-2xl">{region.icon}</span>
                <div>
                  <div className="font-medium text-green-900">{region.name}</div>
                  <div className="text-sm text-green-600">{region.region}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Introduzione */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-900">
            {t('privacy.policy.introduction.title')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-amber-700">
          <p>{t('privacy.policy.introduction.paragraph1')}</p>
          <p>{t('privacy.policy.introduction.paragraph2')}</p>
          <p>{t('privacy.policy.introduction.paragraph3')}</p>
        </CardContent>
      </Card>

      {/* Tipi di Dati Raccolti */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-900">
            {t('privacy.policy.dataCollection.title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {dataTypes.map((dataType, index) => (
              <div key={index} className="border border-amber-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="text-amber-600 mt-1">
                    {dataType.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-amber-900 mb-2">
                      {dataType.title}
                    </h4>
                    <p className="text-amber-700 mb-3">
                      {dataType.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dataType.examples.map((example, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-amber-300 text-amber-600">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Finalità del Trattamento */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-900">
            {t('privacy.policy.purposes.title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium text-amber-900">{t('privacy.policy.purposes.essential.title')}</h4>
              <ul className="space-y-2 text-amber-700 text-sm">
                <li>• {t('privacy.policy.purposes.essential.item1')}</li>
                <li>• {t('privacy.policy.purposes.essential.item2')}</li>
                <li>• {t('privacy.policy.purposes.essential.item3')}</li>
                <li>• {t('privacy.policy.purposes.essential.item4')}</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-amber-900">{t('privacy.policy.purposes.marketing.title')}</h4>
              <ul className="space-y-2 text-amber-700 text-sm">
                <li>• {t('privacy.policy.purposes.marketing.item1')}</li>
                <li>• {t('privacy.policy.purposes.marketing.item2')}</li>
                <li>• {t('privacy.policy.purposes.marketing.item3')}</li>
                <li>• {t('privacy.policy.purposes.marketing.item4')}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diritti dell'Utente */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-900">
            {t('privacy.policy.userRights.title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {userRights.map((right, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1">
                    {right.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900 mb-2">
                      {right.title}
                    </h4>
                    <p className="text-blue-700 text-sm">
                      {right.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sicurezza dei Dati */}
      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="text-purple-900 flex items-center">
            <Lock className="w-5 h-5 mr-2" />
            {t('privacy.policy.security.title')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-purple-700">
          <p>{t('privacy.policy.security.paragraph1')}</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded-lg border border-purple-200 text-center">
              <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="font-medium text-purple-900">SSL/TLS</div>
              <div className="text-sm text-purple-600">Crittografia</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-200 text-center">
              <Lock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="font-medium text-purple-900">Blockchain</div>
              <div className="text-sm text-purple-600">Certificazione</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-200 text-center">
              <Eye className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="font-medium text-purple-900">Monitoring</div>
              <div className="text-sm text-purple-600">24/7</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contatti */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-900 flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            {t('privacy.policy.contact.title')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-amber-900 mb-2">
                {t('privacy.policy.contact.dpo.title')}
              </h4>
              <div className="space-y-1 text-amber-700 text-sm">
                <p>Email: privacy@terroir-custodian.com</p>
                <p>Tel: +1 (555) 123-4567</p>
                <p>Response Time: 72 hours</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-amber-900 mb-2">
                {t('privacy.policy.contact.legal.title')}
              </h4>
              <div className="space-y-1 text-amber-700 text-sm">
                <p>Terroir Custodian™ LLC</p>
                <p>1234 Vineyard Lane</p>
                <p>Napa Valley, CA 94558</p>
                <p>USA</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-sm text-amber-600 pt-8 border-t border-amber-200">
        <p>{t('privacy.policy.footer.lastUpdated')}: {new Date().toLocaleDateString()}</p>
        <p>{t('privacy.policy.footer.version')}: 2.1</p>
        <p className="mt-2">{t('privacy.policy.footer.changes')}</p>
      </div>
    </div>
  )
}

export default PrivacyPolicy

