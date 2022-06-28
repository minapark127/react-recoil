import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
// rgba(0,125,250,0.6)
// #06c

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 12px 16px;
  background-color: ${(props) => props.theme.cardBgColor};
  border: ${(props) =>
    props.isDragging
      ? '4px solid rgba(0, 125, 250, 0.6)'
      : '4px solid transparent'};
  box-shadow: ${(props) =>
    props.isDragging
      ? 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;'
      : 'none'};
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: IDraggableCardProps) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
