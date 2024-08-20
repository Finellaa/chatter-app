import React from 'react';
import { getAuth, signOut } from 'firebase/auth'
import Navigation from '../pages/Navbar'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHomePageProps{}

const Home: React.FC<IHomePageProps> = () => {
    
    const auth = getAuth();
    return <div> 
               <p>Welcome To chatter</p>
               <div><Navigation isAuth={false} ></Navigation></div>
               <div>
               <button onClick={() => signOut(auth)}>Sign Out of Chatter</button>
              </div>
           </div>;
  };


  export default Home; 