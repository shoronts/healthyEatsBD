import { Bell } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 px-4 border-bottom">
      <div className="container-fluid">
        <div className="navbar-nav me-auto">
          <a className="nav-link active fw-bold" href="#">
            Dashboard
          </a>
          <a className="nav-link" href="#">
            Orders
          </a>
        </div>
        <div className="d-flex align-items-center">
          <div className="position-relative me-3">
            <Bell size={20} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
          </div>
          <div className="user-profile">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="User Profile"
              width={40}
              height={40}
              className="rounded-circle"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
