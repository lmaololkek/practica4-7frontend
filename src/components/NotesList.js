import React, { Component } from 'react'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'

export class NotesList extends Component {

    state = {
        notes: [],
        showHide: false,
        noteDelId: ''
    }

    handleModalShowHide(id) {
        this.setState({ noteDelId: id })
        this.setState({ showHide: !this.state.showHide })
    }

    async componentDidMount() {
        this.getNotes();
    }

    deleteNote = async (id) => {
        this.handleModalShowHide()
        await axios.delete('http://localhost:4000/api/notes/' + id)
        this.getNotes();
    }

    async getNotes() {
        const res = await axios.get('http://localhost:4000/api/notes');
        this.setState({ notes: res.data })
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{note.title}</h5>
                                    <Link className="btn btn-secondary" to={"/edit/" + note._id}>
                                        Edit
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p>{note.content}</p>
                                    <p>{note.author}</p>
                                    <p>{format(note.date)}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.handleModalShowHide(note._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                        <Modal.Title>Delete note?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this note?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => this.deleteNote(this.state.noteDelId)}>
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

export default NotesList
