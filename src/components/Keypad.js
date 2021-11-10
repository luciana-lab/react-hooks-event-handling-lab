// Code Keypad Component Here
const Keypad = () => {
    return (
        <div>
            <input onChange={() => console.log("Entering password...")} type="password" />
        </div>
    )
}

export default Keypad;