import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div className='bg-zinc-700 flex justify-between px-20 py-4'>
    <Link to="/">
    <h1 className='text-white font-bold'>React MYSQL</h1>
    </Link>
        <ul className='flex gap-x-1'>
            <li>
                <Link to="/" className='bg-yellow-400 px-2 py-1'>Home</Link>
            </li>
            <li>
                <Link to="/new" className='bg-green-500 px-2 py-1' >Create task</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar