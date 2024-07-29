import React, { useState } from 'react';
import './Sidebar.scss';
import {
    BiHomeCircle, BiCalendar, BiChat, BiFolder, BiShoppingBag,
    BiBitcoin, BiEnvelope, BiFile, BiBriefcase, BiTask, BiBookContent,
    BiUser, BiBriefcaseAlt, BiChevronDown
} from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState({
        Calendar: false,
        Chat: false,
        FileManager: false,
        Ecommerce: false,
        Crypto: false,
        Email: false,
        Invoices: false,
        Projects: false,
        Tasks: false,
        Contacts: false,
        Blog: false,
        Jobs: false,
    });

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleSubMenuToggle = (menu, event) => {
        event.stopPropagation();
        setSubMenuOpen((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    const handleMenuItemClick = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <FiMenu className="menu-icon" onClick={toggleSidebar} />
            <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={handleMenuItemClick}>
                <div className="logo">
                    <img src="https://themesbrand.com/skote/layouts/assets/images/logo-dark.png" alt="Logo" />
                </div>
                <div className='p-tag'><p>MENU</p></div>
                <a href="#" className="menu-item"><BiHomeCircle /> Dashboards<BiChevronDown className={`arrow-icon ${subMenuOpen.Calendar ? 'open' : ''}`} /></a>
                <div className='p-tag'><p>APPS</p></div>
                <a href="#" className="menu-item" onClick={(e) => handleSubMenuToggle('Calendar', e)}>
                    <BiCalendar /> Calendar <BiChevronDown className={`arrow-icon ${subMenuOpen.Calendar ? 'open' : ''}`} />
                </a>
                {subMenuOpen.Calendar && <div className="sub-menu">Calendar Submenu</div>}
                <a href="#" className="menu-item" onClick={(e) => handleSubMenuToggle('Chat', e)}>
                    <BiChat /> Chat <BiChevronDown className={`arrow-icon ${subMenuOpen.Chat ? 'open' : ''}`} />
                </a>
                {subMenuOpen.Chat && <div className="sub-menu">Chat Submenu</div>}
                <a href="#" className="menu-item" onClick={(e) => handleSubMenuToggle('FileManager', e)}>
                    <BiFolder /> File Manager <BiChevronDown className={`arrow-icon ${subMenuOpen.FileManager ? 'open' : ''}`} />
                </a>
                {subMenuOpen.FileManager && <div className="sub-menu">File Manager Submenu</div>}
                <a href="#" className="menu-item" onClick={(e) => handleSubMenuToggle('Ecommerce', e)}>
                    <BiShoppingBag /> Ecommerce <BiChevronDown className={`arrow-icon ${subMenuOpen.Ecommerce ? 'open' : ''}`} />
                </a>
                {subMenuOpen.Ecommerce && <div className="sub-menu">Ecommerce Submenu</div>}
                <a href="#" className="menu-item" onClick={(e) => handleSubMenuToggle('Crypto', e)}>
                    <BiBitcoin /> Crypto <BiChevronDown className={`arrow-icon ${subMenuOpen.Crypto ? 'open' : ''}`} />
                </a>
                {subMenuOpen.Crypto && <div className="sub-menu">Crypto Submenu</div>}
                <a href="#" className="menu-item" onClick={(e) => handleSubMenuToggle('Email', e)}>
                    <BiEnvelope /> Email <BiChevronDown className={`arrow-icon ${subMenuOpen.Email ? 'open' : ''}`} />
                </a>
                {subMenuOpen.Email && <div className="sub-menu">Email Submenu</div>}
                <a href="#" className="menu-item" onClick={(e) => handleSubMenuToggle('Invoices', e)}>
                    <BiFile /> Invoices <BiChevronDown className={`arrow-icon ${subMenuOpen.Invoices ? 'open' : ''}`} />
                </a>
                {subMenuOpen.Invoices && <div className="sub-menu">Invoices Submenu</div>}
                <a href="#" className="menu-item" onClick={(e) => handleSubMenuToggle('Projects', e)}>
                    <BiBriefcase /> Projects <BiChevronDown className={`arrow-icon ${subMenuOpen.Projects ? 'open' : ''}`} />
                </a>
                {subMenuOpen.Projects && <div className="sub-menu">Projects Submenu</div>}
                <a href="#" className="menu-item" onClick={(e) => handleSubMenuToggle('Tasks', e)}>
                    <BiTask /> Tasks <BiChevronDown className={`arrow-icon ${subMenuOpen.Tasks ? 'open' : ''}`} />
                </a>
                {subMenuOpen.Tasks && <div className="sub-menu">Tasks Submenu</div>}
                <a href="#" className="menu-item" onClick={(e) => handleSubMenuToggle('Contacts', e)}>
                    <BiUser /> Contacts <BiChevronDown className={`arrow-icon ${subMenuOpen.Contacts ? 'open' : ''}`} />
                </a>
                {subMenuOpen.Contacts && <div className="sub-menu">Contacts Submenu</div>}
                <a href="#" className="menu-item" onClick={(e) => handleSubMenuToggle('Blog', e)}>
                    <BiBookContent /> Blog <BiChevronDown className={`arrow-icon ${subMenuOpen.Blog ? 'open' : ''}`} />
                </a>
                {subMenuOpen.Blog && <div className="sub-menu">Blog Submenu</div>}
                <a href="#" className="menu-item" onClick={(e) => handleSubMenuToggle('Jobs', e)}>
                    <BiBriefcaseAlt /> Jobs <BiChevronDown className={`arrow-icon ${subMenuOpen.Jobs ? 'open' : ''}`} />
                </a>
                {subMenuOpen.Jobs && (
                    <div className="sub-menu">
                        <Link to="/jobs-list" className="sub-menu-item">Job List</Link>
                        <Link to="/job-list" className="sub-menu-item">Job Grid</Link>
                        { }
                    </div>
                )}
            </div>

        </>
    );
};


export default Sidebar;
