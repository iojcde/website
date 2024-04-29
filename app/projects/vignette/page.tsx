const Vignette = () => {
  return (
    <div className="py-24">
      <span className="font-medium text-gray-11">Project</span>
      <h1 className="mt-2 text-5xl font-semibold w-fit">Vignette</h1>
      <span className="mt-4 inline-block text-gray-11">2021~Ongoing</span>

      <p className="mt-8 text-xl  text-balance">
        Vignette is the open-source modular streaming toolkit for virtual
        streaming. Working as a Core developer and a Community moderator, I
        helped design and develop the Vignette website refresh with Next.js, and
        helped build the infrastructure supporting it.
      </p>
      <img
        src="https://io.jcde.xyz/images/screenshot/vignette.png"
        className="mt-16 w-full"
        style={{ viewTransitionName: "vignette-img" }}
      />
    </div>
  );
};

export default Vignette;
