export default function(){
    return(
        <div>
            <form onSubmit={handleSubmit}>
            {/* <input type="text" name="username" placeholder="phonenumber" onChange={handleChange} required />
            <input type="password" name="password" placeholder="password" onChange={handleChange} required /> */}
            <button type="submit">Sign In with Google</button>
            {/* <button onClick={switchToRegister} className="text-blue-500 underline">
            Register
          </button> */}
          </form>
        </div>
    );
}