import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 0,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 100,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 200,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 100,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 300,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 0,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 1000,
        pv: 4300,
        amt: 2100,
    },
];

const TesteGrafico = () => {
    return <LineChart width={750} height={500} data={data} >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    </LineChart>
}


const NavBar = () => {
    return (
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Teste gráfico</span>
                </a>
                <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
};

const Conteudo = () => {
    return (
        <main className="bg-white shadow dark:bg-gray-000 flex m-4">
            <div className='flex-initial w-60'>
                <ul>
                    <li>
                        <div>
                            <p className='self-center text-2xl font-semibold whitespace-nowrap dark:text-black'>
                                Card 1
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className='self-center text-2xl font-semibold whitespace-nowrap dark:text-black'>
                                Card 2
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="bg-white">
                <TesteGrafico />
            </div>
        </main>)
};

const Footer = () => {
    return (


        <footer className="bg-white shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Teste gráfico</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Link 1</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Link 2</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Link 3</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Link 4</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Turma do barulho</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
};

export const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <Conteudo />
            <Footer />
        </div>
    );
}