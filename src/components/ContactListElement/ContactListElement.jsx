import { useContext } from 'react';

import { MyContext } from 'App';
import css from "./ContactListElement.module.css"

export const ContactListElement = ({ data: { id, name, number }}) => {
        const context = useContext(MyContext);
  return (
        <li className={css.item}>
                <span className={css.span}>{name}</span>
                <span className={css.span}>{number}</span>
                <button id ={id} onClick={()=> context.deleteContact(id)} className={css.button} type="button">Delete</button>
        </li>
        )
}
