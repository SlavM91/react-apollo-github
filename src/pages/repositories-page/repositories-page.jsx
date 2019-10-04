import React from 'react';
import { UserRepositoriesListContainer } from '@containers/user-repositories-list'

const divStyle = {
    width: '400px',
    display: 'inline-block',
    verticalAlign: 'top'
};

const wrapperStyle = {
    textAlign: 'center'
};

export class RepositoriesPage extends React.Component {
    render() {
        return (
            <div style={wrapperStyle}>
                <h1>Github repositories by username</h1>
                <div>
                    <div style={divStyle}>
                        <UserRepositoriesListContainer />
                    </div>
                </div>
            </div>
        );
    }
}
