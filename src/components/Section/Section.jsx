// import { Component } from 'react';
import css from './Section.module.css';
import PropTypes from "prop-types";

const Section = ({title, children}) => {
  return (
    <div className={css.section}>
      <h2 className={css.section__title}>{title}</h2>
      {children}
    </div>
  );
};
// class Section extends Component {
//   render() {
//     (<div className={css.section}>
//       <h2 className={css.section__title}>{title}</h2>
//       {children}
//     </div>);
//   }
// }

export { Section };

Section.propTypes = {
  title: PropTypes.string.isRequired,
}