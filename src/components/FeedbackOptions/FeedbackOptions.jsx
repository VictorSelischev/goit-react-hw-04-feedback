import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.section__buttonList}>
      {options.map(option => (
        <li key={option} className={css.section__buttonListItem}>
          <button className={css.section__button} onClick={onLeaveFeedback}>
            {option.toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
