import React from 'react';
import css from './Statistics.module.css';
import PropTypes from "prop-types";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <li className={css.section__listItem}>
          <p>Good: {good}</p>
        </li>
        <li className={css.section__listItem}>
          <p>Neutral: {neutral}</p>
        </li>
        <li className={css.section__listItem}>
          <p>Bad: {bad}</p>
        </li>
        <li className={css.section__listItem}>
          <p>Total: {total}</p>
        </li>
        <li className={css.section__listItem}>
          <p>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}