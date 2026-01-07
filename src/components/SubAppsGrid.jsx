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
      title: 'HIS SPSS',
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
      description: '',
      image: '/images/msp-dashboard.png',
      features: [
        'Real-time communication and anticipation of linehaul bottlenecks for outbound flight delays',
        'Remaining pieces processing time tracking and vessel detail pop-ups',
        'NOC approval workflow for delay management and decision-making',
        'Visibility on flight delay impacts and volume processed indicators',
        'Control Room broadcast of operational comments and delay instructions'
      ],
      category: 'MONITORING',
      status: 'online'
    },
    {
      id: 'crdb',
      title: 'Control Room Boxes (CRDB)',
      icon: <IconGrid />,
      description: '',
      image: '/images/crdb-dashboard.png',
      features: [
        'Full-spectrum visibility for the Box Outfeed area through 4 specialized data boards',
        'Overview Board displaying building names, conveyable packages, bags, non-conveyable packages, total transit, and processed pieces',
        'Run Out Transit Board with run-out numbers, package counts, total transit, pieces processed per hour, and total processed pieces',
        'Intermediate Destination Transit Board showing intermediate area details, total transit, and total processed with search functionality',
        'Final Destination Transit Board displaying chutes, splits, package counts, total transit, pieces processed per hour, and total processed with chute search'
      ],
      category: 'CONTROL',
      status: 'online'
    },
    {
      id: 'crdd',
      title: 'Control Room Docs (CRDD)',
      icon: <IconChart />,
      description: '',
      image: '/images/crdd-dashboard.png',
      features: [
        'In-depth real-time analytics for the Document Scan and SPSS area with comprehensive data visualization',
        'Total Transit vs Processed scan area metrics with percentage occupancy calculations',
        'Detail per Zone Board showing scanned pieces per hour and zone-specific performance indicators',
        'Real-time visibility on document processing efficiency and chute utilization across all zones',
        'Advanced search functionality and filtering capabilities for detailed operational analysis'
      ],
      category: 'CONTROL',
      status: 'online'
    }
  ]

  return (
    <section className="his-sub-apps-section">
      <div className="his-sub-apps-grid">
        {subApps.map((app) => (
          <div key={app.id} className={`his-sub-app-card ${app.id === 'spss' || app.id === 'ebss' || app.id === 'msp' || app.id === 'ofd' || app.id === 'crdb' || app.id === 'crdd' ? 'his-sub-app-card-spss' : ''}`}>
            <div className="his-sub-app-card-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                <div className="his-sub-app-icon">{app.icon}</div>
                <h3 className="his-sub-app-title his-sub-app-title-inline">{app.title}</h3>
              </div>
            </div>
            {app.description && <p className="his-sub-app-description">{app.description}</p>}
            
            {app.image && (
              <div className={`his-sub-app-image ${app.id === 'spss' || app.id === 'ebss' || app.id === 'msp' || app.id === 'ofd' || app.id === 'crdb' || app.id === 'crdd' ? 'his-sub-app-image-spss' : ''}`}>
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
