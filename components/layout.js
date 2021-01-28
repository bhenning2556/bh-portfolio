const Layout = ({children}) => {
  return (
    <>
      <div className="min-vh-100 bg-grad" style={{position: "relative"}}>

        <main>{ children }</main>
      </div>
    </>
  )
}

export default Layout