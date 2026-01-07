import { useState } from 'react'
import './HISHeader.css'

function HISHeader({ currentTime, simplifiedMode, heroContent }) {
  const [environment, setEnvironment] = useState('Production')

  return (
    <header className={`his-header ${simplifiedMode ? 'his-header-simplified' : ''}`}>
      <div className="his-header-left">
        <div className="his-logo">
          {simplifiedMode ? (
            <div className="his-fedex-logo">
              <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold">
                  <tspan fill="#FFFFFF">Fed</tspan><tspan fill="#FF6600">Ex</tspan>
                </text>
                <circle cx="95" cy="8" r="6" fill="#FF6600"/>
                <text x="95" y="11" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">R</text>
              </svg>
            </div>
          ) : (
            <>
              <div className="his-logo-icon">C</div>
              <div className="his-logo-text">
                <div className="his-logo-title">HIS Hub Information</div>
                <div className="his-logo-subtitle">INFORMATION SYSTEM V3.20</div>
              </div>
            </>
          )}
        </div>
      </div>

      {simplifiedMode && heroContent && (
        <div className="his-header-center-simplified">
          <div className="his-hero-content-in-header">
            <h1 className="his-main-title-in-header">{heroContent.title}</h1>
            <p className="his-description-in-header">{heroContent.description}</p>
          </div>
        </div>
      )}

      {!simplifiedMode && (
        <div className="his-header-center">
          <div className="his-search-bar">
            <svg className="his-search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input 
              type="text" 
              placeholder="Q Search components, chutes or flight delays..." 
              className="his-search-input"
            />
          </div>
        </div>
      )}

      <div className="his-header-right">
        {simplifiedMode && (
          <div className="his-environment-selector">
            <label className="his-environment-label">Environment:</label>
            <select 
              value={environment}
              onChange={(e) => setEnvironment(e.target.value)}
              className="his-environment-select"
            >
              <option value="UAT">UAT</option>
              <option value="Production">Production</option>
            </select>
          </div>
        )}
        <div className="his-time">{currentTime}</div>
        <div className="his-location">CDG HUB - FRANCE</div>
        {!simplifiedMode && (
          <button className="his-icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C10 2 3 4 3 10C3 13 5 15.5 10 18C15 15.5 17 13 17 10C17 4 10 2 10 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
            </svg>
          </button>
        )}
        <button className="his-icon-btn his-profile-btn">
          <div className="his-profile-avatar">JD</div>
        </button>
      </div>
    </header>
  )
}

export default HISHeader

