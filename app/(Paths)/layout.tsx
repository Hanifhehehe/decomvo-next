export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-20 px-20 pt-28 flex justify-center align-center">
      <main className="max-w-screen-lg min-w-screen-sm min-h-[50vh] flex justify-center items-center">
        {children}
      </main>
    </div>
  );
}
