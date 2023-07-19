export const NotFoundPage = () => {
    return (
        <div className={"bg-background w-screen h-screen flex justify-center flex-col items-center text-red-500 font-bold text-[4vw]"}>
            <div>
                <span className={"text-red-700"}>404</span> : Page not found
            </div>
            <span className={"text-gray-400 font-medium text-[4vw]"}>this website works only for ./connect?code="*"</span>
        </div>
    )
}