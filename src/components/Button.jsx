const Button = ({ className, children, variant }) => {
  const variants = {
    outline:
      "px-5 py-3 border border-yellow text-yellow hover:bg-yellow hover:text-white",
    default:
      "px-5 py-3 text-white bg-yellow hover:bg-yellow-foreground hover:text-white/50 focus:outline-none",
  };

  const variantStyles = variant && variants[variant] ? variants[variant] : "";

  const buttonClasses = className
    ? ` ${variantStyles} ${className}`
    : ` ${variantStyles}`;
  return <button className={buttonClasses}>{children}</button>;
};

export default Button;
