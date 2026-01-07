import './SubAppsGrid.css'

const IconDocument = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="8" y="6" width="24" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 12H26M14 18H26M14 24H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const IconBox = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M8 12L20 6L32 12M8 12V28L20 34L32 28V12M8 12L20 18L32 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
)

const IconLock = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="12" y="18" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 18V14C16 10.6863 18.6863 8 22 8C25.3137 8 28 10.6863 28 14V18" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const IconPlane = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M32 20L8 12L14 20L8 28L32 20Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M20 8L28 20L20 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const IconGrid = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="6" y="6" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
    <rect x="22" y="6" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
    <rect x="6" y="22" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
    <rect x="22" y="22" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const IconChart = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 28L16 20L20 24L24 16L28 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function SubAppsGrid({ simplifiedMode = false }) {
  const subApps = [
    {
      id: 'spss',
      title: 'HIS for SPSS',
      icon: <IconDocument />,
      description: '',
      image: '/images/spss-dashboard.png',
      features: [
        'Real-time document transit and sorted counts',
        'Dynamic chute configuration (up to 12 chutes)',
        'Bag and document processing metrics',
        'Visibility on physical positions, splits, delays, and sort downtime',
        'Volume anticipation and performance monitoring to support resource allocation'
      ],
      category: 'OPERATIONS',
      status: 'online'
    },
    {
      id: 'ebss',
      title: 'HIS Outfeed',
      icon: <IconBox />,
      description: '',
      image: '/images/ebss-dashboard.png',
      features: [
        'Real-time monitoring of EBSS outfeed operations for conveyable and non-conveyable packages and bags',
        'Visibility on ULD container loading from SPSS to aircraft dispatch',
        'Sort-down time, flight delay, and volume processed indicators for frontline teams',
        'Control Room broadcast of operational comments and instructions',
        'Positive pull signaling to confirm when no additional flight delay is possible'
      ],
      category: 'OPERATIONS',
      status: 'online'
    },
    {
      id: 'msp',
      title: 'HIS MSP',
      icon: <IconLock />,
      description: '',
      image: '/images/msp-dashboard.png',
      features: [
        'Real-time monitoring of Sensitive Products throughout hub operations',
        'End-to-end tracking to ensure secure, time-critical package handling',
        'Visibility on handling efficiency and processing performance',
        'Chain of custody monitoring to guarantee traceability and compliance',
        'Web-based application with direct access for operational and control teams'
      ],
      category: 'MONITORING',
      status: 'online'
    },
    {
      id: 'ofd',
      title: 'HIS OFD',
      icon: <IconPlane />,
      description: 'Outbound Flight Delays. Real-time communication and anticipation of linehaul bottlenecks.',
      features: [
        'Remaining pieces processing time',
        'Vessel detail pop-ups',
        'NOC approval workflow'
      ],
      category: 'MONITORING',
      status: 'online'
    },
    {
      id: 'crdb',
      title: 'Control Room Boxes (CRDB)',
      icon: <IconGrid />,
      description: 'Full-spectrum visibility for the Box Outfeed area through 4 specialized data boards.',
      features: [
        'Overview (Conveyables, Bags, Non-Conv)',
        'Run Out Transit details',
        'Intermediate Destination research'
      ],
      category: 'CONTROL',
      status: 'online'
    },
    {
      id: 'crdd',
      title: 'Control Room Docs (CRDD)',
      icon: <IconChart />,
      description: 'In-depth real-time analytics for the Document Scan and SPSS area.',
      features: [
        'Total Transit vs Processed scan area',
        'Percentage Occupancy calculations',
        'Detail per Zone (scanned pieces/hour)'
      ],
      category: 'CONTROL',
      status: 'online'
    }
  ]

  return (
    <section className="his-sub-apps-section">
      <div className="his-sub-apps-grid">
        {subApps.map((app) => (
          <div key={app.id} className={`his-sub-app-card ${app.id === 'spss' || app.id === 'ebss' || app.id === 'msp' ? 'his-sub-app-card-spss' : ''}`}>
            <div className="his-sub-app-card-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                <div className="his-sub-app-icon">{app.icon}</div>
                {(app.id === 'spss' || app.id === 'ebss' || app.id === 'msp') && <h3 className="his-sub-app-title his-sub-app-title-inline">{app.title}</h3>}
              </div>
              <span className={`his-status-badge his-status-${app.status}`}>
                {app.status.toUpperCase()}
              </span>
            </div>
            
            {app.id !== 'spss' && app.id !== 'ebss' && app.id !== 'msp' && <h3 className="his-sub-app-title">{app.title}</h3>}
            {app.description && <p className="his-sub-app-description">{app.description}</p>}
            
            {app.image && (
              <div className={`his-sub-app-image ${app.id === 'spss' || app.id === 'ebss' || app.id === 'msp' ? 'his-sub-app-image-spss' : ''}`}>
                <img src={app.image} alt={`${app.title} dashboard`} />
              </div>
            )}
            
            <ul className="his-sub-app-features">
              {app.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <div className="his-sub-app-footer">
              {!simplifiedMode && <span className="his-sub-app-category">{app.category}</span>}
              <a href={`#${app.id}`} className="his-access-link">
                Access App <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SubAppsGrid
