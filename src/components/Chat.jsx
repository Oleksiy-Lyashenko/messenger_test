import { BsCheckCircle } from 'react-icons/bs';
import { IoIosContact } from 'react-icons/io';

let options = { month: 'short', day: 'numeric', year: 'numeric' };

const date = new Date().toLocaleDateString('en-US', options);

export default function Chat() {
  return (
    <li className="chat">
      <div className="chat__block">
        <div className="img img--chat">
          <IoIosContact className="icon" color="gray" />
          <BsCheckCircle color="#009c48" className="check" />
        </div>
        <div className="">
          <div>Alisa Frolova</div>
          <div className="chat__message">Last message!</div>
        </div>
      </div>
      <div className="chat__time">{date}</div>
    </li>
  );
}
