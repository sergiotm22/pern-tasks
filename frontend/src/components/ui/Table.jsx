export function Table({ children, className }) {
  return (
    <div className={`relative overflow-x-auto ${className}`}>
      {children}
    </div>
  );
}

export default Table;
