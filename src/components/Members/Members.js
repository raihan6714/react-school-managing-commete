import React from 'react';

const Members = (props) => {
    console.log(props.member);
    const { Name, Age, Profession, Salary, img } = props.member;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-muted">Name: {Name}</h5>
                    <h6 className="card-text text-muted">Age:<small> {Age}</small></h6>
                    <h6 className="card-text text-muted">Profession:<small> {Profession}</small></h6>
                    <h6 className="card-text text-muted">Salary:<small> {Salary}</small></h6>
                    <button className="btn btn-success"><i class="fas fa-cart-plus"></i> Add To Cart</button>
                </div>
                <div className="card-footer ">
                    <h2 style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fab fa-instagram-square"></i>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Members;