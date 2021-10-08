import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import "./menubar.scss"
function Menubar({menuOpen,setMenuOpen}) {
    return (
        <div className={"menubar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left-widgets">
                    <a href="#intro" className="logo">Logo</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon"/>
                        <span>09053132911</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon"/>
                        <span>joshuaarnaez@gmail.com</span>
                    </div>
                </div>
                <div className="right-widgets">
                <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Menubar
