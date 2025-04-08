import { Suspense, useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Navbar from './components/navbars/Navbar'
import Bookmark from './components/Bookmark/Bookmark';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = (blog) => {
    setBookmarks([...bookmarks, blog])
    // console.log(bookmarks);
  }

  return (
    <>
      <div>
        <Navbar></Navbar>

        <div className="main-container flex h-svh">
          {/* LEFT */}
          <div className="left-container bg-gray-200 w-[70%]">
            <Suspense fallback={<p>loading...</p>}>
              <Blogs handleBookmarks={handleBookmarks}></Blogs>
            </Suspense>
          </div>




          {/* RIGHT */}
          <div className="right-container bg-sky-200 w-[30%] flex flex-col">
            <span>Reading Time: 0</span>
            <span>Bookmarked Count: {bookmarks.length}</span>

            <div>
              {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
              }
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
