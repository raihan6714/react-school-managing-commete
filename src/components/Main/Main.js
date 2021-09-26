import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Members from '../Members/Members';

const Main = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, []);
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-9">
                    <h2 className="text-muted">Total Members: {members.length}</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            members.map(member => <Members
                                member={member}
                            ></Members>)
                        }

                    </div>
                </div>
                <div className="col-md-3">
                    <h2 className="text-muted">Selected person:</h2>
                </div>
            </div>
        </div>
    );
};

export default Main;