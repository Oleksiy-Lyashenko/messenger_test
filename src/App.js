import { BsCheckCircle } from 'react-icons/bs';
import { IoIosContact } from 'react-icons/io';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="block">
          <div className="left-side">
            <div className="logo">
              <div className="img">
                <IoIosContact className='icon' color='gray'/>
                <BsCheckCircle color="#009c48" className="check"/>
              </div>
            </div>
            <div className="search">
              {/* <input type="text" className='search-style'/> */}
              <input className="search-style" />
            </div>
            <div className="chats">
              <h2>Chats</h2>
            </div>
          </div>

          <div className="right-side">World</div>
        </div>
      </div>
    </div>
  );
}

export default App;
