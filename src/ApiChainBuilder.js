import React, { useState } from "react";

function ApiChainBuilder({ onApiSubmit }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onApiSubmit({ title, body });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Body</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
                Submit
            </button>
        </form>
    );
}

export default ApiChainBuilder;
