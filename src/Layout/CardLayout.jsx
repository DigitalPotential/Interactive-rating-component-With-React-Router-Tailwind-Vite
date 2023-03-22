import { Outlet } from 'react-router-dom'

const CardLayout = () => {
    return (
        <div className="CardLayout bg-cardblue lg:max-w-[30rem] lg:h-[30rem] rounded-[3rem] ">
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default CardLayout