import React, { useState, useEffect } from "react";

import { Editor, Viewer } from "yosgo-editor";

import styles from "./DetailsPage.module.css";
import { updateEntry } from "../../data/AirtableAPI";

const DetailsPage = props => {
  const [notes, setNotes] = useState(props.content.Notes);
  const [exercise, setExercise] = useState(props.content.Exercise);
  const [answer, setAnswer] = useState(props.content.Answer);
  const [references, setReferences] = useState(props.content.References);

  useEffect(() => {
    props.setSidebar(false);
  }, []);

  const updatedData = {
    Slug: props.content.Slug,
    Name: props.content.Name,
    Notes: notes,
    Exercise: exercise,
    Answer: answer,
    References: references,
    Tags: props.content.Tags
  };

  const updateEntryOnClick = () => {
    updateEntry("Rental", props.content.id, updatedData);
  };

  return (
    <article className={styles.detailsPageBody}>
      <section className={styles.writeup}>
        <header>
          <h2>{props.content.Name}</h2>
        </header>
        {props.userData === 46162676 ? (
          <React.Fragment>
            <button onClick={updateEntryOnClick}>Save</button>
            <Editor value={notes} onChange={setNotes} />
          </React.Fragment>
        ) : (
          <Viewer html={props.content.Notes} />
        )}
      </section>
      <section className={`${styles.exerciseBody} ${styles.writeup}`}>
        <article>
          <header>
            <h2>Exercise</h2>
          </header>
          {props.userData === 46162676 ? (
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
          {props.userData === 46162676 ? (
            <Editor className="answer" value={answer} onChange={setAnswer} />
          ) : (
            <Viewer className="answer" html={props.content.Answer} />
          )}
        </article>
        <article>
          <header>
            <h2>Resources & references</h2>
          </header>
          {props.userData === 46162676 ? (
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
