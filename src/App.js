import React, { useState } from "react";
import ApiChainBuilder from "./ApiChainBuilder";
import ApiDisplay from "./ApiDisplay";
import axios from "axios";
function App() {
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState(null);
  const [commentsData, setCommentsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const getUsers = async () => {
    setLoading(true);
    setError("");
    try {
      // Step 1: Get Users
      const usersResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
      const users = usersResponse.data;
      setUserData(users);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  const getComments = async (postId) => {
    setLoading(true);
    setError("");
    try{
            // Step 3: Get Comments for the created post
            const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            setCommentsData(commentsResponse.data);
    }catch (err) {
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
  }
  const handleApiChain = async (postBody) => {
    setLoading(true);
    setError("");
    try {
      // Step 2: Create Post (Using the first user)
      const postResponse = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: postBody.title,
        body: postBody.body,
        userId: postBody.userId,
      });
      const post = postResponse.data;
      setPostData(post);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-center bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">API Chain Dashboard</h1>
      <div className="container mx-auto">
        <ApiChainBuilder onApiSubmit={handleApiChain} />
        <ApiDisplay
          getUsers={getUsers}
          getComments={getComments}
          userData={userData}
          postData={postData}
          commentsData={commentsData}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
