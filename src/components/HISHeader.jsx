import { useState } from 'react'
import './HISHeader.css'

function HISHeader({ currentTime, simplifiedMode, heroContent }) {
  const [environment, setEnvironment] = useState('Production')

  return (
    <header className="his-header his-header-simplified">
      <div className="his-header-left">
        <div className="his-logo">
          <div className="his-fedex-logo">
            <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold">
                <tspan fill="#FFFFFF">Fed</tspan><tspan fill="#FF6600">Ex</tspan>
              </text>
              <circle cx="95" cy="8" r="6" fill="#FF6600"/>
              <text x="95" y="11" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">R</text>
            </svg>
          </div>
        </div>
      </div>

      {heroContent && (
        <div className="his-header-center-simplified">
          <div className="his-hero-content-in-header">
            <h1 className="his-main-title-in-header">{heroContent.title}</h1>
            <p className="his-description-in-header">{heroContent.description}</p>
          </div>
        </div>
      )}

      <div className="his-header-right">
        <div className="his-environment-selector">
          <select 
            value={environment}
            onChange={(e) => setEnvironment(e.target.value)}
            className="his-environment-select"
          >
            <option value="UAT">UAT</option>
            <option value="Production">Production</option>
          </select>
        </div>
        <div className="his-time">{currentTime}</div>
        <div className="his-location">CDG HUB</div>
        <button className="his-icon-btn his-profile-btn">
          <div className="his-profile-avatar">JD</div>
        </button>
      </div>
    </header>
  )
}

export default HISHeader

