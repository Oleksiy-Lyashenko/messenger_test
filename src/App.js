import { useEffect, useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { IoIosContact } from 'react-icons/io';
import { RiSendPlane2Fill } from 'react-icons/ri';
import ChatList from './components/ChatsList';
import data from './components/data/data.json';
import axios from 'axios';

function App() {
  const [newData, setNewData] = useState(JSON.parse(localStorage.getItem('data')) || []);
  const [searchChat, setSearchChat] = useState('');
  const [chosenChat, setChosenChat] = useState(null);
  const [newText, setNewText] = useState('');

  useEffect(() => {
    const localData = localStorage.getItem('data');

    if (!localData) {
      setNewData(data);
    }
  }, []);

  const getMessage = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');

      const newMessage = {
        id: chosenChat.messages.length,
        type: 'inbox',
        text: response.data.value,
      };

      const newArr = newData.filter((chat) => chat.id !== chosenChat.id);

      const chat = newData.find((chat) => chat.id === chosenChat.id);

      chat.messages.push(newMessage);

      setNewData([chat, ...newArr]);

      localStorage.setItem('data', JSON.stringify([chat, ...newArr]));


    } catch (error) {
      console.error(error);
    }
  };

  const sendMessage = () => {
    const newMessage = {
      id: chosenChat.messages.length,
      type: 'outbox',
      text: newText,
    };

    const newArr = newData.filter((chat) => chat.id !== chosenChat.id);

    const chat = newData.find((chat) => chat.id === chosenChat.id);

    chat.messages.push(newMessage);

    setNewData([chat, ...newArr]);

    localStorage.setItem('data', JSON.stringify([chat, ...newArr]));

    setNewText('');

    setTimeout(() => {
      getMessage();
    }, 4000);
  };

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
              <input
                className="search-style"
                placeholder="Search or start new chat"
                value={searchChat}
                onChange={(e) => setSearchChat(e.target.value)}
              />
            </div>
            <div className="chats">
              <h2 className="chats__title">Chats</h2>
              <ul className="chats__list">
                {newData
                  .filter((chat) => {
                    if (searchChat === '') {
                      return chat;
                    } else if (chat.name.toLowerCase().includes(searchChat.toLocaleLowerCase())) {
                      return chat;
                    }
                  })
                  .map((chat) => (
                    <div key={chat.id} onClick={() => setChosenChat(chat)}>
                      <ChatList chat={chat} key={chat.id} />
                    </div>
                  ))}
              </ul>
            </div>
          </div>

          {chosenChat ? (
            <div className="right-side">
              <div className="user">
                <div className="img img--user">
                  <IoIosContact className="icon" color="gray" />
                  <BsCheckCircle color="#009c48" className="check" />
                </div>
                <h4 className="user__name">{chosenChat.name}</h4>
              </div>
              <div className="text">
                {chosenChat.messages.map((message) =>
                  message.type === 'outbox' ? (
                    <div className="text__myself" key={message.id}>
                      <div className="img">
                        <IoIosContact className="icon" color="gray" />
                      </div>
                      <div className="text__myself__message">{message.text}</div>
                    </div>
                  ) : (
                    <div className="text__mate" key={message.id}>
                      <div className="text__mate__message">{message.text}</div>
                    </div>
                  ),
                )}
              </div>
              <div className="input">
                <input
                  type="text"
                  className="input__field"
                  placeholder="Type your message"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />
                <button className="input__button" onClick={() => sendMessage()}>
                  <RiSendPlane2Fill size="17px" color="#5c5c5c" />
                </button>
              </div>
            </div>
          ) : (
            <div className="right-side right-side--no-chat">
              <p className="no-chat">No chat</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
