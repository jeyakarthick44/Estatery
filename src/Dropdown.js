export default function Dropdown({ options, onChange, value, label }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="dropdown_component">
      <p>{label}</p>
      <select onChange={handleChange} value={value} className="dropdown">
        {options.map((option) => (
          <option value={option.value} key={option.value} className="slide">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
