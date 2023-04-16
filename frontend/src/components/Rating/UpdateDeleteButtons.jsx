import './UpdateDeleteButtons.scss'
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import { useEffect, useState } from "react";
import { deleteRating, getRatings } from '../../store/ratingsReducer';
// import UpdateCommentForm from "./UpdateCommentForm";
// import DeleteCommentForm from "./DeleteCommentForm";


function UpdateDeleteButtons ({review}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [updateModalShow, setUpdateShowModal] = useState(false);

    if (!sessionUser) return;
    if (review.user_id !== sessionUser.id) return;

    const handleDeleteButtonClick = (e) => {
        e.preventDefault();
        dispatch(deleteRating(review.id));
        setDeleteModalShow(false);
        dispatch(getRatings);
    }

    return (
        <div className="update-delete-buttons-container">
            <button className='update-button' onClick={() => setUpdateShowModal(true)}></button>
            {updateModalShow && (
                <Modal onClose={() => setUpdateShowModal(false)} size="update-delete">
                    {/* <UpdateCommentForm comment={comment} setUpdateShowModal={setUpdateShowModal} postId={postId}/> */}
                </Modal>
            )}
            
            <button className='delete-button' onClick={() => setDeleteModalShow(true)}></button>
            {deleteModalShow && (
                <Modal onClose={() => setDeleteModalShow(false)} size="update-delete">
                    <div className="comment-CRUD-form">
                        <h1 className="comment-form-header">Delete this review?</h1>
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
