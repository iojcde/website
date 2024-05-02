import { useState, type FormEvent } from "react";

interface CustomElements extends HTMLFormControlsCollection {
  url: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

const CraftMakerForm = () => {
  const [output, setOutput] = useState<string>("");

  return (
    <form
      onSubmit={async (e: FormEvent<CustomForm>) => {
        e.preventDefault();

        const url = e.currentTarget.url.value;

        if (!url) {
          return;
        }

        if (new URL(url).hostname !== "cdn.jcde.xyz") {
          alert("go away! only cdn.jcde.xyz is allowed!");
        }
        const vid = document.querySelector("#output video") as HTMLVideoElement;
        vid.src = url;
        await vid.play();

        setOutput(
          JSON.stringify(
            {
              videoUrl: url,
              type: "video",
              width: vid.videoWidth,
              height: vid.videoHeight,
              aspectRatio: vid.videoWidth / vid.videoHeight,
              name: "",
              url: "",
              date: "",
            },
            null,
            2
          )
        );
      }}
      className="mt-4 flex flex-col gap-2"
    >
      <label className="text-xl">input url</label>
      <input
        name="url"
        className="border rounded-lg focus:outline-none  py-2 px-4"
        type="url"
      />
      <button className="bg-violet-500 text-white rounded-lg py-2 px-4">
        submit
      </button>

      <div id="output">
        <video className="bg-pink-500" autoPlay loop playsInline muted />
        <pre>
          <code>{output}</code>
        </pre>
      </div>
    </form>
  );
};

export default CraftMakerForm;
