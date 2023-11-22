import {Component} from "react";
import './card.styles.css';

const Card = ({minion}) => {
  const {id, name, email} = minion
    return (
     
          <div className="card-container" key={id}>
            {/* <img alt={`minion ${minion.name}`} src={`https://i.ibb.co/GCRdgmM/Minions-1.png`}/> */}
            {/* <img alt={`minion ${minion.name}`} src={`https://robohash.org/${minion.id}1?set=set2`}/> */}
            <img
              alt={`minion ${name}`}
              src={`https://thelmaakpata.com.ng/React-Minions/${id}.png`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        )}
export default Card;
