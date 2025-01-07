import Button from "../Componets/Button"
import "./Recommended.css"

const Recommended = ({handleBtnsChange}) => {
  return (
    <>
      <div>
        <h2 className="recommneded-title">Recommended</h2>
        <div className="recommneded-flex">
   
         <Button onclickHandle={handleBtnsChange} value="" title="All Products"/>
         <Button onclickHandle={handleBtnsChange} value="Nike" title="Nike"/>
         <Button onclickHandle={handleBtnsChange} value="Adidas" title="Adidas"/>
         <Button onclickHandle={handleBtnsChange} value="Puma" title="Puma"/>
         <Button onclickHandle={handleBtnsChange} value="Vans" title="Vans"/>
        </div>
      </div>
    </>
  )
}

export default Recommended