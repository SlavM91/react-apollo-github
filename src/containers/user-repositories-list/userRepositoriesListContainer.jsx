import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Button } from '@components/button'
import { InputWithLabel } from '@hoc/withLabel'
import { login } from '@utils'

let TOKEN = null;

export class UserRepositoriesListContainer extends React.PureComponent{
    state={
        queryString: '',
        isButtonDisabled: true
    };

    componentDidMount () {
        if (username === 'xxx') {
            throw new Error('Please create a config.js your username and password.')
        }
        login(username, password).then(token => {
            TOKEN = token;
            debugger
            this.setState({ login: true })
        });
    }

    handleFindUser = () => {
        const { name, secondName, grade } = this.state;
        this.setState({
            queryString: '',
            isButtonDisabled: true
        })
    };

    handleChangeInput = (event) => {
        const { id, value } = event.target;
        this.setState((prevState) => {
            const updatedState = { ...prevState, [id]: value };
            const isButtonDisabled = updatedState.queryString === '';
            return { ...updatedState, isButtonDisabled }
        })
    };

    render() {
        // const { queryString } = this.state;
        const queryString = 'react';
        debugger
        return (
            <React.Fragment>
                <InputWithLabel
                    labelText="Username"
                    name="queryString"
                    value={this.state.queryString}
                    placeholder="Enter name"
                    onChange={this.handleChangeInput}
                />
                <Button
                    buttonText="Find users"
                    onClick={this.handleFindUser}
                />
                <Query
                    variables={{queryString}}
                    query={gql`
                      query listUser($queryString: String!) {
                      search(query: $queryString, type: REPOSITORY, first: 10) {
                        repositoriesCount: repositoryCount
                        repositories: edges {
                          node {
                            ... on Repository {
                              id
                              name
                              owner {
                                avatarUrl
                                login
                              }
                            }
                          }
                        }
                      }
                    }
                    `}
                >
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;
                        const { repositoriesCount, repositories } = data.search;
                        return (
                            <ul>
                                {
                                    repositories.map((rep) => {
                                            const { avatarUrl, login } = rep.node.owner;
                                            return (
                                                <li key={rep.node.id}>
                                                    <span>name-{rep.node.name}</span>
                                                    <span>login-{login}</span>
                                                    <img src={avatarUrl} alt=""/>
                                                </li>
                                            )
                                        }
                                    )
                                }
                                <li>repositories count: {repositoriesCount}</li>
                            </ul>
                        );
                    }}
                </Query>
            </React.Fragment>
        )
    }
}
