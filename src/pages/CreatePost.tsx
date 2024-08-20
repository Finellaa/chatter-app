import React, { useState, useEffect } from "react";
import { addDoc, getFirestore, collection} from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import auth from firebase/auth
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import config from '../firebase'
import { User } from "firebase/auth";

interface CreatePostProps {
  isAuth: boolean;
}

function CreatePost({ isAuth }: CreatePostProps ) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  // Initialize Firestore and Auth directly in the component
  const app = initializeApp(config.firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();
  const currentUser = auth.currentUser;

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
        postText,
        author: {
          name: auth.currentUser?.displayName ?? "Anonymous",
          id: auth.currentUser?.uid ?? "unknown",
        },
      });
      
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;