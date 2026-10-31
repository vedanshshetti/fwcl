import Link from "next/link";

function notFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-semibold text-4xl">
        This page is about as real as Ron's love for Lavender.
      </h1>
      <p>
        Don't get it? It's a Harry Potter joke. <br /> 
        Anyway, maybe you made a typo? I don't know, but if you wanna go home,
        <Link href={"/"}>just click here!</Link>
      </p>
      <small className="mt-8 text-xs">
        HTTP/404 Not Found -{" "}
        {new Date().toISOString().replace("T", " ").split(".")[0]} UTC
      </small>
    </div>
  );
}

export default notFound;
