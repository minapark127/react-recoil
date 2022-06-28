import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import DraggableCard from './DraggableCard';

const Wrapper = styled.div`
  padding: 12px 0 0;
  border: 1px solid ${(props) => props.theme.boardBgColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const Area = styled.div<{ isDraggingOver: boolean }>`
  flex: 1;
  background-color: ${(props) =>
    props.isDraggingOver ? props.theme.boardBgColor : ''};
`;

const Title = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 12px;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>

      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo}
                index={index}
                toDo={toDo}
              ></DraggableCard>
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
