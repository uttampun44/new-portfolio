import blogCategory from "@data/blogCategory";
import persistImage from "@image/persist.jpg"

type blogType = {
  id: number;
  category: string;
  slug: string;
  title: string;
  description: string;
  image: {
    src: string;
  };
  date: string;
  author: string;
  url: string;
}
export const blogs:blogType[] = [
  {
    id: 1,
    category: blogCategory[0],
    slug: "redux-persist",
    title: "Redux Persist is a state management tool that allows the state in a Redux store",
    description:"improving user experience by pre-loading the store with persistent data. It also offers protection against unexpected crashes and network issues, preventing data loss and offering a more reliable user experience. Redux Persist offers various configurations, including custom caching strategies, deciding which parts of the state to persist and exclude, and the storage mechanism to use. It also comes with built-in features such as migrations, transforms, and custom merges.",
    image: persistImage,
    date:"2023-01-01",
    author:"Uttam Pun",
    url:"https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/"
  },
]