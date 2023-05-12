import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="App">
    <li className="App-header">
      <a
        href="#about"
        onClick={() => handlePageChange('About')}
        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
      >
        About
      </a>
    </li>
    <li className="App-header">
      <a
        href="#Projects"
        onClick={() => handlePageChange('Projects')}
        // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
      >
        Projects
      </a>
    </li>


    <li className="App-header">
      <a
        href="#Projects"
        onClick={() => handlePageChange('contacts')}
        // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'contacts' ? 'nav-link active' : 'nav-link'}
      >
        contacts
      </a>
    </li>


  </ul>
  
  );
}

export default NavTabs;
