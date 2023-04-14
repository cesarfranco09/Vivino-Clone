import './UpdateDeleteButtons.scss'
import { useSelector } from "react-redux";
// import { Modal } from "../../context/Modal";
import { useState } from "react";
// import UpdateCommentForm from "./UpdateCommentForm";
// import DeleteCommentForm from "./DeleteCommentForm";
// import TrashButton from "../../../assets/img/trash.svg";
// import EditButton from "../../assets/img/edit.svg";


function UpdateDeleteButtons ({review}) {
    const sessionUser = useSelector(state => state.session.user);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [updateModalShow, setUpdateShowModal] = useState(false);

    if (!sessionUser) return;
    if (review.user_id !== sessionUser.id) return;

    return (
        <div className="update-delete-buttons-container">

            <button className='update-button' onClick={() => setUpdateShowModal(true)}>
            </button>
            {/* {updateModalShow && (
                <Modal onClose={() => setUpdateShowModal(false)} size="update-delete">
                    <UpdateCommentForm comment={comment} setUpdateShowModal={setUpdateShowModal} postId={postId}/>
                </Modal>
                )} */}
            
            <button className='delete-button' onClick={() => setDeleteModalShow(true)}>
            </button>
            {/* {deleteModalShow && (
                <Modal onClose={() => setDeleteModalShow(false)} size="update-delete">
                    <DeleteCommentForm comment={comment} setDeleteModalShow={setDeleteModalShow} postId={postId}/>
                </Modal>
                )} */}

        </div>
        )
}

export default UpdateDeleteButtons;
