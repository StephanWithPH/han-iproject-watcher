function App() {
  return (
    <div className="bg-hanred">
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
              type="button"
              className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-hanred rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="default-sidebar"
             className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
             aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-handark">
          <div className="flex flex-col h-full justify-between">
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#"
                   className="flex items-center p-2 text-white rounded-lg hover:bg-hanred group">
                  <svg aria-hidden="true"
                       className="w-6 h-6 text-hanred group-hover:text-white"
                       fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Home</span>
                </a>
              </li>
              {[...Array(50)].map((x, i) => (
                <li key={"nav-" + i}>
                  <a href="#"
                     className="flex items-center p-2 text-white rounded-lg hover:bg-hanred group">
                    <svg aria-hidden="true"
                         className="w-6 h-6 text-hanred group-hover:text-white"
                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3">I-project {i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 h-screen">
        <div className="p-4 border-2 border-white border-dashed rounded-lg h-full">
          <div className="flex items-center justify-center rounded bg-handark h-full">
            <p className={"text-white"}>No item selected yet!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
