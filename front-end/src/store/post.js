import create from "zustand";
import postService from "../services/post";

const initialPostValue = {
  id: null,
  content: "",
  likes: 0,
  token: null,
};

const usePostStore = create((set) => ({
  post: {}, //when load single post page
  postList: [], //when load post list page

  fetchPost: async (id) => {
    const response = await postService.getPost(id);
    if (response.data !== null) {
      //update current zustand store
      set({
        post: response.data,
      });
    }
    return response;
  },
  fetchPosts: async () => {
    const response = await postService.getPosts();
    if (response.data !== null) {
      //update current zustand store
      set({
        postsList: response.data,
      });
    }

    return response;
  },
}));

export default usePostStore;
