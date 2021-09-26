import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import Members from '../Members/Members';

const Main = () => {
    const [members, setMembers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, []);

    const handleToCart = (member) => {
        // console.log('clicked');
        const newCart = [...cart, member];
        setCart(newCart);
    }

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-9 border-end">
                    <h2 className="text-muted">Total Members: {members.length}</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            members.map(member => <Members
                                key={member.key}
                                member={member}
                                handleToCart={handleToCart}
                            ></Members>)
                        }

                    </div>
                </div>
                <div className="col-md-3">
                    <h2 className="text-muted">Selected person:{cart.length}</h2>
                    <Cart
                        cart={cart}
                    >
                    </Cart>
                </div>
            </div>
        </div >
    );
};

export default Main;