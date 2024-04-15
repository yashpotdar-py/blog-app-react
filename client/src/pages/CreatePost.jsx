import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, FileInput, Select, TextInput } from "flowbite-react";

export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create A Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            className="flex-1"
            type="text"
            placeholder="Title"
            required
            id="title"
          />
          <Select>
            <option value={"uncategorized"}>Select Category</option>
            <option value={"javascript"}>Javascript</option>
            <option value={"typescript"}>Typescript</option>
            <option value={"reactjs"}>React.js</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-dotted border-teal-500 p-3">
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            gradientDuoTone={"purpleToBlue"}
            size={"sm"}
            outline
          >
            Upload Image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-17"
          required
        />
        <Button type="submit" gradientDuoTone={"purpleToPink"} className="mt-10">
          Publish
        </Button>
      </form>
    </div>
  );
}
