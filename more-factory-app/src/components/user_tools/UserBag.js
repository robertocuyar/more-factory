import React from 'react';

const UserBag = ({bag}) => {

    return (
        <div>
            <img className={"user-bag-img"} src={bag} alt="Beginner Bag"/>
        </div>

    )
}

export default UserBag;