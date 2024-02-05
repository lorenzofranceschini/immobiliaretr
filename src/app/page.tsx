import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="w-full h-screen bg-white ">
      <div className="h-4/6 w-full bg-cyan-800 ">
      <div className="flex justify-center items-center">
        <img src="/Logo_Sito.png" className="mt-[50px]"/>
      </div>
      <div className="flex min-h-full flex-col justify-start px-2 py-20 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-0 text-left text-2xl font-bold leading-9 tracking-tight text-white">Accedi al gestionale</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label className="block text-sm font-medium leading-6 text-white">Email</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" placeholder=" Email..." required className="block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 text-[14px] placeholder:text-[12px]"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium leading-6 text-white">Password</label>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" required placeholder=" Password..."className="block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 text-[14px] placeholder:text-[12px]"/>
        </div>
      </div>

      <div>
      <button type="submit" className="flex w-full justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 ">
          <Link href="/gestionale">Accedi</Link>
        </button>
      </div>
    </form>
  </div>
</div>
      </div>
    </div>
  );
}
