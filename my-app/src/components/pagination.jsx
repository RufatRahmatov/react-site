import React from "react";
import styles from "./pagination.scss";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        &lt;
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={currentPage === index + 1 ? styles.active : ""}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;

//
