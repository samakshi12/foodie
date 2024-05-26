import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
             <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlink to="#bootstrap"></use></svg>
      </Link>
      <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><Link className="text-muted" to="#"><svg className="bi" width="24" height="24"><use xlink to="#twitter"></use></svg></Link></li>
      <li className="ms-3"><Link className="text-muted" to="#"><svg className="bi" width="24" height="24"><use xlink to="#instagram"></use></svg></Link></li>
      <li className="ms-3"><Link className="text-muted" to="#"><svg className="bi" width="24" height="24"><use xlink to="#facebook"></use></svg></Link></li>
    </ul>
  </footer>

    </div>
  )
}
