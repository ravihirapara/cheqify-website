export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Cheqify<span className="text-primary">.app</span>
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          Print Error-Free Cheques in Under 2 Minutes
        </p>
        <p className="text-sm text-muted-foreground">Coming Soon</p>
      </main>
    </div>
  );
}
