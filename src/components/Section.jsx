import PropTypes from "prop-types";

function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-12 sm:py-16 ${className}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
