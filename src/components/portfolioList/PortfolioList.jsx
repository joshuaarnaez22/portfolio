
import "./portfolioList.scss"
function PortfolioList({title,active,setActive, id}) {
    return (
        <li className={active ? "active" : ""} onClick={()=>{setActive(id)}}>
          {title}
        </li>
    )
}

export default PortfolioList
