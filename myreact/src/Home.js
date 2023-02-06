import useFetch from './useFetch'
import BlogList from './BlogList';


const Home = () => {
const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
  return (
    <div className="home">
     { error && <div>{ error }</div> }
     {isPending && <div>......loading</div>}
     {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home;