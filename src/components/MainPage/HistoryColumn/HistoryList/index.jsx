import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../../../Avatar";

import "./style.css";



export const HistoryList = () => (

    <ul className="message-context">
        {dialogsList.map(({ timeLastMessage, profileName, lastMessage }) => (
            <ListItem
                key={lastMessage.idLastMessage}
                profileName={profileName}
                lastMessage={lastMessage}
            />
        ))}
    </ul>
  <ul className="messageContext">
    <li>
      <div style={{ height: 30 }} />
    </li>
    <li>
      <div className="message">
        <div className="imgDialogPhoto imageUserMessage">
          <span className="imageUserMessage">DP</span>
        </div>
        <div className="dialogInfo">
          <div className="dialogName">Dima Petrov</div>
          <div className="dialogLastMessage">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            totam numquam molestiae excepturi est possimus facere magnam
            corporis eum, non nesciunt ab dolores repudiandae voluptatem
            corrupti unde voluptatum. Non, excepturi.
          </div>
        </div>
        <div className="timeLastMessage">
          <div>6:58:57 PM</div>
        </div>
      </div>
    </li>
    <li>
      <div className="message">
        <div className="imgDialogPhoto imageUserMessage">
          <span className="imageUserMessage">LS</span>
        </div>
        <div className="dialogInfo">
          <div className="dialogName">Liza Smitt</div>
          <div className="dialogLastMessage">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
            iusto velit commodi mollitia eveniet aspernatur, rerum dolor
            deleniti quam autem iste eius repellat doloribus laborum voluptates
            eos explicabo tempore doloremque!
          </div>
        </div>
        <div className="timeLastMessage">
          <div>6:57:57 PM</div>
        </div>
      </div>
    </li>
    <li>
      <div className="message">
        <div className="imgDialogPhoto imageUserMessage">
          <span className="imageUserMessage">DP</span>
        </div>
        <div className="dialogInfo">
          <div className="dialogName">Dima Petrov</div>
          <div className="dialogLastMessage">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            totam numquam molestiae excepturi est possimus facere magnam
            corporis eum, non nesciunt ab dolores repudiandae voluptatem
            corrupti unde voluptatum. Non, excepturi.
          </div>
        </div>
        <div className="timeLastMessage">
          <div>6:56:57 PM</div>
        </div>
      </div>
    </li>
    <li>
      <div className="message">
        <div className="imgDialogPhoto imageUserMessage">
          <span className="imageUserMessage">LS</span>
        </div>
        <div className="dialogInfo">
          <div className="dialogName">Liza Smitt</div>
          <div className="dialogLastMessage">
            Lorem ipsum dolor sit amet consectetur!
          </div>
        </div>
        <div className="timeLastMessage">
          <div>6:55:57 PM</div>
        </div>
      </div>
    </li>
    <li>
      <div className="message">
        <div className="imgDialogPhoto imageUserMessage">
          <span className="imageUserMessage">DP</span>
        </div>
        <div className="dialogInfo">
          <div className="dialogName">Dima Petrov</div>
          <div className="dialogLastMessage">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            totam numquam molestiae excepturi est possimus facere magnam
            corporis eum, non nesciunt ab dolores repudiandae voluptatem
            corrupti unde voluptatum. Non, excepturi.
          </div>
        </div>
        <div className="timeLastMessage">
          <div>6:54:57 PM</div>
        </div>
      </div>
    </li>
    <li>
      <div className="message">
        <div className="imgDialogPhoto imageUserMessage">
          <span className="imageUserMessage">LS</span>
        </div>
        <div className="dialogInfo">
          <div className="dialogName">Liza Smitt</div>
          <div className="dialogLastMessage">
            Lorem ipsum dolor sit amet consectetur!
          </div>
        </div>
        <div className="timeLastMessage">
          <div>6:53:57 PM</div>
        </div>
      </div>
    </li>
    <li>
      <div className="message">
        <div className="imgDialogPhoto imageUserMessage">
          <span className="imageUserMessage">DP</span>
        </div>
        <div className="dialogInfo">
          <div className="dialogName">Dima Petrov</div>
          <div className="dialogLastMessage">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            totam numquam molestiae excepturi est possimus facere magnam
            corporis eum, non nesciunt ab dolores repudiandae voluptatem
            corrupti unde voluptatum. Non, excepturi.
          </div>
        </div>
        <div className="timeLastMessage">
          <div>6:52:57 PM</div>
        </div>
      </div>
    </li>
    <li>
      <div className="message">
        <div className="imgDialogPhoto imageUserMessage">
          <span className="imageUserMessage">LS</span>
        </div>
        <div className="dialogInfo">
          <div className="dialogName">Liza Smitt</div>
          <div className="dialogLastMessage">
            Lorem ipsum dolor sit amet consectetur!
          </div>
        </div>
        <div className="timeLastMessage">
          <div>6:51:57 PM</div>
        </div>
      </div>
    </li>
    <li>
      <div className="message">
        <div className="imgDialogPhoto imageUserMessage">
          <span className="imageUserMessage">DP</span>
        </div>
        <div className="dialogInfo">
          <div className="dialogName">Dima Petrov</div>
          <div className="dialogLastMessage">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            totam numquam molestiae excepturi est possimus facere magnam
            corporis eum, non nesciunt ab dolores repudiandae voluptatem
            corrupti unde voluptatum. Non, excepturi.
          </div>
        </div>
        <div className="timeLastMessage">
          <div>6:50:57 PM</div>
        </div>
      </div>
    </li>
    <li>
      <div className="message">
        <div className="imgDialogPhoto imageUserMessage">
          <span className="imageUserMessage">LS</span>
        </div>
        <div className="dialogInfo">
          <div className="dialogName">Liza Smitt</div>
          <div className="dialogLastMessage">
            
          </div>
        </div>
        <div className="timeLastMessage">
          <div>6:07:57 PM</div>
        </div>
      </div>
    </li>
  </ul>
);
const dialogMesages =[
   {
       dialog: "Liza Smith",
       messages:[
           {
               author: "Liza Smith",
               message: "Lorem ipsum dolor sit amet consectetur!"
           },
           {
               author: "Deniz Petrov",
               message: "кто-нибудь может подсказать как менять местами объекты в массиве, или что использовать для этого Пробовал через индексы, но это не подходит, так как массив может быть с вложенностью"
           },
           {
               author: "Liza Smith",
               message: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            totam numquam molestiae excepturi est possimus facere magnam
            corporis eum, non nesciunt ab dolores repudiandae voluptatem
            corrupti unde voluptatum.Non, excepturi.`
           },
           {
               author: "Deniz Petrov",
               message: "кто-нибудь может подсказать как менять местами объекты в массиве, или что использовать для этого Пробовал через индексы, но это не подходит, так как массив может быть с вложенностью"
           },
           {
               author: "Liza Smith",
               message: "Lorem ipsum dolor sit amet consectetur!"
           },
           {
               author: "Deniz Petrov",
               message: "кто-нибудь может подсказать как менять местами объекты в массиве, или что использовать для этого Пробовал через индексы, но это не подходит, так как массив может быть с вложенностью"
           },
           {
               author: "Liza Smith",
               message: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            totam numquam molestiae excepturi est possimus facere magnam
            corporis eum, non nesciunt ab dolores repudiandae voluptatem
            corrupti unde voluptatum.Non, excepturi.`
           },
           {
               author: "Deniz Petrov",
               message: "кто-нибудь может подсказать как менять местами объекты в массиве, или что использовать для этого Пробовал через индексы, но это не подходит, так как массив может быть с вложенностью"
           },
           {
               author: "Liza Smith",
               message: "Lorem ipsum dolor sit amet consectetur!"
           },
           {
               author: "Deniz Petrov",
               message: "кто-нибудь может подсказать как менять местами объекты в массиве, или что использовать для этого Пробовал через индексы, но это не подходит, так как массив может быть с вложенностью"
           },
           {
               author: "Liza Smith",
               message: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            totam numquam molestiae excepturi est possimus facere magnam
            corporis eum, non nesciunt ab dolores repudiandae voluptatem
            corrupti unde voluptatum.Non, excepturi.`
           },
           {
               author: "Deniz Petrov",
               message: "кто-нибудь может подсказать как менять местами объекты в массиве, или что использовать для этого Пробовал через индексы, но это не подходит, так как массив может быть с вложенностью"
           },
       ]
   }
]


