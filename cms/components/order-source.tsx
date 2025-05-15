"use client"

import { useState } from "react"
import { Info, Download } from "lucide-react"

export default function OrderSource() {
  const [startDate, setStartDate] = useState("2025-05-10 12:00 AM")
  const [endDate, setEndDate] = useState("2025-05-14 11:59 PM")

  return (
    <div className="order-source bg-white p-4 rounded shadow-sm mb-4">
      <div className="section-header d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <h5 className="mb-0 me-2">Order Source</h5>
          <Info size={18} className="text-muted" />
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary btn-sm me-2">
            <span className="d-inline-block me-1">○</span>
          </button>
        </div>
      </div>

      <div className="date-filters d-flex justify-content-between mb-4">
        <div className="date-range d-flex">
          <div className="date-input d-flex align-items-center me-2">
            <input
              type="text"
              className="form-control form-control-sm"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="date-separator">-</div>
          <div className="date-input d-flex align-items-center ms-2">
            <input
              type="text"
              className="form-control form-control-sm"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <div className="action-buttons d-flex">
          <button className="btn btn-outline-secondary btn-sm me-2">
            <Download size={16} className="me-1" />
          </button>
          <div className="dropdown me-2">
            <button
              className="btn btn-outline-secondary btn-sm dropdown-toggle"
              type="button"
              id="orderStatusDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Order Status
            </button>
            <ul className="dropdown-menu" aria-labelledby="orderStatusDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Pending
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Approved
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Processing
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-outline-secondary btn-sm">Custom</button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="chart-section mb-4">
            <div className="d-flex align-items-center mb-3">
              <h6 className="mb-0 me-2">Order Count</h6>
              <Info size={16} className="text-muted" />
            </div>
            <div
              className="placeholder-content"
              style={{
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f8f9fa",
              }}
            >
              <p className="text-muted">Order Count Chart</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="chart-section">
            <div className="d-flex align-items-center mb-3">
              <h6 className="mb-0 me-2">Order Value</h6>
              <Info size={16} className="text-muted" />
            </div>
            <div
              className="placeholder-content"
              style={{
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f8f9fa",
              }}
            >
              <p className="text-muted">Order Value Chart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
