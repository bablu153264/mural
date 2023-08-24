import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "bootstrap/dist/css/bootstrap.css";
import "./dragscroll.css";
import crousel from '../../../carouselimages/crousel.png';
import crousel3 from '../../../carouselimages/crousel3.png';
import crousel2 from '../../../carouselimages/crousel2.png';
import crousel4 from '../../../carouselimages/crousel4.png';
import crousel5 from '../../../carouselimages/crousel5.png';

const CarouselItem = ({ index, imageSrc }) => {
  return (
    <Draggable draggableId={`item-${index}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="drag-scroll-carousel-item"
        >
          <img src={imageSrc} alt={`Item ${index}`} />
        </div>
      )}
    </Draggable>
  );
};

const Carousel = ({ items }) => {
  const [orderedItems, setOrderedItems] = useState(items);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = Array.from(orderedItems);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setOrderedItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="carousel" direction="horizontal">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="drag-scroll-carousel-content"
          >
            {orderedItems.map((item, index) => (
              <CarouselItem key={index} index={index} imageSrc={item} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const DragScrollCarousel = () => {
  const imageUrls = [
    crousel,
    crousel3,
    crousel2,
    crousel4,
    crousel5,
    crousel,
    crousel3,
    crousel2,
    crousel4,
    crousel5
  ];

  return (
    <div className="drag-scroll-carousel-container">
      <div className="drag-scroll-carousel-scroll-container">
        <Carousel items={imageUrls} />
      </div>
    </div>
  );
};

export default DragScrollCarousel;
