import { useState, useEffect } from 'react'
import './CRDBDashboard.css'
import HISHeader from '../components/HISHeader'

function CRDBDashboard() {
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
    <div className="crdb-dashboard">
      <HISHeader currentTime={formatTime(currentTime)} />
      
      <main className="crdb-main-content">
        {/* KPI Cards Section */}
        <div className="crdb-kpi-section">
          <div className="crdb-kpi-card">
            <div className="crdb-kpi-header">
              <span className="crdb-kpi-title">Total Transit</span>
              <div className="crdb-kpi-icon">📊</div>
            </div>
            <div className="crdb-kpi-value">1,846</div>
            <div className="crdb-kpi-chart">📈</div>
          </div>
          
          <div className="crdb-kpi-card">
            <div className="crdb-kpi-header">
              <span className="crdb-kpi-title">Total Processed</span>
              <div className="crdb-kpi-icon">📊</div>
            </div>
            <div className="crdb-kpi-value">35,956</div>
            <div className="crdb-kpi-chart">📈</div>
          </div>
          
          <div className="crdb-kpi-card">
            <div className="crdb-kpi-header">
              <span className="crdb-kpi-title">COY + Bags</span>
              <div className="crdb-kpi-icon">📊</div>
            </div>
            <div className="crdb-kpi-value">1,770</div>
            <div className="crdb-kpi-chart">📈</div>
          </div>
          
          <div className="crdb-kpi-card">
            <div className="crdb-kpi-header">
              <span className="crdb-kpi-title">NCOY</span>
              <div className="crdb-kpi-icon">📊</div>
            </div>
            <div className="crdb-kpi-value">76</div>
            <div className="crdb-kpi-chart">📈</div>
          </div>
        </div>

        {/* Data Tables Section */}
        <div className="crdb-tables-grid">
          {/* Overview Table */}
          <div className="crdb-table-section">
            <div className="crdb-table-header">
              <h3 className="crdb-table-title">Overview</h3>
              <button className="crdb-filter-btn">🔍</button>
            </div>
            <div className="crdb-table">
              <table>
                <thead>
                  <tr>
                    <th>Building</th>
                    <th>COY+Bags</th>
                    <th>NCOY</th>
                    <th>Total Transit</th>
                    <th>Total Processed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>V</td>
                    <td>674</td>
                    <td>61</td>
                    <td>889</td>
                    <td>27,510</td>
                  </tr>
                  <tr>
                    <td>B/D</td>
                    <td>1,097</td>
                    <td>15</td>
                    <td>957</td>
                    <td>9,447</td>
                  </tr>
                  <tr>
                    <td>ALL</td>
                    <td>1,770</td>
                    <td>76</td>
                    <td>1,846</td>
                    <td>35,956</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Run Out Transit Table */}
          <div className="crdb-table-section">
            <div className="crdb-table-header">
              <h3 className="crdb-table-title">Run Out Transit</h3>
              <div className="crdb-table-controls">
                <select className="crdb-sort-select">
                  <option>Sort By: Run Out</option>
                </select>
                <button className="crdb-filter-btn">🔍</button>
              </div>
            </div>
            <div className="crdb-table">
              <table>
                <thead>
                  <tr>
                    <th>Run Out</th>
                    <th>COY+Bags</th>
                    <th>NCOY</th>
                    <th>Total Transit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>11</td>
                    <td>24</td>
                    <td>1</td>
                    <td>389</td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>19</td>
                    <td>3</td>
                    <td>418</td>
                  </tr>
                  <tr>
                    <td>BD</td>
                    <td>197</td>
                    <td>25</td>
                    <td>256</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Intermediate Destination Transit Table (Single - Second one removed) */}
          <div className="crdb-table-section crdb-table-section-full">
            <div className="crdb-table-header">
              <h3 className="crdb-table-title">Intermediate Destination Transit</h3>
              <div className="crdb-table-controls">
                <input type="text" placeholder="Search..." className="crdb-search-input" />
                <button className="crdb-filter-btn">🔍</button>
              </div>
            </div>
            <div className="crdb-table">
              <table>
                <thead>
                  <tr>
                    <th>Area</th>
                    <th>Total Transit</th>
                    <th>Total Processed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X Ray COY</td>
                    <td>2016</td>
                    <td>1311</td>
                  </tr>
                  <tr>
                    <td>Exchange V to A NCOY</td>
                    <td>504</td>
                    <td>732</td>
                  </tr>
                  <tr>
                    <td>RLBL B Blk</td>
                    <td>125</td>
                    <td>1156</td>
                  </tr>
                  <tr>
                    <td>EDD COY</td>
                    <td>83</td>
                    <td>703</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Final Destination Transit Table */}
          <div className="crdb-table-section crdb-table-section-full">
            <div className="crdb-table-header">
              <h3 className="crdb-table-title">Final Destination Transit</h3>
              <div className="crdb-table-controls">
                <select className="crdb-sort-select">
                  <option>Sort By: Total Transit</option>
                </select>
                <button className="crdb-filter-btn">🔍</button>
              </div>
            </div>
            <div className="crdb-table">
              <table>
                <thead>
                  <tr>
                    <th>Chute</th>
                    <th>Split</th>
                    <th>COY+Bags</th>
                    <th>NCOY</th>
                    <th>Total Processed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>11</td>
                    <td>11</td>
                    <td>238</td>
                    <td>1</td>
                    <td>389</td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>12</td>
                    <td>235</td>
                    <td>25</td>
                    <td>418</td>
                  </tr>
                  <tr>
                    <td>BD</td>
                    <td>02</td>
                    <td>235</td>
                    <td>193</td>
                    <td>9,447</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CRDBDashboard

