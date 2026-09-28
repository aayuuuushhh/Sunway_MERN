import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
    isDamage: false,
  });

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        const product = data.result || data;

        setFormData({
          name: product.name || "",
          quantity: product.quantity ?? "",
          price: product.price ?? "",
          isDamage: Boolean(product.isDamage),
        });
      } catch (error) {
        console.error("Error fetching product for update:", error);
      }
    };

    if (id) {
      getProduct();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios({
        url: `http://localhost:8000/product/${id}`,
        method: "PATCH",
        data: {
          ...formData,
          quantity: Number(formData.quantity),
          price: Number(formData.price),
        },
      });

      navigate("/read");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label htmlFor="quantity">Quantity: </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label htmlFor="price">Price: </label>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label htmlFor="isDamage">Is Damage: </label>
            <input
              type="checkbox"
              name="isDamage"
              id="isDamage"
              checked={formData.isDamage}
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={{ marginTop: "10px" }}>
          <button type="submit">Update</button>
        </div>
      </div>
    </form>
  );
};

export default UpdateForm;
