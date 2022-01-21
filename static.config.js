import axios from "axios";

export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return [
      {
        path: "/",
        component: "src/containers/Home"
      },
      {
        path: "/about",
        component: "src/containers/About"
      },
      {
        path: "/projects",
        component: "src/containers/Projects"
      },
      {
        path: "/softonic-projects",
        component: "src/containers/Softonic-projects"
      },
      {
        path: "/under-construction",
        component: "src/containers/Construction.js"
      },
      {
        path: "/softonic-projects/chrome-plugin",
        component: "src/containers/softonic-projects/Chrome-plugin"
      },
      {
        path: "/blog",
        component: "src/containers/Blog",
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: "src/containers/Post",
          getData: () => ({
            post
          })
        }))
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  }
};
