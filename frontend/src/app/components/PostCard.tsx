// src/app/components/PostCard.tsx

import React, { useState, useEffect } from 'react';
import { Datum } from '../interface/post';
import { addLike, getLikesForPost } from '../controllers/like.controllers'; 
import '../styles/post.module.css';

const PostCard: React.FC<{
  post: Datum;
  
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}> = ({ post, onEdit, onDelete }) => {
  const [likes, setLikes] = useState<number>(0); // Número inicial de "likes"
  const [userId, setUserId] = useState<string>(''); // Obtén el user_id según sea necesario

   // Obtener el número inicial de "likes" cuando el componente se monta
   useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await getLikesForPost(post.id);
        const initialLikes = response.likes.length > 0 ? response.likes[0].quantity : 0;
        setLikes(initialLikes);
      } catch (err) {
        console.error('Failed to fetch initial likes:', err);
      }
    };
  
    fetchLikes();
  }, [post.id]);


  const handleLike = async () => {
    try {
      const response = await addLike({
        quantity: likes + 1,
        post_id: Number(post.id),
        id: '' // Asegúrate de que este ID esté correctamente manejado según tu backend
      });
  
      // Asegúrate de que `response.likes` esté definido y tenga una longitud adecuada
      const updatedLikes = response && response.likes && response.likes.length > 0
        ? response.likes[0].quantity
        : likes + 1;
  
      setLikes(updatedLikes);
    } catch (err) {
      console.error('Failed to add like:', err);
    }
  };
  return (
    <figure className="card col-4">
      <h2 className="card-title text-center">{post.title}</h2>
      <h4 className="card-title text-center">Author: </h4> {/* Placeholder for author */}
      <figcaption className="card-body bg-light text-dark">
        <h5 className="card-title text-center">{post.description}</h5>
        <p className="card-text text-center">Summary goes here</p> {/* Placeholder for summary */}
        <h6 className="card-title text-center">Publication Date</h6> {/* Placeholder for publication date */}
        <div className="d-flex">
          <button
            className="btn btn-warning"
            type="button"
            onClick={() => onEdit(post.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => onDelete(post.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-primary ml-2"
            type="button"
            onClick={handleLike}
          >
            Like ({likes})
          </button>
        </div>
      </figcaption>
    </figure>
  );
};

export default PostCard;