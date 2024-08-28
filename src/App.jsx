import Select from "./components/Select.jsx"
import Countries from "./assets/country-currency.json"
function App() {

  return (
    <div className="max-w-[1152px] h-80 bg-slate-50 mx-auto mt-20 rounded-lg">
    <div className="head max-w-[1152px] h-14 flex justify-between rounded-ss-lg rounded-se-lg">
     <a className="w-72 h-14 text-center py-3 rounded-ss-lg" href="#"> <span className="flex gap-2 text-lg justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 28 28" className="tab-icon w-6 h-6"><path fill="currentColor" d="M22.254 11.505a7.563 7.563 0 00-3.726-2.039 7.613 7.613 0 10-9.087 9.08 7.614 7.614 0 1012.813-7.041zm-17.02-.389a5.868 5.868 0 111.72 4.149 5.83 5.83 0 01-1.72-4.149zm15.783 9.925a5.876 5.876 0 01-8.3 0 5.802 5.802 0 01-1.418-2.318 7.598 7.598 0 002.42-.46h.443c.334 1.814 1.32 2.746 2.965 2.746 1.707 0 3.096-1.13 3.096-2.517a.766.766 0 00-1.531 0c0 .403-.558.986-1.565.986-.419 0-1.11-.004-1.417-1.214h1.882a.656.656 0 100-1.313h-1.6c.162-.135.32-.277.471-.427h1.129a.656.656 0 000-1.312h-.073c.202-.319.38-.652.532-.997a1.003 1.003 0 01.638.778.766.766 0 001.531 0 2.51 2.51 0 00-1.691-2.228 7.66 7.66 0 00.176-1.44 5.803 5.803 0 012.312 1.417 5.875 5.875 0 010 8.299z"></path><path fill="currentColor" d="M14.245 12.645c0-1.123-.898-2.02-2.327-2.339l-1.008-.25c-1.04-.231-1.04-.44-1.04-.606 0-.339.54-.81 1.42-.81.445-.022.882.13 1.218.423a.607.607 0 01.201.4.764.764 0 00.765.766.766.766 0 00.766-.765 2.101 2.101 0 00-.649-1.483 3.07 3.07 0 00-1.656-.816v-.487a.656.656 0 10-1.313 0v.496A2.535 2.535 0 008.338 9.45c0 1.602 1.568 1.952 2.221 2.098l1.009.249c.529.118 1.146.41 1.146.848 0 .283-.556.825-1.426.825-.835 0-1.418-.435-1.418-.825a.766.766 0 10-1.532 0 2.51 2.51 0 002.296 2.296v.487a.656.656 0 101.312 0v-.494a2.586 2.586 0 002.299-2.29z"></path></svg> Convert</span></a>
     <a className="w-72 h-14 text-center hover:bg-slate-50 py-3 bg-gray-100" href="#"><span className="flex gap-2 text-lg justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="-5 -5 30 30" class="tab-icon"><path d="M22.735 1.264a.898.898 0 0 0-.965-.201L1.566 9.067a.9.9 0 0 0-.07 1.643l7.886 3.935 3.966 7.86a.9.9 0 0 0 .802.495l.042-.001a.898.898 0 0 0 .795-.57l7.95-20.2a.902.902 0 0 0-.2-.966l-.002.001Zm-8.686 18.64-2.904-5.756 5.53-5.54a.9.9 0 0 0-1.27-1.273l-5.533 5.543-5.77-2.88L20.504 3.5l-6.456 16.404Z"></path></svg> Send</span></a>
     <a className="w-72 h-14 text-center hover:bg-slate-50 py-3 bg-gray-100" href="#"><span className="flex gap-2 text-lg justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="-3 -3 30 30" class="tab-icon"><path d="m21.166 20.326-17.498.001v-3.065l4.956-5.678 4.36 5.864a.836.836 0 0 0 1.318.023l6.695-8.365a.84.84 0 0 0-.105-1.204.833.833 0 0 0-1.194.157l-6.021 7.523-4.332-5.827a.834.834 0 0 0-.636-.335.858.858 0 0 0-.66.284l-4.382 5.02V2.836A.838.838 0 0 0 2.834 2 .832.832 0 0 0 2 2.836v18.328a.838.838 0 0 0 .835.836l18.331-.001a.832.832 0 0 0 .834-.836.837.837 0 0 0-.834-.837Z"></path></svg> Charts</span></a>
     <a className="w-72 h-14 text-center hover:bg-slate-50 py-3 bg-gray-100 rounded-se-lg" href="#"><span className="flex gap-2 text-lg justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48" class="tab-icon w-6 h-6"><path d="m42.559 30.952-3.946-3.91v-6.663a14.512 14.512 0 0 0-3.778-9.737 14.762 14.762 0 0 0-9.374-4.745V3H22.54v2.897a14.878 14.878 0 0 0-9.345 4.771 14.628 14.628 0 0 0-3.807 9.711v6.662l-3.946 3.91a1.318 1.318 0 0 0-.438 1.014v4.345a1.35 1.35 0 0 0 .4 1.053 1.376 1.376 0 0 0 1.061.396h10.23c0 .95.189 1.892.556 2.77a7.239 7.239 0 0 0 1.584 2.35 7.311 7.311 0 0 0 2.37 1.57 7.364 7.364 0 0 0 5.592 0 7.311 7.311 0 0 0 2.37-1.57 7.239 7.239 0 0 0 1.584-2.35c.367-.878.556-1.82.556-2.77h10.23a1.386 1.386 0 0 0 1.062-.396 1.362 1.362 0 0 0 .399-1.053v-4.345a1.31 1.31 0 0 0-.438-1.013ZM24 42.103a4.404 4.404 0 0 1-3.1-1.272 4.326 4.326 0 0 1-1.284-3.072h8.768A4.326 4.326 0 0 1 27.1 40.83a4.404 4.404 0 0 1-3.1 1.272Zm16.074-7.24H7.926v-2.318l3.945-3.91a1.317 1.317 0 0 0 .438-1.014v-7.242a11.53 11.53 0 0 1 3.425-8.192A11.744 11.744 0 0 1 24 8.793c3.1 0 6.074 1.22 8.266 3.394a11.534 11.534 0 0 1 3.425 8.192v7.242c-.01.386.15.755.438 1.014l3.945 3.91v2.317Z"></path></svg> Alerts</span></a>
    </div>
    <div className="body flex flex-col">
      <div className="flex justify-evenly mt-14">
      <input type="number" className=" outline-none border p-4 w-80 h-14 rounded"></input>
      <div className="w-80 h-14 flex gap-3  border border-slate-300 rounded align-center py-4 px-5"><img width={36} src="https://flagcdn.com/w320/us.png" alt="" /><span>USD - United States dollar</span></div>
     <Select countries={Countries}/>
      </div>
      <div className="w-80 h-14 border ml-12 mt-14"></div>
    </div>
  </div>
  )
}

export default App
