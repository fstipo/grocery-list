const SingleItem = ({ item, removeItem, editItem }) => {
    const checkboxStyle = item.completed && "line-through";

    return (
        <div className="single-item">
            <input type="checkbox" name="" id="" checked={item.completed} onChange={() => editItem(item.id)} />
            <p style={{ textTransform: "capitalize", textDecoration: checkboxStyle }}>{item.name}</p>
            <button className="btn remove-btn" type="button" onClick={() => removeItem(item.id)}>delete</button>
        </div >
    )
}
export default SingleItem