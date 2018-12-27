import React, { useState, useEffect } from "react";

import { Editor, Viewer } from "yosgo-editor";

import styles from "./DetailsPage.module.css";

const DetailsPage = props => {
  const [notes, setNotes] = useState(props.content.Notes);
  const [exercise, setExercise] = useState(props.content.Exercise);
  const [answer, setAnswer] = useState(props.content.Answer);
  const [references, setReferences] = useState(props.content.References);

  useEffect(() => {
    props.setSidebar(false);
  }, []);

  return (
    <article className={styles.detailsPageBody}>
      <section className={styles.writeup}>
        {props.user ? (
          <Editor value={notes} onChange={setNotes} />
        ) : (
          <Viewer html={props.content.Notes} />
        )}
      </section>
      <section className={styles.writeup}>
        <article>
          <header>
            <h2>Exercise</h2>
          </header>
          {props.user ? (
            <Editor
              className="exercise"
              value={exercise}
              onChange={setExercise}
            />
          ) : (
            <Viewer className="exercise" html={props.content.Exercise} />
          )}
          <header>
            <h2>Answer</h2>
          </header>
          {props.user ? (
            <Editor className="answer" value={answer} onChange={setAnswer} />
          ) : (
            <Viewer className="answer" html={props.content.Answer} />
          )}
        </article>
        <article>
          <header>
            <h2>Resources & references</h2>
          </header>
          {props.user ? (
            <Editor
              className="references"
              value={references}
              onChange={setReferences}
            />
          ) : (
            <Viewer className="references" html={props.content.References} />
          )}
        </article>
      </section>
    </article>
  );
};

export default DetailsPage;
