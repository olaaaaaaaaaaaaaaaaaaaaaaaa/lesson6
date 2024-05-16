import { NavLink } from "react-router-dom";
import { Button } from "../button/button";
import styles from "./extendedlink.module.css";

const ExtendedLink = ({ id, to, children, onEdit, onRemove }) => (
  <NavLink to={to}>
    {({ isActive }) =>
      isActive ? (
        <div className={styles.todoInput}>
          {children ? (
            <>
              <div> {children}</div>
              <Button onClick={onEdit}>📝</Button>
              <Button onClick={onRemove}>✖</Button>
            </>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div>
          {children && children.length > 30 ? children.slice(0, 30) + "..." : children}
        </div>
      )
    }
  </NavLink>
);

export default ExtendedLink;
