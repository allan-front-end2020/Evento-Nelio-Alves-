import logo from '../../assets/img/logo.svg'
import "./style.css"

function Header() {
    return (
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="" />
            <h1>Dsmeta</h1>
            <p>
                Desenvolvido por Allan Tavares
                <a href="https://www.linkedin.com/in/allan-tavares-a02070206/"></a>
            </p>

        </div>
    </header>
    )
}
export default Header