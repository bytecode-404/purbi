import PropTypes from "prop-types";

function CardBox({ title, children, className = "", titleClass = "" }) {
  return (
    <div className={`wire-box ${className}`}>
      {title && (
        <div className={`mb-3 section-title ${titleClass}`}>{title}</div>
      )}
      {children}
    </div>
  );
}

CardBox.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  titleClass: PropTypes.string,
};

export default CardBox;
