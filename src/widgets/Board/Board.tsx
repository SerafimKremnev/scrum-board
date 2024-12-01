'use client';
import { FC, useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { v4 as uuidv4 } from 'uuid';
import {
  cvaRoot,
  cvaInput,
  cvaButton,
  cvaColumns,
  cvaColumn,
  cvaColumnTitle,
  cvaTask,
  cvaDeleteButton,
} from './BoardStyles';
import { IBoardProps, IBoardState, ITask } from './model/types';
import clsx from 'clsx';
import { useUpdateEffect } from 'react-use';

const initialColumns = {
  todo: {
    id: 'todo',
    title: 'Готова к работе',
    tasks: [],
  },
  inProgress: {
    id: 'inProgress',
    title: 'В работе',
    tasks: [],
  },
  done: {
    id: 'done',
    title: 'Выполнена',
    tasks: [],
  },
};

const ItemTypes = {
  TASK: 'task',
};

const Task: FC<{ task: ITask; columnId: string; deleteTask: Function }> = ({
  task,
  columnId,
  deleteTask,
}) => {
  const [, ref] = useDrag({
    type: ItemTypes.TASK,
    item: { id: task.id, columnId },
  });

  return (
    <div ref={ref} className={cvaTask()}>
      <span>{task.content}</span>
      <button
        onClick={() => deleteTask(columnId, task.id)}
        className={cvaDeleteButton()}>
        X
      </button>
    </div>
  );
};

const Column: FC<{ column: any; moveTask: Function; deleteTask: Function }> = ({
  column,
  moveTask,
  deleteTask,
}) => {
  const [, ref] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item: any) => {
      if (item.columnId !== column.id) {
        moveTask(item.id, item.columnId, column.id);
      }
    },
  });

  return (
    <div ref={ref} className={cvaColumn()}>
      <h2 className={cvaColumnTitle()}>{column.title}</h2>
      {column.tasks.map((task: ITask) => (
        <Task
          key={task.id}
          task={task}
          columnId={column.id}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

const Board: FC<IBoardProps> = () => {
  const [newTask, setNewTask] = useState('');
  const [boardState, setBoardState] = useState<IBoardState>({
    columns: initialColumns,
  });

  useUpdateEffect(() => {
    localStorage.setItem('scrumBoard', JSON.stringify(boardState));
  }, [boardState]);

  useEffect(() => {
    const savedState = localStorage.getItem('scrumBoard');
    if (savedState) {
      setBoardState(JSON.parse(savedState));
    }
  }, []);

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const task: ITask = {
      id: uuidv4(),
      content: newTask,
    };

    setBoardState((prev) => ({
      columns: {
        ...prev.columns,
        todo: {
          ...prev.columns.todo,
          tasks: [...prev.columns.todo.tasks, task],
        },
      },
    }));

    setNewTask('');
  };

  const deleteTask = (columnId: string, taskId: string) => {
    setBoardState((prev) => ({
      columns: {
        ...prev.columns,
        [columnId]: {
          ...prev.columns[columnId],
          tasks: prev.columns[columnId].tasks.filter(
            (task) => task.id !== taskId
          ),
        },
      },
    }));
  };

  const clearBoard = () => {
    setBoardState({ columns: initialColumns });
  };

  const moveTask = (
    taskId: string,
    sourceColumnId: string,
    destColumnId: string
  ) => {
    setBoardState((prev) => {
      const sourceColumn = prev.columns[sourceColumnId];
      const destColumn = prev.columns[destColumnId];
      const task = sourceColumn.tasks.find((task) => task.id === taskId);

      if (!task) return prev;

      const updatedSourceTasks = sourceColumn.tasks.filter(
        (task) => task.id !== taskId
      );
      const updatedDestTasks = [...destColumn.tasks, task];

      return {
        columns: {
          ...prev.columns,
          [sourceColumnId]: {
            ...sourceColumn,
            tasks: updatedSourceTasks,
          },
          [destColumnId]: {
            ...destColumn,
            tasks: updatedDestTasks,
          },
        },
      };
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={cvaRoot()}>
        <div className="flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Введите название задачи"
            className={cvaInput()}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          />
          <button onClick={handleAddTask} className={cvaButton()}>
            Добавить задачу
          </button>
          <button onClick={clearBoard} className={clsx(cvaButton(), 'ml-auto')}>
            Очистить доску
          </button>
        </div>

        <div className={cvaColumns()}>
          {Object.values(boardState.columns).map((column) => (
            <Column
              key={column.id}
              column={column}
              moveTask={moveTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Board;
