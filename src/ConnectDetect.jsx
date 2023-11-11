function ConnectDetect({hasInternet}){

    return(
<div>
{hasInternet ? <p>Connected.</p> : <p>Not Connected.</p>}
    </div>
    );
}

export default ConnectDetect;

