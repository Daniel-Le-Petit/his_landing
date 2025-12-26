import { useState, useEffect } from 'react'
import './HISDashboard.css'
import HISHeader from '../components/HISHeader'
import KPICards from '../components/KPICards'
import SubAppsGrid from '../components/SubAppsGrid'
import UpcomingFeatures from '../components/UpcomingFeatures'
import HISFooter from '../components/HISFooter'

function HISDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())

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

  return (
    <div className="his-dashboard">
      <div className="his-sidebar-gradient">
        <div className="his-sidebar-text">
          <span className="his-first-letter">H</span>ub <span className="his-first-letter">I</span>nformation <span className="his-first-letter">S</span>ystem
        </div>
      </div>
      <HISHeader currentTime={formatTime(currentTime)} />
      
      <main className="his-main-content">
        <div className="his-hero-section">
          <div className="his-section-label">REAL-TIME HUB DASHBOARD</div>
          <h1 className="his-main-title">Hub Information System</h1>
          <div className="his-description-wrapper">
            <p className="his-description">
              A real-time operational view of SPSS and EBSS sort activities, delivering actionable insights on physical positions, split performance, and processing efficiency at the CDG Hub
            </p>
          </div>
          
          <KPICards />
        </div>

        <SubAppsGrid />

        <UpcomingFeatures />

        <HISFooter />
      </main>
    </div>
  )
}

export default HISDashboard
