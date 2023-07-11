import "./card.css";
const card = (props) => {
    const value = "card " + props.className;
    return (
        <div className={value}>{props.children}</div>
    );
}
export default card;