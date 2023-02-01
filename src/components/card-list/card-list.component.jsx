
import Card from "../card/card.component";
import './card-list.styles.css'


const CardList = ({ monsters }) => {
    // const { monsters } = props;
    return (

        // map() method will go through every monster in monsters array and will return the new monster array.
        <div className="card-list">
            {monsters.map((monster) => {
                return (
                    <Card monster={monster} />
                );
            })}
        </div>
    )
}

export default CardList;