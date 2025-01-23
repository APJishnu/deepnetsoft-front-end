"use client";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import { usePathname, useRouter } from "next/navigation"; // Import usePathname and useRouter
import styles from "./navbar.module.scss";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  // Sample dropdown items with routing
  const dropdownItems = [
    { label: "HOME", path: "/" },
    { label: "MENU", path: "/menu" },
    { label: "MAKE A RESERVATION", path: "/reservation" },
    { label: "CONTACT US", path: "/contact" },
  ];

  const menu = (
    <Menu className={styles.blackThemeMenu}>
      {dropdownItems.map((item, index) => (
        <Menu.Item key={index}>
          <div
            onClick={(event) => {
              event.stopPropagation();
              router.push(item.path); // Navigate to the route
              setOpen(false); // Close the dropdown after clicking
            }}
            className={`${pathname === item.path ? styles.activeLink : ""}`} // Apply active class if the path matches
          >
            {item.label}
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img
          src="/navbar/Logo.svg"
          alt="Deep Net Soft Logo"
          className={styles.logo}
        />
        <div className={styles.logoText}>
          <span className={styles.logoText1}>
            DEEP <span>NET</span>
          </span>
          <span className={styles.logoText2}>SOFT</span>
        </div>
      </div>

      {/* Navigation links shown on larger screens */}
      <ul className={styles.navLinks}>
        {dropdownItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.path}
              className={`${pathname === item.path ? styles.activeLink : ""}`} // Apply active class if the path matches
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Dropdown for mobile view */}
      <Dropdown
        open={open}
        onOpenChange={handleOpenChange}
        trigger={["click"]}
        overlay={menu}
      >
        <Button
          className={styles.toggleButton}
          icon={<MenuOutlined />}
          size="large"
        />
      </Dropdown>
    </nav>
  );
};

export default Navbar;
