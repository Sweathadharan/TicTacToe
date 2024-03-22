const tiles = document.querySelectorAll(".cell");
const play = document.querySelector("#play");
const win =document.querySelector(".win");
const victory=[
    [0,1,2],
    [2,4,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
let options=["","","","","","","","",""];
let player="X";
let run=false;
game();
function game(){
    tiles.forEach(cell=>cell.addEventListener('click',cellClicked))
    play.addEventListener('click',playAgain);
    run=true;
}
function cellClicked()
{
    
    const index=this.dataset.index;
    if(options[index]!="" || !run){
        return;
    }
    updateCell(this,index);
    Winner();
    playerTurn();

    }
    

function updateCell(cell,index){
    options[index]=player;
    cell.innerHTML=player

}
function playerTurn()
{
    if(player=='X')
    {
        player='O'
    }
    else{
        player='X'
    }

}
function Winner(){
    let sucess=false;
    for(let i=0;i<victory.length;i++)
    {
        const req=victory[i];
        const tileA=options[req[0]];
        const tileB=options[req[1]];
        const tileC=options[req[2]];
        if(tileA==="" || tileB===""||tileC==="")
        {
            continue;
        }
        if(tileA===tileB && tileB===tileC){
            sucess=true;
        }
    }
    if(sucess){
        win.textContent=`${player} Won.`;
        run=false;
        win.classList.add('show')
        playAgain()

    }
    else if(!options.includes("")){
        win.textContent=`Game Draw!`;
        run=false;
        win.classList.add('show')
        playAgain()
    }
   
   
}
function playAgain(){
    play.addEventListener('click',game)
    win.classList.add('show')
    
}