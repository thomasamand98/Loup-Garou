import villageois from '../villageois.png';
import loup from '../loup2.png';

function test(name:string) {
    console.log(name);
}


export const Player_Liste=() => {
    
    const players= [{
        name:"Thomas",
        role:"Villageois",
        image:villageois,
        gentil:true
    },{
        name:"Antoine",
        role:"Villageois",
        image:villageois,
        gentil:true
    },{
        name:"Celeste",
        role:"Loup",
        image:loup,
        gentil:false
    },{
        name:"Emilie",
        role:"Villageoise",
        image:villageois,
        gentil:true
    },{
        name:"Roxane",
        role:"Villageoise",
        image:villageois,
        gentil:true
    },{
        name:"Emilie",
        role:"Villageoise",
        image:villageois,
        gentil:true
    },{
        name:"Emilie",
        role:"Villageoise",
        image:villageois,
        gentil:true
    },{
        name:"Emilie",
        role:"Villageoise",
        image:villageois,
        gentil:true
    },{
        name:"Emilie",
        role:"Villageoise",
        image:villageois,
        gentil:true
    },]


    

    return (
        <>
        <style>
            {`
                .player {   
                    width: 50%;
                    float: left;
                    margin-bottom: 30px;
                    text-align: center;
                }


                .carte {
                    border-radius: 15px;
                    margin: auto;
                    width: 90%;
                    max-width: 400px;
                    aspect-ratio: 1/0.6;
                    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RNp4Zic_j5oQIZ1cvnqxdWOoH3DiVih4_g&usqp=CAU");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 100% 100%;
                    box-shadow: 0px 0px 10px 2px #FFECC3;
                }
                
                
                .profile {
                    float: left;
                    text-align: left;
                    margin-left: 2%;
                    width: 40%;
                }
                

                
                .profile-picture {
                    float: left;
                    margin-top: 6%;
                    margin-left: 3%;
                    border-radius: 100px;
                    width: 50%;
                }

                .img {
                    width: 80%;
                    border-radius: 5px;
                }
                

                .profile-name {
                    color: white;
                    font-size: 2%;
                    width: 100%;
                }

                .carte:hover {
                    box-shadow: 0px 0px 10px 2px #FF1111;
                    cursor: pointer;
                }

                .carte:hover h1 {
                    color: #CC2222;
                }
                
                @media (min-width: 1327px){ .player{width:33.33%;}}
                @media (min-width: 1600px){ .player{width:25%;}}
                @media (min-width: 2205px){ .player{width:20%;}}
                @media (min-width: 2970px){ .player{width:15%;}}
                

                .carte  {
                    animation-duration: 1s;
                    animation-name: clignoter;
                    animation-iteration-count: infinite;
                    transition: none;
                 }
                 @keyframes clignoter {
                   0%    {box-shadow: 0px 0px 10px 3px #FFECC3; }
                   25%   {box-shadow: 0px 0px 10px 3px #FFECC3; }
                   50%   {box-shadow: 0px 0px 10px 2px #FFECC3; }
                   75%   {box-shadow: 0px 0px 10px 3px #FFECC3; }
                   100%  {box-shadow: 0px 0px 10px 3px #FFECC3; }
                 }



                *{box-sizing:border-box;}
            `}
        </style>
        
        <div className="content">

        {
            players.map(player => {
          
                return ( 
                    <div className="player" key={player.name}>
                        <div className="carte" onClick={event=>test(player.name)}>

                            <div className="profile-picture">
                                <img className="img" src={player.image} alt="Profile"></img>
                            </div>

                            <div className="profile">
                                <br></br>
                                <h1 className="profile-name" >{player.name}</h1>
                                <p>{player.role}</p>
                            </div>
                            
                        </div>
                    </div>

                )
            })
        }
               

        </div>
        </>
    )




} 








