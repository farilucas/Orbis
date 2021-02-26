import './newPost.css'
import { useState } from 'react'

export default function AddNewPost(props){
    const [newPost, setNewPost] = useState({
        id: Math.random().toString(),
        title: '',
        img: '',
        desc: ''
    })

    const handleNewPost = (event) => setNewPost({
        ...newPost,
        [event.currentTarget.name]: event.currentTarget.value
    })
    return (
        <div id="myModal" className="modal" style={ props.show ? {display: "block" }: {display: "none" }}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={() => props.setShow(false)}>&times;</span>
                    <h2>Add Post</h2>
                </div>
                <div className="modal-body">
                    <legend>Titulo: </legend>
                    <input onChange={handleNewPost} className="modal-btn" type="text" name="title" placeholder="Titulo"/>
                    <legend>Link Imagen: </legend>
                    <input onChange={handleNewPost} className="modal-btn" type="text" name="img" placeholder="Link Imagen"/>
                    <legend>Descripcion: </legend>
                    <input onChange={handleNewPost} className="modal-btn" type="text" name="desc" placeholder="Descripcion"/>
                    <button className="submit" onClick={() => {
                        props.AddNewPlace(newPost)
                        props.setShow(false)}}
                    >
                        Publicar
                    </button>
                </div>
                <div className="modal-footer">
                    <h2 className="modal-footer-text">Orbis</h2>
                </div>
            </div>
        </div>
    );
}