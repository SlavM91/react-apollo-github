import React from 'react';
import { connect } from 'react-redux'
import { Button } from '@components/button'
import { InputWithLabel, SelectWithLabel } from '@hoc/withLabel'
import { studentGrade } from '@constants'
import { addStudent } from '@actions'
import { uid } from '@utils'


export class UserRepositoriesListView extends React.PureComponent{
    state={
        userName: '',
        isButtonDisabled: true
    };

    handleFindUser = () => {
        const { name, secondName, grade } = this.state;
        const student = {name, secondName, grade, id: uid()};
        this.props.dispatch(addStudent(student));
        this.setState({
            userName: '',
            isButtonDisabled: true
        })
    };

    handleChangeInput = (event) => {
        const { id, value } = event.target;
        this.setState((prevState) => {
            const updatedState = { ...prevState, [id]: value };
            const isButtonDisabled = updatedState.userName === '';
            return { ...updatedState, isButtonDisabled }
        })
    };

    render() {
        const { userName } = this.state;
        return (
            <React.Fragment>
                <InputWithLabel
                    labelText="Username"
                    name="userName"
                    value={userName}
                    placeholder="Enter name"
                    onChange={this.handleChangeInput}
                />
                <Button
                    buttonText="Find users"
                    onClick={this.handleFindUser}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (store) => store;

export const UserRepositoriesListContainer = connect(mapStateToProps)(UserRepositoriesListView);