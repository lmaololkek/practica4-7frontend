import React, { Component } from 'react'
import axios from 'axios'
import { Button,Modal } from 'react-bootstrap'

export class CreateUser extends Component {


    state = {
        users: [],
        username: '',
        showHide: false,
        userDelId: ''
    }

    handleModalShowHide(id) {
        this.setState({ userDelId: id})
        this.setState({ showHide: !this.state.showHide })
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: res.data });
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        })
        this.setState({ username: '' });
        this.getUsers();
    }

    deleteUser = async (id) => {
        this.handleModalShowHide()
        await axios.delete('http://localhost:4000/api/users/' + id)
        this.getUsers();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action"
                                    key={user._id}
                                    onDoubleClick={() => this.handleModalShowHide(user._id)}
                                >
                                    {user.username}
                                </li>)

                            )
                        }
                    </ul>
                </div>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Delete user?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={() => this.deleteUser(this.state.userDelId)}>
                        Yes
                    </Button>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        No
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

export default CreateUser
