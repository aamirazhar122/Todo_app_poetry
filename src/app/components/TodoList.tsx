"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";

const GetTodoList = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState({ edit: false, delete: false });
  const [editTodo, setEditTodo] = useState({ id: null, content: "" });

  // Get Todos
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://127.0.0.1:8000/todos/");
      setData(res.data);
    };
    fetchData();
  }, []);

  // Edit Todo
  const handleSubmitEditTodo = async (e: any, todo_id: any) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://127.0.0.1:8000/todo/${editTodo.id}`, {
        content: editTodo.content,
      });
      console.log("todo edited successfully");
      setModal({ ...modal, edit: false });
      window.location.reload();
      return res;
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  // Delete Todo
  const handleDeleteTodo = async (todo_id: any) => {
    try {
      const res = await axios.delete(`http://127.0.0.1:8000/todo/${todo_id}`);
      console.log("Todo deleted successfully");
      setModal({ ...modal, delete: false });
      window.location.reload(); // Refresh the page
      return res;
    } catch (error: any) {
      console.error("Delete error:", error.response?.data, error.message);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr key={item.id}>
              <td className="w-full">{item.content}</td>
              <td className="flex gap-x-5">
                <FiEdit
                  cursor="pointer"
                  className="text-blue-500"
                  size={20}
                  onClick={() => {
                    setModal({ ...modal, edit: true });
                    setEditTodo({ id: item.id, content: item.content });
                  }}
                />
                <FiTrash2
                  cursor="pointer"
                  className="text-red-500"
                  size={20}
                  onClick={() => {
                    setModal({ ...modal, delete: true });
                    setEditTodo({ id: item.id, content: item.content });
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      <Modal
        modalOpen={modal.edit}
        setModalOpen={() => setModal({ ...modal, edit: false })}
      >
        <form onSubmit={(e) => handleSubmitEditTodo(e, editTodo.id)}>
          <h3 className="font-bold text-lg">Edit task</h3>
          <div className="modal-action">
            <input
              onChange={(e) =>
                setEditTodo({ ...editTodo, content: e.target.value })
              }
              type="text"
              placeholder="Type here"
              value={editTodo.content}
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Modal */}
      <Modal
        modalOpen={modal.delete}
        setModalOpen={() => setModal({ ...modal, delete: false })}
      >
        <h3 className="text-lg">Are you sure want to delete?</h3>
        <div className="modal-action">
          <button onClick={() => handleDeleteTodo(editTodo.id)} className="btn">
            Yes
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default GetTodoList;
