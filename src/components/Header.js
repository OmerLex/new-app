
const Header = (props) => {
    return(
        <header>
            <h1 style={headingStyle}>{props.title}</h1>
        </header>
    );
}

const headingStyle = {color:'red', backgroundColor: 'black'}

export default Header;