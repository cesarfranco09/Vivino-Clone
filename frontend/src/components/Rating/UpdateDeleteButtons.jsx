import './UpdateDeleteButtons.scss'
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import { useEffect, useState } from "react";
import { updateRating, deleteRating, getRatings } from '../../store/ratingsReducer';
// import UpdateCommentForm from "./UpdateCommentForm";
// import DeleteCommentForm from "./DeleteCommentForm";


function UpdateDeleteButtons ({review}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [updateModalShow, setUpdateShowModal] = useState(false);
    const [rating, setRating] = useState(review.rating);
    const [body, setBody] = useState(review.body);
    const [errors, setErrors] = useState([]);

    if (!sessionUser) return;
    if (review.user_id !== sessionUser.id) return;

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const scrollPosition = window.scrollY;

        if (!body) {
            setErrors(["Please fill out all fields"]);
        } else {
            let newParam = {
                ...review,
                rating: rating,
                body: body
            }
            dispatch(updateRating(newParam))
            setUpdateShowModal(false);
            // dispatch(getRatings);
            window.location.reload();
            window.scrollTo(0, scrollPosition);
        }
    }

    const handleDeleteButtonClick = (e) => {
        e.preventDefault();
        dispatch(deleteRating(review.id));
        setDeleteModalShow(false);
        // dispatch(getRatings);
        window.location.reload();
    }

    return (
        <div className="update-delete-buttons-container">
            <button className='update-button' onClick={() => setUpdateShowModal(true)}></button>
            {updateModalShow && (
                <Modal onClose={() => setUpdateShowModal(false)} size="update-delete">
                    <div className="review-update-form">
                        <h1>Edit review</h1>
                        <form className="comment-CRUD-form" onSubmit={(handleUpdateSubmit)}>
                            <ul>
                                {errors.map(error => <li key={error} className="error-messages">{error}</li>)}
                            </ul>
                            <label>
                                <input type="textarea" value={body} onChange={(e) => {setBody(e.target.value)}} ></input>
                            </label>
                            <br></br>
                            <button className="modal-button" >Submit</button>
                        </form>
                    </div>
                </Modal>
            )}
            
            <button className='delete-button' onClick={() => setDeleteModalShow(true)}></button>
            {deleteModalShow && (
                <Modal onClose={() => setDeleteModalShow(false)} size="update-delete">
                    <div className="review-delete-form">
                        <h1>Delete this review?</h1>
                        <div className="options-container">
                            <button className="modal-button" onClick={(handleDeleteButtonClick)}>Delete</button>
                            <br/>
                            <button className="alternate-button" onClick={() => {setDeleteModalShow(false)}}>Cancel</button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default UpdateDeleteButtons;
