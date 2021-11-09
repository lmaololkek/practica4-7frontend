import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function CreateNote(props) {

    let { id } = useParams();

    const [users, setUsers] = useState([]);
    const [userSelected, setUserSelected] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState(new Date());
    const [editing, setEditing] = useState(false);
    const [_id, set_id] = useState('');

    useEffect(async () => {
        const res = await axios.get('https://practica4-7backend.herokuapp.com/api/users');
        setUsers(res.data.map(user => user.username));
        setUserSelected(res.data[0].username);
        if (id) {
            const res = await axios.get('https://practica4-7backend.herokuapp.com/api/notes/'+id);
            setTitle(res.data.title);
            setContent(res.data.content);
            setDate(new Date(res.data.date));
            setUserSelected(res.data.author);
            setEditing(true);
            set_id(id);
        }
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            title: title,
            content: content,
            date: date,
            author: userSelected
        };
        if (editing) {
            await axios.put('https://practica4-7backend.herokuapp.com/api/notes/' + _id, newNote)
        } else {
            await axios.post('https://practica4-7backend.herokuapp.com/api/notes/', newNote);
        }

        window.location.href = '/practica4-7frontend/';
    }

    const onInputChangeUser = e => {
        setUserSelected(e.target.value);
    }

    const onInputChangeTitle = e => {
        console.log(e.target.value);
        setTitle(e.target.value);
    }

    const onInputChangeContent = e => {
        setContent(e.target.value);
    }

    const onChangeDate = date => {
        setDate(date);
    }

    return (
        <div className="col-md-6 offset-md-3">
            <div className="card card-body">
                <h4>Create a Note</h4>

                <div className="form-group">
                    <select
                        className="form-control"
                        name="userSelected"
                        onChange={onInputChangeUser}
                        value={userSelected}
                    >
                        {
                            users.map(user =>
                                <option key={user} value={user}>
                                    {user}
                                </option>)
                        }
                    </select>
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        name="title"
                        onChange={onInputChangeTitle}
                        value={title}
                        required
                    />
                </div>

                <div className="form-group">
                    <textarea
                        name="content"
                        className="form-control"
                        placeholder="Content"
                        onChange={onInputChangeContent}
                        value={content}
                        required>
                    </textarea>
                </div>

                <div className="form-group">
                    <DatePicker
                        className="form-control"
                        selected={date}
                        onChange={onChangeDate}
                    />
                </div>

                <form onSubmit={onSubmit}>
                    <button type="submit" className="btn btn-primary">
                        Save Note
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateNote