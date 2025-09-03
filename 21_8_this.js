
//Object Literal
const player=
{
    name: 'virat',
    country:'India',
    runs:[40,60,50],
    matchesPlayed: function()
    {
        return this.runs.length;
    },
    totalRuns: function()
    {
        const total= this.runs.reduce((acc,cv)=>
    {
        return acc+=cv;
    },0);
    return total;
    }

}

console.log(player.matchesPlayed()); //3
console.log(player.totalRuns());