import React from "react";

export const MobileMenu = () => {
  return (
    <div className="hamburger-menu">
      <a href="/brand/jordan">AIR JORDAN</a>
      <a href="/brand/nike-dunk"> NIKE DUNK</a>
      <a href="/brand/new-balance"> NEW BALANCE</a>
      <a className="hamburger-menu__contact" href="/contact">
        KONTAKT
      </a>
    </div>
  );
};
