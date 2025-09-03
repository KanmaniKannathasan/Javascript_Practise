//lexical scope- inner functions have access to variables in their outer scope
const country ='India';
function fnOne()
{
    const city="bangalore";
    function fnTwo()
    {
        console.log('function two',city);
    function fnThree()
    {
        console.log('function three',country); // India -working searches country in
        //  fnThree, then in fnTwo then in fnOne and then checks globally
    }
    fnThree();
    }
    fnTwo();
}
fnOne();