import { useState, useEffect } from 'react'
import './HISDashboard.css'
import HISHeader from '../components/HISHeader'
import KPICards from '../components/KPICards'
import SubAppsGrid from '../components/SubAppsGrid'
import UpcomingFeatures from '../components/UpcomingFeatures'
import HISFooter from '../components/HISFooter'

function HISDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [simplifiedMode, setSimplifiedMode] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    })
  }

  const heroContent = {
    title: 'REAL-TIME HUB DASHBOARD',
    description: 'A real-time operational view of SPSS and EBSS sort activities, delivering actionable insights on physical positions, split performance, and processing efficiency at the CDG Hub'
  }

  return (
    <div className={`his-dashboard ${simplifiedMode ? 'his-simplified-mode' : ''}`}>
      <HISHeader 
        currentTime={formatTime(currentTime)} 
        simplifiedMode={simplifiedMode}
        heroContent={simplifiedMode ? heroContent : null}
      />
      
      <main className="his-main-content">
        {!simplifiedMode && (
          <div className="his-hero-section">
            <div className="his-section-label">REAL-TIME HUB DASHBOARD</div>
            <h1 className="his-main-title">Hub Information System</h1>
            <p className="his-description">
              A real-time operational view of SPSS and EBSS sort activities, delivering actionable insights on physical positions, split performance, and processing efficiency at the CDG Hub
            </p>
            
            <KPICards />
          </div>
        )}

        <SubAppsGrid simplifiedMode={simplifiedMode} />

        {!simplifiedMode && <UpcomingFeatures />}

        <HISFooter 
          simplifiedMode={simplifiedMode}
          onToggleMode={() => setSimplifiedMode(!simplifiedMode)}
        />
      </main>
    </div>
  )
}

export default HISDashboard
