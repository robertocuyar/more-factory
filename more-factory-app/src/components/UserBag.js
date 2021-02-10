import React from 'react';
import bagIcon from "../img/user_bag.png";

const UserBag = ()=> {

    return (
           <div>
               <img className={"user-bag-img"} src={bagIcon} alt=""/>
           </div>

    )
}

export default UserBag;