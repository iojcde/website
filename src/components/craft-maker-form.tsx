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
        let img;
        try {
          vid.src = url;

          await vid.play();
          setOutput(
            JSON.stringify(
              {
                src: url,
                type: "video",
                width: vid.videoWidth || img,
                height: vid.videoHeight,
                name: "",
                url: "",
                date: "",
              },
              null,
              2
            )
          );
        } catch (e) {
          if (e instanceof DOMException) {
            // oh its a img
            const img = document.querySelector(
              "#output img"
            ) as HTMLImageElement;
            img.src = url;

            setOutput(
              JSON.stringify(
                {
                  src: url,
                  type: "image",
                  width: img.width,
                  height: img.height,
                  name: "",
                  url: "",
                  date: "",
                },
                null,
                2
              )
            );
          }
        }
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
        <video autoPlay loop playsInline muted />
        <img />

        <pre>
          <code>{output}</code>
        </pre>
      </div>
    </form>
  );
};

export default CraftMakerForm;
