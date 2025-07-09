"use client";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ name, label }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInputRef = useRef();

  function pickImageHandler() {
    imageInputRef.current.click();
  }

  function handleImagePick(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          required
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          onChange={handleImagePick}
        />
        <button
          className={classes.button}
          type="button"
          onClick={pickImageHandler}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
