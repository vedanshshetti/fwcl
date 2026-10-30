import ComponentCard from "../c/ComponentCard";
import GridLayout from "../c/GridLayout";
import Button from "../demo/Button/Button";

export default function () {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center space-y-2 bg-background text-foreground font-sans">
      <h1 className="text-6xl font-bold">Free Web Component Library</h1>
      <GridLayout>
        <ComponentCard
          name="Button"
          demo={
            <>
            <Button variant="default">
              Demo (variant: "default")
            </Button>
            <Button variant="colourful-and-fun">
              Demo (variant: "colourful-and-fun")
            </Button>
            </>
          }
        />
      </GridLayout>
    </div>
  );
}
