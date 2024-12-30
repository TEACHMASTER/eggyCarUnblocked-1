
export default function BlogLayout({
  children,params
}: {
  children: React.ReactNode,
  params: {locale:string}
}) {  
  return (
    <>
      <main className="grow">

          {children}

      </main>
    </>
  )
}
