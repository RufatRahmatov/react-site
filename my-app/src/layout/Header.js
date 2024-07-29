import React, { useState } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons';
import { SlArrowDown } from 'react-icons/sl';
import { FiMenu } from 'react-icons/fi';
import { FaExpand, FaRegBell } from 'react-icons/fa';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import Sidebar from './Sidebar';
import { IoPersonOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";
import { PiWrench } from "react-icons/pi";
import { HiOutlineLockOpen } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import './Dropdown.scss';
import './MegaMenu.scss';

const ProfileDropdown = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div
            className="profile"
            onClick={toggleDropdown}
        >
            <img
                src="https://skote-v-dark.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg"
                alt="Profile"
                className="profile-pic"
            />
            <span className="profile-name">admin</span>
            <SlArrowDown className="arrow-icon" />

            {isDropdownVisible && (
                <ul className="dropdown-menu">
                    <li className="dropdown-item"> <IoPersonOutline className="dropdown-icon" />  Profile</li>
                    <li className="dropdown-item"><LuWallet className='react-icons/lu' />  My Wallet</li>
                    <li className="dropdown-item"><PiWrench className='react-icons/sl' />  Settings</li>
                    <li className="dropdown-item"><HiOutlineLockOpen className='react-icons/hi' />  Lock screen</li>
                    <br></br>
                    <li className="dropdown-item"><AiOutlineLogout className='react-icons/ai' />  Logout</li>
                </ul>
            )}
        </div>
    );
};

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="header">
                <div className="header-left">
                    <button className="menu-button" onClick={toggleSidebar}>
                        <FiMenu />
                    </button>
                    <div className='search--button-began'>
                        <button className="search-button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <div className="header-center">
                            <input type="text" className="search-input" placeholder="Search..." />
                        </div>
                        <div className="mega-menu">
                            <button className="mega-menu-button" onClick={toggleMenu}>
                                Mega Menu <IoIosArrowDown className="arrow-icon" />
                            </button>
                            {isMenuOpen && (
                                <div className="mega-menu-content">
                                    <div className="column">
                                        <h4>UI Components</h4>
                                        <ul>
                                            <li>Lightbox</li>
                                            <li>Range Slider</li>
                                            <li>Sweet Alert</li>
                                            <li>Rating</li>
                                            <li>Forms</li>
                                            <li>Tables</li>
                                            <li>Charts</li>
                                        </ul>
                                    </div>
                                    <div className="column">
                                        <h4>Applications</h4>
                                        <ul>
                                            <li>Ecommerce</li>
                                            <li>Calendar</li>
                                            <li>Email</li>
                                            <li>Projects</li>
                                            <li>Tasks</li>
                                            <li>Contacts</li>
                                        </ul>
                                    </div>
                                    <div className="column">
                                        <h4>Extra Pages</h4>
                                        <ul>
                                            <li>Light Sidebar</li>
                                            <li>Compact Sidebar</li>
                                            <li>Horizontal Layout</li>
                                            <li>Maintenance</li>
                                            <li>Coming Soon</li>
                                            <li>Timeline</li>
                                            <li>FAQs</li>
                                        </ul>
                                    </div>
                                    <div className="column">
                                        <h4>UI Components</h4>
                                        <ul>
                                            <li>Lightbox</li>
                                            <li>Range Slider</li>
                                            <li>Sweet Alert</li>
                                            <li>Rating</li>
                                            <li>Forms</li>
                                            <li>Tables</li>
                                            <li>Charts</li>
                                        </ul>
                                    </div>
                                    <img src='https://skote-v-white.react.themesbrand.com/static/media/megamenu-img.8b069df40f2e8fc97bf9.png'></img>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <button className="icon-button">
                        <img
                            className='use-flag'
                            alt='logo'
                            src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcDBgEEBQj/xAA1EAABAgIHBwIFAwUAAAAAAAABAgQAAwUGBxESFlYTFBVRk6HTMVciI5GS0hdBYiElRVKC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAYBBUcDBP/EADERAAAEAwMKBQUAAAAAAAAAAAABAgMEBRESIZETFBUWUVRWkpPSBjIzZoExQVNk0f/aAAwDAQACEQMRAD8AoRouTPo5m9mKnNJ0yS7nrcOydi8VLWAJbYpQSV88X7x0zV9nxZcnc6RwCcuVwr/KACRtNqRgw4L+0RtEhtQzadMG6hwwfoTOegOJLoiYkYGyMB2MwemOO0W39wNF7k62ofTF8Mxp4okbpftN6wXGX++CNHU4ojWRKOlFl8VFeK23oNotqsrcmbj3A7/JxFoz3kkLQ6vReFD+MWWqNDUPx+r8mlHDpk0cSX22fkjd5+xKwhTclIOH+lxjUbqQuXIfCdLmIbIohK3siQENGhxH4XkjB89Q/wBo6lW10QxrDVt/TlFOXFGzUUkpSpaxu7n4lpC20v5eySk+qY8UzWapfHktRWci5W15fTreLCUm4U0lxtG7lM5as5EiNytovJauqHXlazfWk76p/CDK1m+tJ31T+EGYbK9KPPtHlgzDZXpR59o8sZRRjZCYrG1VnXuTkhAZWs31pO+qfwjKas2cJIUmuk4KBvBBSCCP+IxmGyvSjz7R5YMw2V6UefaPLBRj9TFYKzo7j1k5IQI9FS6/MWqGrGpdJSXCpLhs8nYDOTPlzFAgJSQQjliTG2aqVzLhUn9P6T4Nty4Sw+PGJhlbPFt8OP8AlHpHglrOp2HbwwcEtZ1Ow7eGHHWmIP6y06/P9GZaswnEkr6jnYPNMuq9ooSifOqdSUykWwaJYuRKwiQlqSQlSAnDNv5qixVQoGu9DViomnBUN4HTdDsuVzQrZz1uMVygj0Rdf6CHpwS1nU7Dt4YOCWs6nYdvDHJ/xJEPsvM6PUjKINFpJXlUqbR2h/DsEw+y8ufyp1KFpUaFuu2VU+x0QIs0V90IjprgzRX3QiOmuJeCWs6nYdvDBwS1nU7Dt4YW6vbYrlQGazKPbvXihFmivuhEdNcGaK+6ER01xLwS1nU7Dt4YOCWs6nYdvDHV7bFcqAWZR7d68UK1lep3uIrrIgyvU73EV1kQqXqEIeukIQAkTZgAAu'
                        />
                    </button>
                    <button className="icon-button">
                        <AiOutlineAppstoreAdd className="appstore-add-icon" />
                    </button>
                    <button className="icon-button">
                        <FaExpand className="fullscreen-icon" />
                    </button>
                    <div className='div-3'><p>3</p></div>
                    <button className="icon-button bell-icon">
                        <FaRegBell />
                    </button>
                    <ProfileDropdown />
                    <button className="icon-button spin-icon">
                        <FontAwesomeIcon icon={faCog} />
                    </button>
                </div>
            </header>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    );
};

export default Header;
