const SingleItem = ({ item }) => {
    return (
        <div className="single-item">
            <input type="checkbox" name="" id="" />
            <p>{item.name}</p>
            <button className="btn remove-btn">delete</button>
        </div>
    )
}
export default SingleItem