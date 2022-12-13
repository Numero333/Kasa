/* ----------------------------------------------------------------
This component is responsible of displaying the slideshow component
<Slideshow /> 

<Slideshowe /> use 2 states :
- Index : return index picture
- Counter : return counter of pictures

<Collapse /> have 2 functions :
HandleNext: handle next picture 
HandleBack: handle back picture

Functions check if the picture is the first or the last,
and if so, adjust the states and display the last one 
if on the first 'back' is clicked, if on the last 'next'
is clicked the first one will be displayed
----------------------------------------------- */

import { useState } from "react";
import styles from "../style/Slideshow.module.css";

export const Slideshow = (props) => {
  var [picture, setIndex] = useState({ index: 0, counter: 1 });

  const handleNext = () => {
    if (picture.index >= props.pictures.length - 1) {
      return setIndex({
        index: 0,
        counter: 1,
      });
    } else {
      picture.index++;
      picture.counter++;
      return setIndex({ index: picture.index, counter: picture.counter });
    }
  };

  const handleBack = () => {
    if (picture.index <= 0) {
      return setIndex({
        index: props.pictures.length - 1,
        counter: props.pictures.length,
      });
    }

    picture.index--;
    picture.counter--;
    console.log(picture);
    return setIndex({ index: picture.index, counter: picture.counter });
  };

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src={props.pictures[picture.index]}
        alt={"Photo logement n°" + (picture.index + 1)}
      />
      <div className={styles.arrowWrapper}>
        <button onClick={handleBack} className={styles.arrowLeft}></button>
        <button onClick={handleNext} className={styles.arrowRight}></button>
      </div>
      <div className={styles.counter}>
        {picture.counter}/{props.pictures.length}
      </div>
    </div>
  );
};
