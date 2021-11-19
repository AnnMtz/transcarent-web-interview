import { useState } from 'react';
import useNames from '../hooks/useNames';

export default function Animals() {
  const animals = useNames();

  const [newItem, setNewItem] = useState();

  const RecursiveComponent = ({ name, items }) => {
    const hasChildren = items && items.length;
    console.log(hasChildren);
    return (
      <>
        <p>{name}</p>
        <div>
          <ul>
            <li>
              {hasChildren > 0 &&
                items.map((item) => (
                  <RecursiveComponent name={item.name} {...item} />
                ))}
            </li>
          </ul>
          {hasChildren > 0 ? (
            <input
              type="text"
              onKeyDown={(e) => {
                setNewItem([
                  ...items,
                  { name: newItem, item: items.length + 1 },
                ]);
              }}
              onChange={(e) => setNewItem(e.target.value)}
            ></input>
          ) : null}
        </div>
        <span
          style={{ cursor: 'pointer' }}
          onClick={(e) =>
            items(
              items.filter((value) => {
                return value.name !== e.target.value;
              })
            )
          }
        >
          ❌
        </span>
      </>
    );
  };

  return (
    <div className="tree">
      <RecursiveComponent {...animals} />
    </div>
  );
}
