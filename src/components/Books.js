import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Detail from '../page/Detail';
  
function Books() {
    const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [posts, setPosts] = useState([]);
   const client = axios.create({
    baseURL: "https://app-bookss.herokuapp.com/api" 
 });
    const handleAdd=(e)=>{
        e.preventDefault()
        console.log("Clicked ADD")

    }
    const handleDelete=(params)=>{
        console.log(params)
    }
    const [books, setBooks] = useState([]);
    // const navigate=useNavigate();
    // const useReset = data => {  
    //     useEffect(() => {  
    //       setBooks(data)
    //     }, [])  
    //   } 
    useEffect(() => {
            fetch("https://app-bookss.herokuapp.com/api/get-books")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data)
                console.log(data)
            }
            )
            .catch(err => console.log("err " + err))
        
    }, [])

    //DELETE
    // const deletePost = async (id) => {
    //     let response = await fetch(
    //        `https://app-bookss.herokuapp.com/api/delete-book/${id}`,
    //        {
    //           method: 'DELETE',
    //        }
    //     );
    //     if (response.status === 200) {
    //        setPosts(
    //           posts.filter((post) => {
    //              return post.id !== id;
    //           })
    //        );
    //     } else {
    //        return;
    //     }
    //  };

    //get axios

    // useEffect(() => {
    //     const fetchPost = async () => {
    //        let response = await client.get('/get-books');
    //        setBooks(response.data);
    //     };
    //     fetchPost();
    //  }, []);
    //  console.log(books)
    const deletePost=async (_id)=>{
        await axios({
            method:"DELETE",
            url:`https://app-bookss.herokuapp.com/api/delete-book/${_id}`,
            headers: {
                'Content-Type': 'multipart/form-data'

        }})
        .then(res => {
                console.log(res.data)
                setBooks(data => data.filter((item) => item._id !==_id));
           
        })
        .catch(err=>{
            console.log(err)
        })
        return deletePost

    }
    return (
        <div className='bg-slate-200 min-h-screen relative '>
            <div>
                <h1 className='font-serif font-bold text-3xl pt-8 pb-12 text-center'>Books List</h1>
            </div>
            <Link className='absolute top-0 right-0 px-3 py-2 m-2 bg-blue-500 mr-5 rounded-md' to={"/login"}><button>Login</button></Link>
            <div className='flex justify-center'>
            <a href='https://google.com' className='px-3 py-2 bg-green-600 m-2 rounded-md' onClick={handleAdd} >Add Book</a>
            </div> 
            <div className='w-full flex justify-center'>
            
            
            
            {<div className=' max-w-4xl flex flex-row justify-center bg-slate-300 ' >
                <table className='table-auto'> 
                    <thead className='bg-cyan-700'>
                        <tr>
                            <th>BookID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th>numOfPage</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book) => (
                                <tr key={book.bookId}>
                                    <td>{book.bookId}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.date}</td>
                                    <td>{book.numOfPage}</td>
                                    <td>
                                        <button className='px-2 py-1 bg-green-700 m-2 ' >View</button>    
                                        <button className='px-2 py-1 bg-red-700 m-2' onClick={()=>{deletePost(book._id)}}>Delete</button>  
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
            }
        </div>
        </div>
        

    )
}

export default Books