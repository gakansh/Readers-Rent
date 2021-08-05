
import React from 'react';


const ListHandler = props => {




    return (
        <ui>{
            props.ob1.map ((mp) => {
                return (<li>{mp.text}</li>);
            })
        }
        </ui>
    );
};

export default ListHandler;