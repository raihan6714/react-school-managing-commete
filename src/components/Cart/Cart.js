import React from 'react';
import List from '../List/List';

const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props;

    let total = 0;
    let totalMembers = 0;
    let listMembers = [];
    for (const member of cart) {
        if (!member.quantity) {
            member.quantity = 1;
        }
        total = total + member.Salary * member.quantity;
        totalMembers = totalMembers + member.quantity;
        listMembers.push(member.Name);
    }
    return (
        <div>
            <div className="card" style={{ "width": "18rem" }}>
                <ul className="list-group list-group-flush">
                    {
                        listMembers.map(listMember => <List key={listMember} Name={listMember}></List>)
                    }
                </ul>
            </div>
            <h2>Total: {total}</h2>
        </div>
    );
};

export default Cart;