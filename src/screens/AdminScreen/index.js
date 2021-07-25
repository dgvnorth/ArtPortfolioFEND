import React, {useEffect} from 'react'

// Assets
import classes from "./AdminScreen.module.css"

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { CREATE_IMAGE_RESET } from '../../store/constants/imageConstants';
import { createImage, deleteImage, getImages  } from '../../store/actions/imageActions';
import { logout } from '../../store/actions/userActions'


const AdminScreen = (props) => {
    const { history } = props
    const dispatch = useDispatch()

    // Check user login
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin

    // Image State
    const imageCreate = useSelector((state) => state.imageCreate)
    const {success: successcreateImage, image: createdImage} = imageCreate

    const imageList = useSelector((state) => state.imageList)
    const {images: gallery} = imageList

    const imageDelete = useSelector((state) => state.imageDelete)
    const {loading: loadingImageDelete, success: successImageDelete} = imageDelete

    const createImageHandler = (e) => {
        e.preventDefault()
        dispatch(createImage())
    }

    const logoutHandler = (e) => {
        e.preventDefault()
        dispatch(logout())
        history.push('/login')
    }

    const deleteImageHandler = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteImage(id))
        }
    }

    const editImageHandler = (id) => {
        if (id) {
            history.push(`/admin/image/${id}/edit`)
        }
    }

    useEffect(() => {
        dispatch({type: CREATE_IMAGE_RESET})
        //check for user Info
        if (!userInfo || !userInfo.isAdmin) {
            history.push('/login')
        }

        dispatch(getImages(null, 100))

        if (successcreateImage) {
            history.push(`/admin/image/${createdImage._id}/edit`)
        }
    }, [userInfo, dispatch, history, successcreateImage, createdImage, successImageDelete])

    return (
        <div className={classes.screen_container}>
            <div className={classes.controls_container}>
                <h1>Wellcome {userInfo.name}</h1>
                <div>
                   <button onClick={createImageHandler}>Add an image</button> 
                   <button onClick={logoutHandler}>Logout</button>
                </div>
            </div>   
            <div className={classes.gallery_container}>
                {!gallery ? (
                    <div>...loading...</div>
                ) : (
                    gallery.map((item, idx) => (
                        <div key={idx} className={classes.imageDetail_container}>
                            <p>{item.alt}</p>
                            <img src={item.src[0]} alt={item.alt}/>
                            <button onClick={() => deleteImageHandler(item._id)}>Delete</button>
                            <button onClick={() => editImageHandler(item._id)}>Edit</button>
                        </div>
                    ))
                )}
                {loadingImageDelete && <div>...loading...</div>}
            </div>
        </div>
    )
}

export default AdminScreen
