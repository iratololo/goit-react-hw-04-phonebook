import { useContext, useState } from 'react';

import { MyContext } from 'App';

import css from "./ContactForm.module.css"

export const ContactForm = () => {
    const context = useContext(MyContext);

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handlerOnChange = ({ target: { name, value } }) => {
        if (name === "name") {
           setName(value) 
        }
        if (name === "number") {
           setNumber(value) 
        }
    }

    const handlerOnSubmit = (e) => {
        e.preventDefault();
        context.createContact({name,number})
        setName('');
        setNumber(''); 
    }

  return (
            <form onSubmit={handlerOnSubmit} className={css.form}>
                <div className={css.container}>
                    <div className={css.item}>
                        <input onChange={handlerOnChange} className={css.input} id="name" type="text" name="name" value={name} required />
                        <label className={css.label} htmlFor="name">Name</label>
                    </div>
                    <div className={css.item}>
                        <input onChange={handlerOnChange} className={css.input} id="tel" type="tel" name="number" value={number} required />
                        <label className={css.label} htmlFor="tel">Number</label>
                    </div>
                </div>
                <button className={css.button} type='submit'>Add contact</button>
            </form>
            
        );
}
