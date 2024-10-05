import React, { useState } from "react";

function ApiDisplay({getUsers, getComments, userData, postData, commentsData, loading, error }) {
    const [postId, setpostId] = useState(0);
    const handleclick = (e)=>{
        e.preventDefault();
        getComments(postId)
    }
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            {loading && <p className="text-blue-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <button onClick={getUsers}>
                GetUsers
            </button>
            {userData.length > 0 && (
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Users List</h2>
                    <ul>
                        {userData.map((user) => (
                            <li key={user.id}>
                                {user.id} {user.name} ({user.email})
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {postData && (
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Created Post</h2>
                    <p>
                        <strong>Title:</strong> {postData.title}
                    </p>
                    <p>
                        <strong>Body:</strong> {postData.body}
                    </p>
                    
                </div>
            )}
            <div>
            <input
                    type="number"
                    value={postId}
                    onChange={(e) => setpostId(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                    placeholder="Enter post id"
                />
                <button onClick={handleclick}>
                    submit
                </button>
            </div>
            {commentsData.length > 0 && (
                <div>
                    <h2 className="text-xl font-semibold">Comments on Post</h2>
                    <ul>
                        {commentsData.map((comment) => (
                            <li key={comment.id}>{comment.body}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ApiDisplay;
