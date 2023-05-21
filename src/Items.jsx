import SingleItem from "./SingleItem"

const Items = ({ items }) => {
    return (
        <section className="items">
            {items.map(item => <SingleItem key={item.id} item={item} />)}
        </section>
    )
}
export default Items