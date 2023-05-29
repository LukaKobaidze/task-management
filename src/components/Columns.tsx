import { forwardRef } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { ColumnType } from 'types';
import { Text, Heading } from 'components';
import ScrollContainer from 'react-indiana-drag-scroll';
import headingStyles from 'styles/Heading.module.scss';
import styles from 'styles/Columns.module.scss';

interface Props {
  data: ColumnType[];
  setViewTaskIndex: React.Dispatch<
    React.SetStateAction<{
      col: number;
      task: number;
    } | null>
  >;
  onNewColumn: () => void;
}
type Ref = HTMLDivElement;

export default forwardRef<Ref, Props>(function Columns(props, ref) {
  const { data, setViewTaskIndex, onNewColumn } = props;

  return (
    <ScrollContainer
      hideScrollbars={false}
      ignoreElements="*[prevent-drag-scroll]"
      className={styles.container}
    >
      <div className={styles['names-sticky']}>
        <ul className={styles['names-wrapper']}>
          {data.map((item) => (
            <li key={item.name}>
              <div className={styles.name}>
                <div
                  className={styles['name__color-circle']}
                  style={{ backgroundColor: item.color }}
                />
                <Heading variant="S" level="3" className={styles['name__heading']}>
                  {item.name} ({item.tasks.length})
                </Heading>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles['all-tasks-wrapper']}>
        {data.map(({ name, tasks }, colIndex) => (
          <Droppable key={name} droppableId={String(colIndex)}>
            {(provided) => (
              <ul
                className={styles.tasks}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.map((task, taskIndex) => (
                  <Draggable
                    key={task.title}
                    draggableId={task.title}
                    index={taskIndex}
                  >
                    {(provided, snapshot) => {
                      return (
                        <li
                          className={`${styles['task-item']} ${
                            snapshot.draggingOver === 'delete'
                              ? styles['drag-deleting']
                              : ''
                          }`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div
                            className={`${styles['task-draggable']} ${
                              snapshot.isDragging ? styles.active : ''
                            }`}
                            prevent-drag-scroll="true"
                          />
                          <button
                            className={styles['task-btn']}
                            onClick={() =>
                              setViewTaskIndex({ col: colIndex, task: taskIndex })
                            }
                          >
                            <span
                              className={`${headingStyles.heading} ${headingStyles['heading--M']} ${styles['task-btn__title']}`}
                            >
                              {task.title}
                            </span>
                            {task.subtasks.length !== 0 && (
                              <Text
                                variant="M"
                                tag="span"
                                className={styles['task-btn__subtasks']}
                              >
                                {task.subtasks.reduce(
                                  (acc, subtask) =>
                                    subtask.isCompleted ? acc + 1 : acc,
                                  0
                                )}{' '}
                                of {task.subtasks.length} subtasks
                              </Text>
                            )}
                          </button>
                        </li>
                      );
                    }}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        ))}
        <button className={styles['new-column']} onClick={onNewColumn}>
          + New Column
        </button>
        <div className={styles['padding-div']} />
      </div>
    </ScrollContainer>
  );
});