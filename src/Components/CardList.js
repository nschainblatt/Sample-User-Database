import React from "react";
import Card from './Card';

const CardList = ({ filteredSearch }) => {
    if (true) {
        throw new Error('NOOO!');
    }

    return (
        <div className='cardList'>
            {
                filteredSearch.map((user, i) => {
                    return (
                        <Card 
                        key={i}
                        id={filteredSearch[i].id}
                        name={filteredSearch[i].name}
                        email={filteredSearch[i].email}
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList;