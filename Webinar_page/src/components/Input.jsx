export const Input = ({
    onClick,
    type,
    placeholder
}) => {
    // clsx, cx
    return <span onClick={onClick} className={`  p-4 text-4xl px-2 py-2 text-white cursor-pointer bg-blue-500 rounded-2xl`}>
        <input type={type} placeholder={placeholder} className="bg-blue-500 outline-none p-4"></input>

    </span>
}
