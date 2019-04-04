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


