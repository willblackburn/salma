import React from "react";

import "./menuitems.css";
import { Chilli } from "./Chilli";
import data from "./Appetisers.json";

export const Appetisers = () => {
  return (
    <section>
      <h1>Appetisers</h1>
      <ul>
        {data.map((item) => {
          return (
            <li>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div>
                <p className="price">{item.price}</p>
                <span>
                  <Chilli numberOfChillis={item.chillis} />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
