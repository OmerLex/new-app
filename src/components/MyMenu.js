import "./MenuItems.css";

let MenuItems = (props) => {
    return(
        <li>{props.info}</li>
    );
}

function MyMenu(){
    return(
        <ul>
            <MenuItems info="Home" />
            <MenuItems info="About" />
            <MenuItems info="Products" />


        </ul>
    );
}

export default MyMenu;