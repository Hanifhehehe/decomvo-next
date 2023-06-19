export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-20 px-20 pt-28 flex justify-center align-center">
      <main className="max-w-screen-lg min-w-screen-sm">{children}</main>
      {/* <div className="min-w-screen-sm max-w-screen-lg">{children}</div> */}
    </div>
  );
}
