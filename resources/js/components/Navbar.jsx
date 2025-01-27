import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { useButton } from '@react-aria/button';
import { useOverlay } from '@react-aria/overlays';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import CSUNLogo from '/resources/images/CSUNLogo.png';
import '/resources/css/navbar.css';

var baseUrl = '';

if (import.meta.env.VITE_APP_ENV === 'production') {
  baseUrl = import.meta.env.VITE_APP_URL || '';
}

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const buttonRef = useRef();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const state = useOverlayTriggerState({ isOpen: isDropdownOpen });
  const { buttonProps } = useButton(
    {
      onPress: toggleDropdown,
      'aria-haspopup': 'menu',
      'aria-expanded': isDropdownOpen,
    },
    buttonRef
  );
  const { overlayProps } = useOverlay(
    {
      onClose: closeDropdown,
      isOpen: isDropdownOpen,
      isDismissable: true,
    },
    dropdownRef
  );

  const navigate = useNavigate();

  const generateClick = () => {
    navigate('/');
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-left">
        <button
          className="home-button"
          onClick={generateClick}
          aria-label="Go to homepage"
        >
          <img
            src={baseUrl + CSUNLogo}
            alt="California State University, Northridge Logo"
            className="navbar-logo"
          />
        </button>
      </div>
      <div className="navbar-right">
        <div className="navbar-dropdown">
          <button
            {...buttonProps}
            ref={buttonRef}
            className={`navbar-more-tools ${
              isDropdownOpen ? 'dropdown-active' : ''
            }`}
          >
            <span>
              Academic Tools
              {isDropdownOpen ? (
                <FaChevronUp className="dropdown-icon" />
              ) : (
                <FaChevronDown className="dropdown-icon" />
              )}
            </span>
          </button>
          {state.isOpen && (
            <ul
              {...overlayProps}
              ref={dropdownRef}
              className="dropdown-menu"
              role="menu"
              tabIndex="-1"
              aria-label="Academic Tools Menu"
            >
              <li role="menuitem">
                <a
                  href="https://www.csun.edu/University-Advising"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-link"
                  tabIndex="0"
                >
                  Advisement
                </a>
              </li>
              <li role="menuitem">
                <a
                  href="https://auth.csun.edu/cas/login?method=POST&service=https%3A%2F%2Fcmsweb.csun.edu%2Fpsp%2FCNRPRD%2FEMPLOYEE%2FSA%2Fc%2FNR_SSS_COMMON_MENU.NR_SSS_SOC_BASIC_C.GBL%3Fgsmobile=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-link"
                  tabIndex="0"
                >
                  Class Search
                </a>
              </li>
              <li role="menuitem">
                <a
                  href="https://catalog.csun.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-link"
                  tabIndex="0"
                >
                  Course Catalog
                </a>
              </li>
              <li role="menuitem">
                <a
                  href="https://auth.csun.edu/cas/login?method=POST&service=https://cmsweb.csun.edu/psp/CNRPRD/EMPLOYEE/SA/c/NR_SSS_LAUNCH_MENU.NR_SSS_ENRL_CNTL_C.GBL%3FKurogoApp%3D1%26gsmobile%3D1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-link"
                  tabIndex="0"
                >
                  Enroll in Classes
                </a>
              </li>
              <li role="menuitem">
                <a
                  href="https://auth.csun.edu/cas/login?method=POST&service=https://cmsweb.csun.edu/psp/CNRPRD/EMPLOYEE/SA/c/PRJCS_MENU.PRJCS_SCHD_STRT.GBL%3Fcmd=login%26redirecturl=https://cmsweb.csun.edu/psp/CNRPRD/EMPLOYEE/SA/c/PRJCS_MENU.PRJCS_SCHD_STRT.GBL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-link"
                  tabIndex="0"
                >
                  Registration Planner
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
