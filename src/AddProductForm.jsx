import React, { useState } from 'react';

function AddProductForm() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (event) => {
        setId(event.target.value),
        setName(event.target.value),
        setPrice(event.target.value),
        setDescription(event.target.value)
    };

  return (
    <div>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label>
                Id:
                <input type="number" value={id} onChange={handleChange} />
            </label>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={handleChange} />
            </label>
            <label>
                Description:
                <input type="text" value={description} onChange={handleChange} />
            </label>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;