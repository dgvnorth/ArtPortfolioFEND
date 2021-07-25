import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom'

// Assets
import classes from "../AdminScreen.module.css"

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { createBlog, deleteBlog, getBlogs } from '../../../store/actions/blogActions'

import { CREATE_BLOG_RESET } from '../../../store/constants/blogConstants'

const BlogSection = (props) => {
    const {history} = props
    const dispatch = useDispatch()

    const blogCreate = useSelector((state) => state.blogCreate)
    const {success: successCreateBlog, blog: createdBlog } = blogCreate

    const blogList = useSelector((state) => state.blogList)
    const {loading: loadingBlogs, blogs } = blogList

    const blogDelete = useSelector((state) => state.blogDelete)
    const {success: successBlogDelete } = blogDelete

    return (
        <div>
            
        </div>
    )
}

export default BlogSection
