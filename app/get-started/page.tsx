import ComponentCard from "../c/ComponentCard";
import GridLayout from "../c/GridLayout";
import Button from "../demo/Button/Button";
import Layout from "../demo/Layout/Layout";
import Progress from "../demo/Progress/Progress";

export default function () {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center space-y-2 bg-background text-foreground font-sans">
      <h1 className="text-6xl font-bold">Free Web Component Library</h1>
      <GridLayout>
        <ComponentCard
          name="Button"
          desc="A nice, customisable button component."
          demo={
            <>
              <Button variant="default">Demo (variant: "default")</Button>
              <Button variant="colourful-and-fun">
                Demo (variant: "colourful-and-fun")
              </Button>
            </>
          }
        />
        <ComponentCard
          demo={
            <>
              <Progress styleVariant="none" value={17} max={100} />
              <Progress styleVariant="polished" value={49} max={100} />
            </>
          }
          name="Progress"
          desc="A simple progress bar."
        />
        <ComponentCard
          name="Layout"
          desc="Easy, out-of-the-box layouts."
          demo={
            <Layout
              type="grid"
              className="rounded-md bg-slate-300 p-2 dark:bg-slate-800"
            >
              <span className="rounded bg-blue-500 p-2 text-white">1</span>
              <span className="rounded bg-blue-500 p-2 text-white">2</span>
              <span className="rounded bg-blue-500 p-2 text-white">3</span>
            </Layout>
          }
        />
      </GridLayout>
    </div>
  );
}
