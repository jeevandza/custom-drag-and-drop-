import * as React from 'react';
import './style.css';

interface listItems {}

export default function App() {
  const dragItem = React.useRef();
  const dragOverItem = React.useRef();
  const [list, setList] = React.useState([
    {
      Item: 'Bar and resturant',
    },
    {
      Item: 'Canteen',
    },
    {
      Item: 'Flexi Desks',
    },
    {
      Item: 'Meeting rooms',
    },
    {
      Item: 'Parking Area',
    },
    {
      Item: 'Rooftop',
    },
  ]);

  const dragStart = (e: any, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  let flors = [];

  for (let i = 1; i <= list.length; i++) {
    flors.push(i);
  }

  console.log(flors, 'flors');

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItem: 'center' }}
    >
      <div>
        {flors.map((ele) => (
          <div> Floor{ele}</div>
        ))}
      </div>
      <div>
        {list.map((ele, index) => (
          <div
            style={{ paddingLeft: '10px' }}
            key={index}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            draggable
          >
            {ele.Item}
          </div>
        ))}
      </div>
    </div>
  );
}
