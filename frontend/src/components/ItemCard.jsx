import { Link } from "react-router-dom";

function ItemCard({ item, onDelete }) {
  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      onDelete(item._id);  // Call the onDelete function passed from parent
    }
  };

  return (
    <div className="card">
      <img
        src={item.imageUrl || "https://via.placeholder.com/400x220?text=Item"}
        alt={item.name}
        className="card-image"
      />
      <h3>{item.name}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p><strong>Stock Quantity:</strong> {item.quantity}</p>
      <p>{item.description}</p>

      <div className="card-actions">
        {/* Link to edit item */}
        <Link className="btn secondary" to={`/edit-item/${item._id}`}>Edit</Link>

        {/* Delete item button */}
        <button className="btn danger" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;