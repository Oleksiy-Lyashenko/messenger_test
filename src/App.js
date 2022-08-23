import { BsCheckCircle } from 'react-icons/bs';
import { IoIosContact } from 'react-icons/io';
import { RiSendPlane2Fill } from 'react-icons/ri';
import Chat from './components/Chat';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="block">
          <div className="left-side">
            <div className="logo">
              <div className="img">
                <IoIosContact className="icon" color="gray" />
                <BsCheckCircle color="#009c48" className="check" />
              </div>
            </div>
            <div className="search">
              {/* <input type="text" className='search-style'/> */}
              <input className="search-style" placeholder="Search or start new chat" />
            </div>
            <div className="chats">
              <h2 className="chats__title">Chats</h2>
              <ul className="chats__list">
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
              </ul>
            </div>
          </div>

          <div className="right-side">
            <div className="user">
              <div className="img img--user">
                <IoIosContact className="icon" color="gray" />
                <BsCheckCircle color="#009c48" className="check" />
              </div>
              <h4 className="user__name">Josephina</h4>
            </div>
            <div className="text">
              <div className="text__myself">
                <div className="img">
                  <IoIosContact className="icon" color="gray" />
                </div>
                <div className="text__myself__message">hello me friend </div>
              </div>
              <div className="text__mate">
                <div className="text__mate__message">hello me friend </div>
              </div>
            </div>
            <div className="input">
              <input type="text" className="input__field" placeholder="Type your message" />
              <button className="input__button">
                <RiSendPlane2Fill size="17px" color="#5c5c5c" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
