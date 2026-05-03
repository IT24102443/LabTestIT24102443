import axios from "axios";


const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

// Fetch all items
export const getItems = async () => {
  try {
    const response = await API.get("/items");
    return response.data;  
  } catch (error) {
    console.error("Error fetching items:", error);  
    throw error;  
  }
};


export const getItemById = async (id) => {
  try {
    const response = await API.get(`/items/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching item with ID ${id}:`, error);
    throw error;
  }
};


export const createItem = async (itemData) => {
  try {
    const response = await API.post("/items", itemData);
    return response.data;  
  } catch (error) {
    console.error("Error creating item:", error);  
    throw error;  
  }
};


export const updateItem = async (id, itemData) => {
  try {
    const response = await API.put(`/items/${id}`, itemData);
    return response.data;
  } catch (error) {
    console.error(`Error updating item with ID ${id}:`, error);
    throw error;
  }
};


export const deleteItem = async (id) => {
  try {
    const response = await API.delete(`/items/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting item with ID ${id}:`, error);
    throw error;
  }
};

export default API;