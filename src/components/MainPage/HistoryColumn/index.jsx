import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../../Avatar";

import "./style.css";

export const HistoryColumn = () => (
  <div className="history">
    <div className="inputMesageArea">
      <div className="imgDialogPhoto inputLogoImage">
        <Avatar
          src={require("../../../img/user/06d755d2-bf62-4b4f-b817-015869261d04.jpg")}
          style={{ height: 56, width: 56 }}
        />
      </div>

      <textarea
        type="textArea"
        className="inputMessage"
        rows="2"
        cols="50"
        placeholder="Write a message..."
      />
      <Link to="contact">
        <Avatar
          src={require("../../../img/user/08a594be-8778-49b8-a336-37f52b54e47c.jpg")}
          style={{ height: 56, width: 56 }}
        />
      </Link>
    </div>

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
              deleniti quam autem iste eius repellat doloribus laborum
              voluptates eos explicabo tempore doloremque!
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
              Lorem ipsum dolor sit amet consectetur!
            </div>
          </div>
          <div className="timeLastMessage">
            <div>6:07:57 PM</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);
