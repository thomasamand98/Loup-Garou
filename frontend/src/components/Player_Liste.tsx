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
    }]


    

    return (
        <>
        <style>
            {`
                .player {   
                    width: 100%;
                    float: left;
                    border-left: 50px solid transparent;
                    border-bottom: 30px solid transparent;
                }
                @media(min-width : 200px){.player{width : 100%}}
                @media(min-width : 1000px){.player{width : 50%}}
                @media(min-width : 1500px){.player{width : 33.333%}}

                .carte {
                    border-radius: 15px;
                    margin: auto;
                    width: 500px;
                    height: 250px;
                    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RNp4Zic_j5oQIZ1cvnqxdWOoH3DiVih4_g&usqp=CAU");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: auto 100%;
                    box-shadow: 0px 0px 10px 2px #FFECC3;
                }
                

                .profile {
                    text-align: left;
                    margin-left: 10px;
                }
                
                .profile-picture {
                    float: left;
                    margin-top: 6%;
                    margin-left: 3%;
                    border-radius: 100px;
                    width: 50%;
                }

                .img {
                    width: 190px;
                    border-radius: 5px;
                }

                .profile-name {
                    color: white;
                    font-size: 35px;
                }

                .carte:hover {
                    box-shadow: 0px 0px 10px 2px #FF1111;
                    cursor: pointer;
                }

                .carte:hover h1 {
                    color: #CC2222;
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








