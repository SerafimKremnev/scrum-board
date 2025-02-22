export interface ITask {
  id: string;
  content: string;
}

export interface IColumn {
  id: string;
  title: string;
  tasks: ITask[];
}

export interface IBoardProps {}

export interface IBoardState {
  columns: {
    [key: string]: IColumn;
  };
}
