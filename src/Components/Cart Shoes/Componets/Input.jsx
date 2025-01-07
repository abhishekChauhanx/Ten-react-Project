const Input = ({handleRadioChange , value,title , name ,color}) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleRadioChange} value={value} type="radio" name={name} />
      <span className="checkmark" style={{background:color}}></span>{title}
    </label>
  );
};

export default Input;
