"use client";
import React, { useState } from "react";
import axios from "axios";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

const AddTodo = () => {
  const { refresh } = useRouter();
  const [task, setTask] = useState({
    content: "",
  });
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleSubmit = async () => {
    console.log(task);
    setModalOpen(false);
    try {
      const response = await axios.post("http://127.0.0.1:8000/todos/", task);
      console.log("todo add successfully");
      setTask({ content: "" });
      refresh();
      return response;
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        ADD NEW TASK
        <AiOutlinePlus className="font-bold" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              onChange={(e) => setTask({ ...task, content: e.target.value })}
              type="text"
              placeholder="Type here"
              value={task.content}
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default AddTodo;
