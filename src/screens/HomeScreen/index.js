import React, { useEffect} from 'react';
import {Link} from 'react-router-dom';

//Assets
import classes from "./HomeScreen.module.css"
import trail from "../../assets/Icons/trail.jpg"
import skyline from "../../assets/Icons/skyline.jpg"

//Redux
import { useSelector, useDispatch } from "react-redux"
import {getBlogs} from "../../store/actions/blogActions"

const HomeScreen = () => {

    const dispatch = useDispatch()

    const blogList = useSelector((state) => state.blogList)
    const { loading: loadingBlogs, blogs } = blogList

    useEffect(() => {
        dispatch(getBlogs(null, 3))
    }, [dispatch])
    return (
    <div div className={classes.screen_container}>
        <div className={classes.slide}>
            <div className={classes.greySquare}>
                <h1 className={classes.title}>David</h1>
                <h1 className={classes.title}>Art</h1>
            </div>
            <img className={classes.slide_image} src={trail} alt="trail" />
        </div>
        <div className={classes.blogSlide}>
            <img className={classes.blogSlide_image} src={skyline} alt="skyline" />
            <div className={classes.blogs_container}>
                {loadingBlogs || !blogs ? <div>...loading...</div> : blogs.map((post, idx) => ( 
                    <div className={classes.blog_card} key={idx}>
                        {post.image ? (
                            <> 
                            <div className={classes.image_clipper}>
                                <img className={classes.blog_image} src={post.image} alt={post.image} />
                            </div>
                            <p>{post.description}</p>
                            </>)
                            : (<div>...loading...</div>
                            )}
                        </div>
                ))
            }
            </div>
            <Link className={classes.link2} to="/blog"> - More </Link>
        </div>
    </div>
    )
}

export default HomeScreen;
