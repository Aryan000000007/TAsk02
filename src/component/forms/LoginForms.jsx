import { useState } from 'react';

const LoginForms = () => {
    const title = "Login form";
    
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
       if(email && password){
        const newEntry = { id:new Date().getTime().toString() ,email, password };

        setAllEntry([...allEntry, newEntry]);
        console.log([...allEntry, newEntry]);

        setEmail("");
        setPassword("");
       }else{
        alert("⚠️ Fill proper data ⚠️")
       }
    };

    return (
        <>
            <h1>{title}</h1>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input
                        type='text'
                        name='email'
                        id='email' 
                        autoComplete='off'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div><br />
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div><br />

                <button type='submit'>Login</button>
            </form>

            <div>
                {
                    allEntry.map((curElemet)=>{
                        const{id,email,password}=curElemet
                        return(
                           // eslint-disable-next-line react/jsx-key
                           <div key={id}>
                            <p>email: -{email}   password: -{password}</p>
                        
                           </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default LoginForms;
