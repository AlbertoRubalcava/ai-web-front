import React, { useState, useRef } from 'react';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { useButton } from '@react-aria/button';
import { useOverlay } from '@react-aria/overlays';
import Up from '../../images/Up.png';
import Down from '../../images/Down.png';
import CSUNLogo from '../../images/CSUNLogo.png'
import '../../css/navbar.css';


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
      'aria-haspopup': 'true',
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

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={CSUNLogo} alt="CSUN Logo"
          className="navbar-logo"
        />
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
            Academic Tools
            <img
              src={isDropdownOpen ? Up : Down} 
              alt={isDropdownOpen ? "Up Arrow" : "Down Arrow"}
              className="dropdown-icon"
            />
          </button>
          {state.isOpen && (
            <ul
              {...overlayProps}
              ref={dropdownRef}
              className="dropdown-menu"
              role="menu"
            >
             <li role="menuitem">
                <a
                    href="https://www.csun.edu/University-Advising"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-link"
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