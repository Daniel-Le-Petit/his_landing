import './UpcomingFeatures.css'

function UpcomingFeatures() {
  return (
    <section className="his-upcoming-features">
      <div className="his-upcoming-card">
        <div className="his-upcoming-header">
          <h3 className="his-upcoming-title">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Upcoming Features
          </h3>
        </div>
        <h4 className="his-upcoming-subtitle">Control Room Docs</h4>
        <div className="his-upcoming-description">
          <h5 className="his-upcoming-board-title">Overview Board:</h5>
          <ul>
            <li>Percentage Occupancy displays Total Transit as a percentage of 1200 total chutes (e.g., 600/1200 = 50%)</li>
          </ul>
          <h5 className="his-upcoming-board-title">Detail per Zone Board:</h5>
          <ul>
            <li>The 3 highest chutes based on Total Transit are emphasized in red</li>
            <li>The zone search field filters the Detail Per Split table to show only splits linked to the selected zone</li>
            <li>The search functionality in the Detail Per Split table is restricted to chutes related to the selected zone</li>
          </ul>
          <h5 className="his-upcoming-board-title">Detail per Split Board:</h5>
          <ul>
            <li>Current pieces/hour, Total Processed, and Total Transit values represent averages per chute corresponding to the number of chutes listed in the first column</li>
            <li>Any activity in Total Transit or Total Processed is considered indicative of an Active chute</li>
            <li>Sortdown Time and LMC Sortdown Time are incorporated to reflect updated values in the event of a delay entry in OFD</li>
          </ul>
        </div>
        <div className="his-progress-section">
          <div className="his-progress-header">
            <span className="his-progress-label">DEVELOPMENT NOT STARTED</span>
            <span className="his-progress-percentage">0%</span>
          </div>
          <div className="his-progress-bar">
            <div className="his-progress-fill" style={{ width: '0%' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingFeatures
