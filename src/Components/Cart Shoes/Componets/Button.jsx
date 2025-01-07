

const Button = ({onclickHandle,value ,title}) => {
  return (
    <button onClick={onclickHandle} value={value} className="btns">
      {title}
    </button>
  )
}

export default Button
