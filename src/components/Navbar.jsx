import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = (props) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { cartItems, favoriteIds } = useContext(CartContext);
  const totalItemCount = cartItems.reduce((sum, item) => {
    return sum + item.count;
  }, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  "nav-link " +
                  (pathname === "/" && "active text-danger fw-bold")
                }
                aria-current="page"
              >
                Products
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link
                className={
                  "nav-link " +
                  (pathname === "/cart" && "active text-danger fw-bold")
                }
                to="/cart"
              >
                Cart
                {totalItemCount > 0 && (
                  <span className="badge bg-secondary">{totalItemCount}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  "nav-link " +
                  (pathname === "/favourite" && "active text-danger fw-bold")
                }
                to="/favourite"
              >
                Favourite
                {favoriteIds.length > 0 && (
                  <span className="badge bg-secondary">
                    {favoriteIds.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
