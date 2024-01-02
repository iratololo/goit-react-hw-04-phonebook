import { useContext } from 'react';

import { MyContext } from 'App';
import { ContactListElement } from "../ContactListElement/ContactListElement"

export const ContactList = () => {
        const context = useContext(MyContext);
        return (
            <ul>
                {context.foundContact.map((item) => {
                    return <ContactListElement key={item.id} data={item} />
                })}
            </ul>
        );
}
