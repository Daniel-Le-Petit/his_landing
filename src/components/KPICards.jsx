import './KPICards.css'

function KPICards() {
  const kpis = [
    {
      title: 'SORT WINDOW',
      value: 'IP_D1234',
      trend: 'down',
      color: '#ef4444'
    },
    {
      title: 'TOTAL TRANSIT',
      value: '42.800',
      trend: 'up',
      color: '#10b981'
    },
    {
      title: 'PROCESSED PIECES',
      value: '18.400',
      trend: 'up',
      color: '#10b981'
    },
    {
      title: 'ACTIVE POSITIONS',
      value: '1.042',
      trend: 'neutral',
      color: '#6b7280'
    }
  ]

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'up':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 5L15 10L10 15M5 5L10 10L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      case 'down':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 15L5 10L10 5M15 15L10 10L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 15V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
    }
  }

  return (
    <div className="his-kpi-grid">
      {kpis.map((kpi, index) => (
        <div key={index} className="his-kpi-card">
          <div className="his-kpi-header">
            <h3 className="his-kpi-title">{kpi.title}</h3>
            <div className="his-kpi-trend" style={{ color: kpi.color }}>
              {getTrendIcon(kpi.trend)}
            </div>
          </div>
          <div className="his-kpi-value">{kpi.value}</div>
        </div>
      ))}
    </div>
  )
}

export default KPICards
