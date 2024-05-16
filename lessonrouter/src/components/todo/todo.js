import styles from "./todo.module.css";
import ExtendedLink from "../extended-link/extended-link";
import { Button } from "../button/button";
import { useParams, Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "../not-found/notfound";
import { NEW_TODO_ID } from "../../constants/new-todo-id";

export const Todo = ({
  id,
  title,
  completed,
  isEditing,
  onEdit,
  onTitleChange,
  onCompletedChange,
  onSave,
  onRemove,
}) => {
  //const params = useParams();

  //const todoId = params.id;

  // if (todoId !== 'NEW_TODO_ID') {
  // return <NotFound />;
  //}

  // const  params= useParams();
  // const paramsId = parseInt(params.id); // или Number(params.id);
  // const todoId = id === NEW_TODO_ID ? NEW_TODO_ID : parseInt(id);

  // if ( paramsId !== id) {
  // return   ( <NotFound />);
  // }

  // const params = useParams();
  // const paramsId = parseInt(params.id); // или Number(params.id);

  // // Проверяем, что id существует и совпадает с params.id
  // if (id && paramsId !== id) {
  //   return <p>error</p>;
  // }

  const params = useParams();
  const navigate = useNavigate();

  if (id !== NEW_TODO_ID && params.id !== id) {
    return <NotFound />;
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={completed}
        onChange={({ target }) => onCompletedChange(target.checked)}
      />
      <div className={styles.title}>
        {isEditing ? (
          <div className={styles.todoItem}>
            <input
              type="text"
              value={title}
              onChange={({ target }) => onTitleChange(target.value)}
            />{" "}
            <Button onClick={onSave}>✎</Button>
          </div>
        ) : (
          <div className={styles.todoItem}>
            <ExtendedLink
              id={id}
              to={`/task/${id}`}
              onEdit={onEdit}
              onRemove={onRemove}
            >
              {title}
            </ExtendedLink>
          </div>
        )}
      </div>
      <button onClick={handleBack}>Back</button>

      <Routes>
        <Route path="/task/:id" element={<ExtendedLink />} />
      </Routes>
    </div>
  );
};
