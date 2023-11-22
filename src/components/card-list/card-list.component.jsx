import {Component} from "react";
import './card-list.styles.css';
import Card from "../card/card.component";

const CardList =({minions}) => {
    return(
        <div className="card-list">
        {minions.map((minion) => {
            return(
                <Card minion={minion} />
            );
        })}
        </div>
    );
}
export default CardList;