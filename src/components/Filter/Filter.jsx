import { useContext } from 'react';

import { MyContext } from 'App';
import css from './Filter.module.css';

export const Filter = () => {
     const context = useContext(MyContext);
  return (
            <input onChange={({target:{value}}) => {context.changeFilter(value)}} className={css.input} type="text" name="filter" value={context.filter} placeholder='Find contacts by name'/>
        );
}
