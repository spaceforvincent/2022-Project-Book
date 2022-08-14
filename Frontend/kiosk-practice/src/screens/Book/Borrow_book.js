import React from "react";
import {useStyles} from "../../styles";

function Borrow_book({
    cover,
    title,
    publish_date,
    genre,
}) {
    const styles = useStyles();
    return (
        <div>
            <img src={cover} alt={title}/>
            <div>
                <h2 className={styles.movie__title}>
                    {title}
                </h2>
                <h3>{publish_date}</h3>
                <ul>
                    {genre}
                </ul>
            </div>
        </div>
    );
}

export default Borrow_book;