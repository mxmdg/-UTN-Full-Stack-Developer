import Menu from './Menu'

const Header = (props)=> {
    
    return <header>
                <h2>NOGAR PAMOS COOP.</h2>
                <Menu selectForm={props.selectForm} />
        </header>
   }         

export default Header;