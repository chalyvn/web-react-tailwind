import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <div>
            <h1 className="text-[#17b916] text-4xl">Heading</h1>
        </div>
        <div>
           <button className="px-10 py-5 text-white bg-sky-500 m-5 rounded-xl lg:hover:bg-red-400 transition-all motion-safe:hover:scale-125">Confirm</button>
        </div>
        <div className="group">
            <button className="px-10 py-5 text-white bg-sky-500 m-5 rounded-xl group-hover:bg-red-400 transition-colors">Confirm</button>
        </div>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id
                        ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    <li>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full"
                                 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                 alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie
                                        Alexander</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                                </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default App;
