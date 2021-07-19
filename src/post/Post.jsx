import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://snowbrains.com/wp-content/uploads/2015/12/0013.jpg"
                alt="post" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem, ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>

            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magni asperiores praesentium quae illo vero,
                nostrum facilis. Illo, voluptatibus fugit. Saepe,
                numquam hic. Possimus mollitia ullam repudiandae
                dolorem ducimus! Ipsa, alias.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magni asperiores praesentium quae illo vero,
                nostrum facilis. Illo, voluptatibus fugit. Saepe,
                numquam hic. Possimus mollitia ullam repudiandae
                dolorem ducimus! Ipsa, alias.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magni asperiores praesentium quae illo vero,
                nostrum facilis. Illo, voluptatibus fugit. Saepe,
                numquam hic. Possimus mollitia ullam repudiandae
                dolorem ducimus! Ipsa, alias.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magni asperiores praesentium quae illo vero,
                nostrum facilis. Illo, voluptatibus fugit. Saepe,
                numquam hic. Possimus mollitia ullam repudiandae
                dolorem ducimus! Ipsa, alias.
            </p>
        </div>
    )
}
